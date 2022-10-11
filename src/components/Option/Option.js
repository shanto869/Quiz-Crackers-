import React from 'react';
import './Option.css'

const Option = ({ option, idx, correctAnswer }) => {
    console.log(option)
    const handleAnswer = (correctAns) => {
        console.log(correctAns)
    }

    return (
        <div className='option-container'>
            <button onClick={() => handleAnswer(correctAnswer)} className='option mt-2'>
                {idx + 1}. {option}
            </button>
        </div>
    );
};

export default Option;