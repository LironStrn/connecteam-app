'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { merriweather, inter } from '@/app/ui/fonts';

export default function MultiSelect({ selectContent }) {
    const [selected, setSelected] = useState('option1');

    const handleSelect = (event, newSelection) => {
        if (newSelection !== null) {
            setSelected(newSelection);
        }
    };

    const selectStyle = {
        width: {
            xs: '100%',
            lg: '700px'
        },
        '& .MuiToggleButton-root': {
            border: 'none',
            borderRadius: '30px',
            fontWeight: '700',
            color: '#6A6A6A',
            padding: '8px 16px',
            '&.Mui-selected': {
                color: '#ED8E00',
                border: '2px solid #ED8E00',
                fontWeight: 'bold',
                backgroundColor: 'transparent',
            },
        },
    }
    return (
        <div style={{ padding: '10px' }} className='flex flex-col'>
            <p style={{ fontWeight: 'bold', marginBottom: '8px' }} className={`${inter.className}`}>Dolores nostrum neque quas</p>
            <Box
                sx={{
                    display: 'inline-flex',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    padding: '4px',
                }}
            >
                <ToggleButtonGroup
                    value={selected}
                    exclusive
                    onChange={handleSelect}
                    sx={selectStyle}
                    className='flex justify-between flex-col md:flex-row'
                >
                    {selectContent.options.map((option, i) => {
                        return (
                            <ToggleButton key={i+1} value={option.value} className={`${inter.className}`}>{option.label}</ToggleButton>
                        )
                    })}
                </ToggleButtonGroup>
            </Box>
        </div>
    )
}