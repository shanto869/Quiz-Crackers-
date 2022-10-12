import React, { useState } from 'react';
import Option from '../Option/Option';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ quiz, idx }) => {
    const { correctAnswer, id, options, question } = quiz;

    const [correctAns, setCorrectAns] = useState(0);
    const [incorrectAns, setIncorrectAns] = useState(0);


    const handleAnswer = (option, correctAnswer) => {
        let countCorrect = 0;
        if (option === correctAnswer) {
            countCorrect = countCorrect + 1;
            toast.success('Correct Answer!', { autoClose: 800 }, {
                position: toast.POSITION.TOP_CENTER
            });

            console.log(countCorrect)
        }
        else {
            toast.warning('Your Answer is Incorrect!', { autoClose: 800 }, {
                position: toast.POSITION.TOP_CENTER
            });
            let newValue = incorrectAns + 1;
            setIncorrectAns(newValue)
        }
    }


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
                            key={idx} option={option} idx={idx} correctAnswer={correctAnswer} handleAnswer={handleAnswer}>
                        </Option>)
                }
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Quiz;