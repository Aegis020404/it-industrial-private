import React from 'react';
import HeroSection from '../HeroSection';
import cl from './../../style/CrmHero.module.css';
import { connect } from 'react-redux/lib/exports';

const CrmHero = (props)=>{
    const state = props.totalHeroPage[props.column]
    return (
        <HeroSection title={state.title} descr={state.descr} classesImg={state.classesimg} gridCl={state.grid}/>
    )
}

const mapStateToProps = state => ({totalHeroPage: state.totalHeroPage})
const CrmHeroContainer = connect(mapStateToProps, {})(CrmHero)
export default CrmHeroContainer