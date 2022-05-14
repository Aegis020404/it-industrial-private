import React, { useEffect, useRef } from 'react';
import AboutSimple from '../components/aboutP/AboutSimple';
import AboutText from '../components/aboutP/AboutText';
import MainApplication from '../components/mainP/MainApplication';


const AboutCompanyPage = ()=>{
    const aboutI = useRef('')
    useEffect(()=>{
        aboutI.current.classList.toggle('aboutI')
    },[aboutI])
    return (
       <div>
           <main ref={aboutI} className='about'>
                <AboutText/>
                <AboutSimple/>
                <MainApplication/>
           </main>
       </div>
    )
}

export default AboutCompanyPage 