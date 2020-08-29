import React from 'react';
import quotes from '../quotes/quotes';

const NewQuote = (props) => {

      return (
        <div className='quote'>
          <button 
            onClick={props.newState}
            style={{background: quotes[props.index].color, transition: 'background 1.0s ease'}} className='button' id='new-quote'
          >
            New Quote
          </button>
        </div>
      )
  }

  export default NewQuote;