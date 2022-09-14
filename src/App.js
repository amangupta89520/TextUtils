import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import { ThemeProvider } from 'styled-components';
import { lighttheme, darktheme, getTheme } from './Variables';
import { useState } from 'react';
import { GlobalStyle } from './components/styles/Global';
import Alert from './components/Alert';
import ColorPallete from './components/ColorPallete';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

function App() {

  const [mode, setMode] = useState('light');
  const [showAlert, setShowAlert] = useState(null);
  const [themeColor, setThemeColor] = useState('#0074D9');

  const fireAlert = (content) => {
      setShowAlert(content);
      setTimeout(() => {
          setShowAlert(null);
      }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  const toggleThemeColor = (color) => {
      setThemeColor(color);
  }

  return (
    <>
      <ThemeProvider theme={ mode === 'light'? getTheme('light', themeColor) : getTheme('dark', themeColor)} >
        <GlobalStyle />
        <BrowserRouter>
          <Navbar title='TextUtils' toggleMode={toggleMode} />
          <ColorPallete themeColors={themeColors} toggleThemeColor={toggleThemeColor} />
          {showAlert && <Alert content={showAlert} />}
          <Routes>
              <Route path='/' element={<TextForm heading='Enter your text to analyze' fireAlert={fireAlert} />} />
              <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
    
  );
}

export default App;
