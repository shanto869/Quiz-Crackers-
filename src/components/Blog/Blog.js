import { HandRaisedIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='mb-5 interview-container'>
            <h4 className='mt-5'>Interview Question</h4>

            <div className="accordion accordion-flush w-75 mx-auto mt-4" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header  py-3" id="flush-headingOne">
                        <button className="accordion-button collapsed fs-5 heading-color heading-font"
                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                            aria-expanded="false" aria-controls="flush-collapseOne">
                            What is the purpose of React Router?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p><HandThumbUpIcon className='arrow'></HandThumbUpIcon>
                                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header  py-3" id="flush-headingTwo">
                        <button className="accordion-button collapsed fs-5 heading-color heading-font"
                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                            aria-expanded="false" aria-controls="flush-collapseTwo">
                            How does Context API work?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                            <p>For this, React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header  py-3" id="flush-headingThree">
                        <button className="accordion-button collapsed fs-5 heading-color heading-font"
                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                            aria-expanded="false" aria-controls="flush-collapseThree">
                            What is useref hook in react?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                            <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;