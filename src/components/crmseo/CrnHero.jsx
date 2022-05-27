import React from 'react';
import HeroSection from '../HeroSection';
import cl from './../../style/CrmHero.module.css';

const CrmHero = ()=>{
    const infoArr = {title: 'Разработка CRM-систем в Москве',descr: 'Учет, контроль и автоматизация бизнеса', classesImg: cl.crm}
    return (
        <HeroSection title={infoArr.title} descr={infoArr.descr} classesImg={infoArr.classesImg} gridCl={cl.grid}/>
    )
}

export default CrmHero