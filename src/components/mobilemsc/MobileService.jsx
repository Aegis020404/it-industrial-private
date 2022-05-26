import React from 'react';
import cl from './../../style/MobileService.module.css';
import MobileServItem from './MobileServItem';
import {connect} from "react-redux/lib";

const MobileService = (props)=>{
    const state = props.mobileServicePage[props.column]
    return (
        <section className={cl.serviceSection}>
            <div className="container">
                {state.title ? <h2 className={cl.serviceTitle}>{state.title}</h2> : ''}
                {state.text ? <p className={cl.serviceDescr}>{state.text}</p> : ''}
                <div className={cl.serviceListBlock}>
                    <ul className={cl.serviceList}>
                        {state.cases.map(e=><MobileServItem title={e.title} descr={e.descr} img={e.img}/>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
const stateToProps = state  => ({mobileServicePage: state.mobileServicePage})
const MobileServiceContainer = connect(stateToProps,{}) (MobileService)
export default MobileServiceContainer