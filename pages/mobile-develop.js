import React, { useEffect, useRef } from "react";
import MobileHeroContainer from "../components/componentsUI/MobileHero";
import MobilePortfolio from "../components/componentsUI/mobilemsc/MobilePortfolio";
import MainApplication from "../components/componentsUI/mainP/MainApplication";
import MobileServiceContainer from "../components/componentsUI/mobilemsc/MobileService";
import MainSimple from '../components/componentsUI/mainP/MainSimple'
import MainReview from "../components/componentsUI/mainP/MainReview";
import MainQuestion from '../components/componentsUI/mainP/MainQuestion'
import MainLider from "../components/componentsUI/mainP/MainLider";
import MainOfferContainer from "../components/componentsUI/mainP/MainOffer";
import TariffSeoContainer from "../components/componentsUI/TariffSEO/TariffSEO";
import MainDevContainer from "../components/componentsUI/mainP/MainDev";
import cl from '../components/style/MobilePage.module.css'
import MobileCount from '../components/componentsUI/mobilemsc/MobileCount'
import Container from '../components/componentsUI/Container'
const MobilePage = ()=>{
    const mobileI = useRef(false)
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <>
            <Container>
                <main ref={mobileI} className="mobile">
                    <MobileHeroContainer column={'mobile'}/>
                    <MobileCount/>
                    <MobileServiceContainer column={'mobileDevelop'}/>
                    <MobilePortfolio/>
                    <MainDevContainer column={'developerMobile'}/>
                    <MainApplication/>
                    <div className={cl.offer}>
                        <MainOfferContainer/>
                    </div>
                    <MainLider/>
                    <MainReview/>
                    <MainSimple/>
                    <MainQuestion/>
                </main>
            </Container>
        </>
    )
}

export default MobilePage