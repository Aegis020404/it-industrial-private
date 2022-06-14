import React, { useRef, useEffect } from "react";
import MainApplication from "../components/componentsUI/mainP/MainApplication";
import TariffList from "../components/componentsUI/tariffP/TariffList";
import TariffSeoDuo from "../components/componentsUI/tariffP/TariffSeoDuo";
import NavPagesHead from "../components/componentsUI/UI/navpage/MyNavPages";
import MainTariffContainer from '../components/componentsUI/mainP/MainTariff';
import Container from "../components/componentsUI/Container";

const TariffPage = ()=>{
    const tariffRef = useRef('')
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        tariffRef.current.classList.toggle('tariffI')
    },[tariffRef])
    const infoPage = [{text: 'Тарифы'}]
    return (
        <>
            <Container>
                <main ref={tariffRef} className='tariff'>
                    <NavPagesHead navItems={infoPage}/>
                    <TariffList/>
                    <TariffSeoDuo/>
                    <MainApplication/>
                </main>
            </Container>
            
        </>
    )
}

export default TariffPage