import React, { useEffect, useRef } from "react";
import MobileHeroContainer from "../components/mobilemsc/MobileHero";
import MobilePortfolio from "../components/mobilemsc/MobilePortfolio";
import MainApplication from "../components/mainP/MainApplication";
import MobileServiceContainer from "../components/mobilemsc/MobileService";
import MainSimple from './../components/mainP/MainSimple'
import MainReview from "../components/mainP/MainReview";
import MainQuestion from './../components/mainP/MainQuestion'
import MainLider from "../components/mainP/MainLider";
import MainOfferContainer from "../components/mainP/MainOffer";
import TariffSeoContainer from "../components/TariffSEO/TariffSEO";
import MainDevContainer from "../components/mainP/MainDev";

const MobilePage = ()=>{
    const mobileI = useRef('')
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <div>
            <main ref={mobileI} className="mobile">
                <MobileHeroContainer column={'mobile'}/>
                <TariffSeoContainer column={'mobileCreate'}/>
                <MobileServiceContainer column={'mobileDevelop'}/>
                <MobilePortfolio/>
                 <MainDevContainer column={'developerMobile'}/>
                <MainApplication/>
                <div style={{marginBottom: '130px', marginTop: '120px'}}>
                    <MainOfferContainer/>
                </div>
                <MainLider/>
                <MainReview/>
                <MainSimple/>
                <MainQuestion/>
            </main>
        </div>
    )
}

export default MobilePage