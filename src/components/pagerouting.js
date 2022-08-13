
import {useEffect, useState} from "react";
import Dashboard from "../pages/dashboard";
import Contacts from "../pages/contacts"
import ContactDetails from "../pages/contactdetails"
import Blog from "../pages/blog"
import Profile from "../pages/profile"
import Weather from "../pages/weather"
import Blank from "../pages/blank"
import Invoice from "../pages/invoice"
import Typography from "../pages/typography";
import Buttons from "../pages/buttons";
import Alerts from "../pages/alerts";
import NavBars from "../pages/navbars";
import TablePage from "../pages/tablepage";
import TimelinePage from "../pages/timelinepage";

function PageRouting() {

    const [page, setPage] = useState("#home");

    useEffect(() => {
        setPage(window.location.hash);
        window.onpopstate = function() {
            setPage(window.location.hash);
        };
    },[])

    return (
        <div style={{minHeight:"90vh"}}>
            {page === "#dashboard" ? (<Dashboard />) : null }
            {page === "" ? (<Dashboard />) : null }
            {page === "#" ? (<Dashboard />) : null }
            {page === "#home" ? (<Dashboard />) : null }
            {page === "#blank" ? (<Blank />) : null }
            {page === "#contacts" ? (<Contacts />) : null }
            {page === "#contactdetails" ? (<ContactDetails />) : null }
            {page === "#blog" ? (<Blog />) : null }
            {page === "#profile" ? (<Profile />) : null }
            {page === "#weather" ? (<Weather />) : null }
            {page === "#invoice" ? (<Invoice />) : null } 
            {page === "#timeline" ? (<TimelinePage />) : null } 
            {page === "#typography" ? (<Typography />) : null } 
            {page === "#buttons" ? (<Buttons />) : null } 
            {page === "#alerts" ? (<Alerts />) : null } 
            {page === "#nav" ? (<NavBars />) : null } 
            {page === "#table" ? (<TablePage />) : null }
        </div>
    )
}

export default PageRouting; 