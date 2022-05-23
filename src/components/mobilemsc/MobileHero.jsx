import React from 'react';
import HeroSection from '../HeroSection';
import cl from './../../style/MobileHero.module.css';

const MobileHero = ()=>{
    const infoArr = {title: 'Разработка мобильных приложений в Москве', descr: 'Аналитика, дизайн и разработка цифровых решений для бизнеса', classesimg: cl.phoneHand}  
    return (
        <section className={cl.mobileSection}>
           <HeroSection title={infoArr.title} descr={infoArr.descr} classesImg={infoArr.classesimg}/>
        </section>
    )
}

export default MobileHero