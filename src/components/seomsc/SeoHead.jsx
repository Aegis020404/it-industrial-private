import React from 'react';
import HeroSection from '../HeroSection';
import cl from './../../style/SeoHead.module.css';

const SeoHead = ()=>{
    const infoArr = {title: 'SEO продвижение сайтов в Москве', descr: 'Увеличим поток целевых заявок из Яндекса и Google', classesImg: cl.darts}
    return (
        <HeroSection title={infoArr.title} descr={infoArr.descr} classesImg={infoArr.classesImg}/>
    )
}

export default SeoHead