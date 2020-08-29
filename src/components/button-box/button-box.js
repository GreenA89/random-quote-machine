import React from 'react';
import Socials from '../socials/socials';
import NewQuote from '../new-quote/new-quote';
import '../button-box/button-box.css';

const ButtonBox = (props) => {
    return (
      <div className='button-box'>
        <Socials index={props.index}/>
        <NewQuote index={props.index} newState={props.newState} />
      </div>
    )
  }

  export default ButtonBox;