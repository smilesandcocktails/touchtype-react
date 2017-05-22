import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const msg = {
  intro: "A big welcome to my website! You have entered into press the space bar to continue",
  one: "My Name is Cara. What is yours? Press on the Space Bar before letting me know your name.",
  two: "Lovely to meet you. Press Enter to continue",
  none: "Sorry your browser does not have voice support features",

}

ReactDOM.render(
  <App msg={msg}/>,
  document.getElementById('root')
);

registerServiceWorker();
