import React, { useState } from 'react';
import QuoteMachine from './components/quote-machine/quote-machine';
import quotes from './components/quotes/quotes';
import './App.css';

const App = () => {
  const [index, setIndex] = useState(0);
  
  const newState = () => setIndex(Math.floor(Math.random() * (7 - 0)) + 0);

    return (
      <div 
        className='background' 
        style={{background: quotes[index].color, transition: 'background 1.0s ease'}}>
          <QuoteMachine index={index} newState={newState} />
          <p className='credit'>by Alex Green</p>
      </div>
    );
}

export default App;
