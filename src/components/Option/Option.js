import React, { useState } from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, idx, correctAnswer }) => {
    const [correctAns, setCorrectAns] = useState(0);
    const [incorrectAns, setIncorrectAns] = useState(0);

    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success('Correct Answer!', { autoClose: 800 }, {
                position: toast.POSITION.TOP_CENTER
            });
            let newValue = correctAns + 1;
            setCorrectAns(newValue)
        }
        else {
            toast.warning('Your Answer is Incorrect!', { autoClose: 800 }, {
                position: toast.POSITION.TOP_CENTER
            });
            let newValue = incorrectAns + 1;
            setIncorrectAns(newValue)
        }
    }
    console.log('correct ans', correctAns)
    console.log('incorrect ans', incorrectAns)

    return (
        <div className='option-container menu-font'>
            <button onClick={() => handleAnswer(option)} className='option mt-2'>
                {idx + 1}. {option}
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;