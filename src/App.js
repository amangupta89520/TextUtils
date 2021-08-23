import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('#042743');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleColor = (colr) => { 
    if(mode === 'dark'){
      setColor(colr);
      document.body.style.backgroundColor = color;
    }
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = color;
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 2000)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#ECF0F1';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor}/>
        <Alert alert={alert}/>
        
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
