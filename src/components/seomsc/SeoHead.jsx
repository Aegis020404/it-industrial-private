import React from 'react';
import HeroSection from '../HeroSection';
import cl from './../../style/SeoHead.module.css';
import {connect} from "react-redux/lib";

const SeoHead = props => {
    const state = props.totalHeroPage[props.column]
    return (
        <HeroSection title={state.title} descr={state.descr} classesImg={state.classesimg}/>
    )
}
const mapStateToProps = state => ({totalHeroPage: state.totalHeroPage})
const SeoHeadContainer = connect(mapStateToProps, {})(SeoHead)
export default SeoHeadContainer