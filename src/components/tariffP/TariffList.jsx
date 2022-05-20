import React from 'react';
import cl from './../../style/TariffList.module.css';
import {NavLink} from 'react-router-dom'
import MainTariffContainer from "../mainP/MainTariff";
import TariffSeoContainer from "../TariffSEO/TariffSEO";
import MainApplication from "../mainP/MainApplication";
const TariffList = () => {
    return (
        <section className={cl.tariff}>
            <span className={cl.tariffBackground}></span>
            <div className="container">
                {/*<div className={cl.pagNav}>*/}
                {/*    <NavLink to='/it-industrial-1'>*/}
                {/*    <span className={cl.navMain}>Главная</span>*/}
                {/*    </NavLink>*/}
                {/*    <span className={cl.navCurrent}>Тарифы</span>*/}
                {/*</div>*/}
                {/*<h1 className={cl.tariffTitle}>Тарифы</h1>*/}

                {/*<MainTariffContainer/>*/}

                <TariffSeoContainer/>
            </div>
            <MainApplication/>
        </section>
    )
}

export default TariffList