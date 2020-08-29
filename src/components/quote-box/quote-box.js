import React from 'react';
import quotes from '../quotes/quotes';
import '../quote-box/quote-box.css';

const QuoteBox = (props) => {

  return (
    <div className='quotation'>
      <p style={{color: quotes[props.index].color, transition: 'color 1.0s ease'}} id='text'>{quotes[props.index].quote}</p>
    </div>
  )
}

  export default QuoteBox;