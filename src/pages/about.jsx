import React, { useEffect, useRef } from 'react';
import AboutSimple from '../components/aboutP/AboutSimple';
import AboutText from '../components/aboutP/AboutText';
import MainApplication from '../components/mainP/MainApplication';
import NavPagesHead from '../components/UI/navpage/MyNavPages';
import Container from './../components/Container';

const AboutCompanyPage = ()=>{
    const aboutI = useRef('')
    const infoNav = [{text: 'О компании'}]
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        aboutI.current.classList.toggle('aboutI')
    },[aboutI])
    return (
        <>
            <Container>
                <main ref={aboutI} className='about'>
                        <NavPagesHead navItems={infoNav}/>
                        <AboutText/>
                        <AboutSimple/>
                        <MainApplication/>
                </main>
            </Container>
        </>
       
    )
}

export default AboutCompanyPage 