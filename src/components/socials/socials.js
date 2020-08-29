import React from 'react';
import quotes from '../quotes/quotes';
import '../socials/socials.css';

const Socials = (props) => {
    return (
      <div className='socials'>
        <button style={{background: quotes[props.index].color, transition: 'background 1.0s ease'}} className='button social'>
          <a style={{textDecoration: 'none', color: 'white'}} href='twitter.com/intent/tweet' id='tweet-quote'>Tw</a>
        </button>
        <button style={{background: quotes[props.index].color, transition: 'background 1.0s ease'}} className='button social' id='fb-quote'>
          <a style={{textDecoration: 'none', color: 'white'}} href='facebook.com/intent/share' id='fb-quote'>Fb</a>
        </button>
      </div>  
    )
  }

  export default Socials;