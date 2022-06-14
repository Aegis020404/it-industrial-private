import React, {useEffect, useRef} from "react";
import ContactMap from "../components/componentsUI/contactsP/ContactMap";
import ContactsLocationInfo from '../components/componentsUI/contactsP/ContactsLocationInfo';
import NavPagesHead from "../components/componentsUI/UI/navpage/MyNavPages";
import Container from '../components/componentsUI/Container'

const ContactsPage = ()=>{
    const contactI = useRef('')
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        contactI.current.classList.toggle('contactsI')
    },[contactI])
    const infoPage = [{text: 'Контакты'}]
    return (
        <>
            <Container>
                <main ref={contactI} className="contacts">
                    <NavPagesHead navItems={infoPage}/>
                    <ContactsLocationInfo/>
                    <ContactMap/>
                </main>
            </Container>
        </>
        
    )
}
export default ContactsPage