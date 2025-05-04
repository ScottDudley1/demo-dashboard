import Papa from 'papaparse';
import dayjs from 'dayjs';

/**
 * Adjusts dates in the dataset to make them appear recent
 * @param {Array} data - The parsed CSV data
 * @returns {Array} The data with updated dates
 */
const updateDatesToRecent = (data) => {
    if (!data || !data.length || !data[0].Date) return data;
    
    // Identify the date format and get min/max dates
    let minDate = new Date('9999-12-31');
    let maxDate = new Date('1000-01-01');
    
    // First pass: identify date range in the original data
    data.forEach(row => {
        if (!row.Date) return;
        
        try {
            const rowDate = new Date(row.Date);
            if (!isNaN(rowDate.getTime())) {
                if (rowDate < minDate) minDate = new Date(rowDate);
                if (rowDate > maxDate) maxDate = new Date(rowDate);
            }
        } catch (error) {
            console.warn('Error parsing date:', row.Date);
        }
    });
    
    // Calculate original date range and new date range
    const originalRangeMs = maxDate.getTime() - minDate.getTime();
    if (originalRangeMs <= 0) return data; // Invalid range
    
    // Set new date range to end yesterday
    const yesterday = dayjs().subtract(1, 'day').endOf('day');
    const newEndDate = yesterday.toDate();
    const newStartDate = yesterday.subtract(
        originalRangeMs / (1000 * 60 * 60 * 24), // Convert ms to days
        'day'
    ).toDate();
    
    // Second pass: transform each date to the new range
    return data.map(row => {
        const newRow = { ...row };
        if (!newRow.Date) return newRow;
        
        try {
            const originalDate = new Date(newRow.Date);
            if (isNaN(originalDate.getTime())) return newRow;
            
            // Calculate position in original range (0 to 1)
            const position = (originalDate.getTime() - minDate.getTime()) / originalRangeMs;
            
            // Apply position to new range
            const newDateMs = newStartDate.getTime() + position * (newEndDate.getTime() - newStartDate.getTime());
            const newDate = new Date(newDateMs);
            
            // Format the date in the same format as the original
            newRow.Date = newDate.toISOString().split('T')[0]; // YYYY-MM-DD format
        } catch (error) {
            console.warn('Error transforming date:', newRow.Date);
        }
        
        return newRow;
    });
};

export const loadCSVData = async (filePath) => {
    try {
        const response = await fetch(filePath);
        const csvText = await response.text();
        
        return new Promise((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                complete: (results) => {
                    // Apply date transformation and resolve
                    const updatedData = updateDatesToRecent(results.data);
                    resolve(updatedData);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error('Error loading CSV:', error);
        throw error;
    }
};