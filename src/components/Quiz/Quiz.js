import React from 'react';
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = ({ quiz, idx }) => {
    const { correctAnswer, id, options, question } = quiz;
    // console.log(quiz)
    return (
        <div className='quiz px-4'>
            <h5 className='heading-font'>Quiz {idx + 1}: {question}</h5>
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