import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';

function App(props) {
  const currentWeather = useState({});
  const error = useState(null);
  const loaded = useState(false);
  const forecast = useState([]);
  return (
    <div className="App">
      <Form
        currentWeather={currentWeather}
        forecast={forecast}
        error={error}
        loaded={loaded}
        inputText={props.state.inputText}
        updateInputText={props.updateInputText}
        clearInput={props.clearInput}
      />
    </div>
  );
}

export default App;
