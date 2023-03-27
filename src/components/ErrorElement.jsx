import {useRouteError} from 'react-router-dom'

const ErrorElement = () => {
    document.title = '404'
    const errormsg = useRouteError();
    return(
        <div className="error_page">
            <h1>Oops!! Something Went Wrong..</h1>
            <h2>Status: {errormsg.status},</h2>
            <h3>Error : {errormsg.error.message}</h3>
        </div>
    )
}

export default ErrorElement;