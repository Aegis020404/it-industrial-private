import React, {useEffect, useRef} from "react";
import ContactMap from "../components/contactsP/ContactMap";
import ContactsLocationInfo from './../components/contactsP/ContactsLocationInfo';

const ContactsPage = ()=>{
    const contactI = useRef('')
    useEffect(()=>{
        contactI.current.classList.toggle('contactsI')
    },[contactI])
    return (
        <div>
            <main ref={contactI} className="contacts">
                <ContactsLocationInfo/>
                <ContactMap/>
            </main>
        </div>
    )
}
export default ContactsPage