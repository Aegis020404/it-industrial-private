import React from 'react';
import cl from './../../style/TariffList.module.css';

const TariffList = ()=>{
    return (
        <section className={cl.tariff}>
             <span className={cl.tariffBackground}></span>
            <div className="container">
                <h1 className={cl.tariffTitle}>Тарифы</h1>
                <div className={cl.tariffListBlock}>
                    
                </div>
            </div>
        </section>
    )
}

export default TariffList