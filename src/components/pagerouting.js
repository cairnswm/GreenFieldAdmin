
import {useEffect, useState} from "react";
import Dashboard from "../pages/dashboard";
import Typography from "../pages/typography";
import ComponentText from "../pages/componenttext"
import Contacts from "../pages/contacts"
import ContactDetails from "../pages/contactdetails"
import Blog from "../pages/blog"
import Profile from "../pages/profile"
import Blank from "../pages/blank"

function PageRouting(props) {

    const [page, setPage] = useState("#home");

    useEffect(() => {
        setPage(window.location.hash);
        window.onpopstate = function() {
            setPage(window.location.hash);
        };
    },[])

    return (
        <>
            {page === "#dashboard" ? (<Dashboard />) : null }
            {page === "" ? (<Dashboard />) : null }
            {page === "#" ? (<Dashboard />) : null }
            {page === "#home" ? (<Dashboard />) : null }
            {page === "#blank" ? (<Blank />) : null }
            {page === "#typography" ? (<Typography />) : null }
            {page === "#component/text" ? (<ComponentText />) : null }
            {page === "#contacts" ? (<Contacts />) : null }
            {page === "#contactdetails" ? (<ContactDetails />) : null }
            {page === "#blog" ? (<Blog />) : null }
            {page === "#profile" ? (<Profile />) : null }
        </>
    )
}

export default PageRouting;