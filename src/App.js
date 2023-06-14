// Asset and Style Imports
import bg from './assets/bg-min.jpg';
import './App.css';

// Component Imports
import Password from './components/Password/index.js';
import PassLengthInput from './components/PassLengthInput/index.js';
import PassParamsCheckBox from './components/PassParamsCheckBox/index.js';

// MUI Imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ed4432',
    },
    secondary: {
      main: '#00bfd5',
    }
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ boxSizing: 'border-box', userSelect: 'none', width: '100vw', height: '100vh', backgroundImage: `url(${bg})`, backgroundSize: 'cover', p: 2 }}>
        <header>
          <h1 style={{margin: 'auto'}}>Cipher</h1>
          <p>Passwords stronger than a T-Rex, Longer than a giraffe's neck, Un-crackable like a codex.</p>
        </header>
        <main>
          <Box sx={{ boxSizing: 'border-box', width:'100%', display: 'flex-grid', gridTemplateRows: 'auto', rowGap: 1, }}>
            <Password />
            
            <PassLengthInput />
              
            <PassParamsCheckBox />
          </Box>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
