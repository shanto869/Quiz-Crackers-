import React, { useState } from 'react';
import Option from '../Option/Option';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'



const Quiz = ({ quiz, idx }) => {
    const { correctAnswer, id, options, question } = quiz;


    const handleCorrectAns = (correctAns) => {
        alert(
            `Correct Answer is: "${correctAns}"`
        )
    }

    return (
        <div className='quiz px-4 bg-white'>
            <div className='d-flex justify-content-between '>
                <h5 className='heading-font pe-5'>Quiz {idx + 1}: {question}</h5>
                <EyeIcon onClick={() => handleCorrectAns(correctAnswer)} className="arrow " />
            </div>
            <div className=''>
                {
                    options.map((option, idx) =>
                        <Option
                            key={idx} option={option} idx={idx} correctAnswer={correctAnswer}>
                        </Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;