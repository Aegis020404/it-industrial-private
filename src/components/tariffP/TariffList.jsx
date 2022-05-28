import React from 'react';
import cl from './../../style/TariffList.module.css';


import MainTariffContainer from '../mainP/MainTariff';

const TariffList = () => {
    return (
        <section className={cl.tariff}>
            <span className={cl.tariffBackground}></span>
            <div className="container">
                <h1 className={cl.tariffTitle}>Тарифы</h1>
            </div>
                <MainTariffContainer/>
        </section>
    )
}

export default TariffList