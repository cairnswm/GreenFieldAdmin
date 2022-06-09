
import {useEffect, useState} from "react";
import Login from "../pages/login"
import Signup from "../pages/signup"
import Forgot from "../pages/forgot"

function AuthRouting() {

    const [page, setPage] = useState("#login");

    useEffect(() => {
        setPage(window.location.hash);
        window.onpopstate = function() {
            setPage(window.location.hash);
        };
    },[])

    return (
        <>
            {page !== "#signup" && page !== "#forgot" && page !== "#change" ? (<Login />) : null }
            {page === "#signup" ? (<Signup />) : null }
            {page === "#forgot" ? (<Forgot />) : null }
        </>
    )
}

export default AuthRouting;