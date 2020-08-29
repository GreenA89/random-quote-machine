import React from 'react';
import QuoteBox from '../quote-box/quote-box';
import AuthorBox from '../author-box/author-box';
import ButtonBox from '../button-box/button-box';

const QuoteMachine = (props) => {
    return (
      <div className='quote-box' id='quote-box'>
        <QuoteBox index={props.index} />
        <AuthorBox index={props.index} />
        <ButtonBox index={props.index} newState={props.newState} />
      </div>
    );
  };

  export default QuoteMachine;