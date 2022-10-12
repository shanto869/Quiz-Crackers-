import React, { useState } from 'react';
import './Option.css'


const Option = ({ option, idx, correctAnswer, handleAnswer }) => {



    return (
        <div className='option-container menu-font'>
            <button onClick={() => handleAnswer(option, correctAnswer)} className='option mt-2'>
                {idx + 1}. {option}
            </button>
            {/* <input onClick={() => handleAnswer(option)} className='option mt-2' type="radio" name="option" value={option} id="" />{option} */}

        </div>
    );
};

export default Option;