import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PassLengthInput = () => {

    const [passLength, setPassLength] = useState(8);

    useEffect(() => {
        const storedState = localStorage.getItem('pass-length');
        if (!storedState) {
            localStorage.setItem('pass-length', passLength);
        }
        setPassLength(JSON.parse(storedState));
    }, []);

    const handleChange = (event) => {
        event.preventDefault();
        if (/^\d*$/.test(event.target.value)) {
            setPassLength(event.target.value);
            localStorage.setItem("pass-length", event.target.value);
        }
    };

    return (
        <Box sx={{display: 'flex', alignItems: 'end', mb: 2 }}>
            <TextField
                id={"pass-length"}
                variant="standard"
                value={passLength}
                onChange={handleChange}
                sx={{width: '32px', mr: 1 }}
            />
            <p style={{margin: '0px'}}> characters</p>
        </Box>
    )
};

export default PassLengthInput;

