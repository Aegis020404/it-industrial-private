import React, { useEffect, useRef } from "react";

import MobilePortfolio from "../components/mobilemsc/MobilePortfolio";
import MainApplication from "../components/mainP/MainApplication";
import MainSimple from './../components/mainP/MainSimple'
import MainReview from "../components/mainP/MainReview";
import MainQuestion from './../components/mainP/MainQuestion'
import MainLider from "../components/mainP/MainLider";
import MainOfferContainer from "../components/mainP/MainOffer";

import MainDevContainer from "../components/mainP/MainDev";
import MobileServiceContainer from "../components/mobilemsc/MobileService";
import MobileHeroContainer from "../components/mobilemsc/MobileHero";


const CRMPage = ()=>{
    const mobileI = useRef('')
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <div>
            <main ref={mobileI} className="mobile">
                <MobileHeroContainer column={'crm'}/>
                <MobileServiceContainer column={'crmDevelop'}/>

                <MobilePortfolio/>
                <MainDevContainer column={'developerCRM'}/>
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

export default CRMPage