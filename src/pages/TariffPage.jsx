import React, { useRef, useEffect } from "react";
import TariffList from "../components/tariffP/TariffList";
import NavPagesHead from "../components/UI/navpage/MyNavPages";

const TariffPage = ()=>{
    const tariffRef = useRef('')
    useEffect(()=>{
        tariffRef.current.classList.toggle('tariffI')
    },[tariffRef])
    const infoPage = [{text: 'Тарифы'}]
    return (
        <div>
            <main ref={tariffRef} className='tariff'>
                <NavPagesHead navItems={infoPage}/>
                <TariffList/>
            </main>
        </div>
    )
}

export default TariffPage