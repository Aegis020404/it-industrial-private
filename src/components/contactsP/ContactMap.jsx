import React from 'react';
import cl from './../../style/ContactMap.module.css';
import Map from './../../assets/img/map.jpg';

const ContactMap = (props)=>{
 
    return (
        <section className={cl.mapSection}>
            <div className={cl.map}>
                <img src={Map} alt="" />
            </div>
        </section>  
    )

}



export default ContactMap