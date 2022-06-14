import React, { useEffect, useRef } from "react";
import Header from '../components/componentsUI/Header';
import MainTariffContainer from "../components/componentsUI/mainP/MainTariff";
import MainQuiz from "../components/componentsUI/mainP/MainQuiz";
// import '../style/main.css'
import MainResult from "../components/componentsUI/mainP/MainResult";
import SliderContainer from "../components/componentsUI/mainP/MainSlider";
import MainApplication from "../components/componentsUI/mainP/MainApplication";
import MainOther from "../components/componentsUI/mainP/MainOther";
import MainKeys from "../components/componentsUI/mainP/MainKeys";
import MainLider from "../components/componentsUI/mainP/MainLider";
import MainSimple from "../components/componentsUI/mainP/MainSimple";
import MainQuestion from '../components/componentsUI/mainP/MainQuestion';
import Footer from "../components/componentsUI/Footer";
import MainOfferContainer from "../components/componentsUI/mainP/MainOffer";
import MainReview from "../components/componentsUI/mainP/MainReview";
import MainDevContainer from "../components/componentsUI/mainP/MainDev";
import cl from "../components/style/MainTariff.module.css";
import Container from '../components/componentsUI/Container'
const MainPage = ()=>{

    const mainI = useRef('')
    useEffect(()=>{
        mainI.current.classList.toggle('mainL')
    },[mainI])
    return (
        <div>
            <Container>
            <main ref={mainI} className="main">
                <SliderContainer />

                <MainTariffContainer title={<div className={cl.tariffTittleBlock}>
                    <h2 className={cl.tariffTitle}>Тарифы на разработку сайтов</h2>
                </div>}/>

                <MainQuiz />
                <MainApplication/>


                <MainDevContainer column={'turnkeyWebsite'}/>

                <MainOfferContainer/>
                <MainResult />

                <MainOther/>

                <MainKeys/>
                <MainLider/>
                <MainReview/>

                <MainSimple/>

                <MainQuestion/>
            </main>
            </Container>
           
           
        </div>
    )
}

export default MainPage