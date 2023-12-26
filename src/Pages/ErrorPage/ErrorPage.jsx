import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
    }, 5000);
});

    return (
        <div style={{textAlign: "center"}}>
            <h1>Error Page</h1>
            <p>404</p>
            <p>You Will Be Redirectionated to Home in 05 Seconds</p>
        </div>
    )
}

export default ErrorPage;