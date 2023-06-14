import React, { useState, useEffect } from "react";

import generatePassword from "../../utils/generatePassword.js";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

export default function Password() {
  const [password, setPassword] = useState("_ _ _ _ _ _ _ _");

  const handleClick = () => {
    setPassword(generatePassword());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Box sx={{ boxSizing: 'border-box', maxWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', p: 1, mb: 4 }}>
      <Box sx = {{ minWidth: '100%', display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button variant="text" onClick={handleCopy}>
          <ContentCopyIcon style={{color: 'red'}} />
        </Button>
        <h1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', margin: 0 }}>{password}</h1>
      </Box>
      
      <Button variant="contained" onClick={handleClick} sx={{ p: 1 }}>
        <RefreshRoundedIcon />
      </Button>
    </Box>
  );
}
