// utils/demoData.js

export const generateMockDashboardData = (days = 14) => {
    const baseDate = new Date();
    const data = [];
  
    for (let i = 0; i < days; i++) {
      const date = new Date(baseDate); // clone to avoid mutation
      date.setDate(baseDate.getDate() - i);
  
      data.push({
        date: date.toISOString().split('T')[0],
        earnings: Math.floor(Math.random() * 20000 + 10000), // $10k–$30k
        tasks: Math.floor(Math.random() * 200 + 50),         // 50–250
        pageViews: Math.floor(Math.random() * 1000 + 250),   // 250–1250
        downloads: Math.floor(Math.random() * 100 + 10)      // 10–110
      });
    }
  
    return data.reverse(); // so dates are in chronological order
  };
  