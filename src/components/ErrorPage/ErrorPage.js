import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log()

    return (
        <div className='d-flex justify-content-center align-items-center flex-column bg-white vh-100'>
            <h1>Oops!! An Error Ocurred!</h1>
            <br />
            <p>{error.statusText || error.messages}</p>
            <p>{error.status}</p>
        </div>
    );
};

export default ErrorPage;