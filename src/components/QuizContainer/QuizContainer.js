import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizContainer.css'

const QuizContainer = () => {
    const quizLoad = useLoaderData();
    const quiz = quizLoad.data;
    const { logo, name, questions, total } = quiz;
    // console.log(questions)

    return (
        <div className='quiz-container pt-5'>
            <h4 className='text-center text-white'>Quiz of {name}</h4>
            <div className=''>
                {
                    questions.map((quiz, idx) => <Quiz key={quiz.id} quiz={quiz} idx={idx}></Quiz>)
                }
            </div>
        </div>
    );
};

export default QuizContainer;