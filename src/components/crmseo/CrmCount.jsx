import React from "react";
import TariffSeoContainer from "../TariffSEO/TariffSEO";
import cl from './../../style/CrmCount.module.css';

const CrmCount = ()=>{
    return (
        <div className="container">
            <h2 className={cl.title}>Стоимость разработки CRM-систем </h2>
            <TariffSeoContainer column={'firstColumn'}/>
        </div>
    )
}

export default CrmCount