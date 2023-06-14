import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const PassParamsCheckBox = () => {
    
    const [passParams, setPassParams] = useState({
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: false,
    });

    useEffect(() => {
        const storedState = localStorage.getItem('pass-params');
        if (!storedState) {
          localStorage.setItem('pass-params', JSON.stringify(passParams));
        }
        setPassParams(JSON.parse(storedState));
    }, []);
    
    const handleChange = (event) => {
        let updatedState = {...passParams, [event.target.name]: event.target.checked };
        setPassParams(updatedState);
        localStorage.setItem('pass-params', JSON.stringify(updatedState));
    };

    const { lowercase, uppercase, numbers, symbols } = passParams;

    return (
        <Box sx={{  }}>
            <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Include</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={lowercase} onChange={handleChange} name="lowercase" />}
                        label="Lowercase"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={uppercase} onChange={handleChange} name="uppercase" />}
                        label="Uppercase"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={numbers} onChange={handleChange} name="numbers" />}
                        label="Numbers"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={symbols} onChange={handleChange} name="symbols" />}
                        label="Symbols"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
};

export default PassParamsCheckBox;