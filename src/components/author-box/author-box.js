import React from 'react';
import quotes from '../quotes/quotes';

const AuthorBox = (props) => {
    
  return (
    <div className='author'>
      <p style={{color: quotes[props.index].color, transition: 'color 1.0s ease'}} id='author'>- {quotes[props.index].author}</p>
    </div>
  )
}

  export default AuthorBox;