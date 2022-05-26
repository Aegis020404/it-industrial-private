import React from 'react';
import HeroSection from '../HeroSection';
import cl from './../../style/MobileHero.module.css';
import {connect} from "react-redux/lib";

const MobileHero = (props)=>{
    console.log(props)
    const state = props.mobileHeroPage[props.column]
    return (
        <section className={cl.mobileSection}>
           <HeroSection title={state.title} descr={state.descr} classesImg={state.classesimg}/>
        </section>
    )
}
const mapStateToProps = state => ({mobileHeroPage: state.mobileHeroPage})
const MobileHeroContainer = connect(mapStateToProps, {}) (MobileHero)
export default MobileHeroContainer