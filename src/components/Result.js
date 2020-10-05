import React from 'react';


const Result = ({score, playAgain}) => (
    <div className = 'result'>
        <div className='score'>Your score is {score} / 5 correct answers!</div>
        <button className='playAgainBtn' onClick={playAgain}>Play Again!</button>
    </div>
);

export default Result;
