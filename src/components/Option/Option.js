import React from 'react';
import './Option.css'

const Option = ({ option, idx, correctAnswer }) => {
    console.log(option)





    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            console.log(option, 'correct')

        }
        else {
            console.log(option, 'vul')

        }
    }

    return (
        <div className='option-container'>
            <button onClick={() => handleAnswer(option)} className='option mt-2'>
                {idx + 1}. {option}
            </button>
        </div>
    );
};

export default Option;