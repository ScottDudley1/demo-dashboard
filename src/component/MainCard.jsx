// src/component/MainCard.jsx
import React from 'react';
import { Card, CardContent } from '@mui/material';

const MainCard = ({ children }) => {
    return (
        <Card
            sx={{
                border: '1px solid',
                borderColor: 'divider',
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                }
            }}
        >
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default MainCard;