import React, { useEffect, useRef } from "react";

import MobilePortfolio from "../components/mobilemsc/MobilePortfolio";
import MainApplication from "../components/mainP/MainApplication";
import MainSimple from './../components/mainP/MainSimple'
import MainReview from "../components/mainP/MainReview";
import MainQuestion from './../components/mainP/MainQuestion'
import MainLider from "../components/mainP/MainLider";
import MainOfferContainer from "../components/mainP/MainOffer";
import CrmHero from "../components/crmseo/CrnHero";
import CrmCount from "../components/crmseo/CrmCount";
import CrmOpportunities from '../components/crmseo/CrmOpportunities'

const CRMPage = ()=>{
    const mobileI = useRef('')
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <div>
            <main ref={mobileI} className="mobile">
                <CrmHero/>
                <CrmCount/>
                <CrmOpportunities/>
                <MobilePortfolio/>
                {/* СЮДА ЭТАПЫ РАЗРАБОТКИ */}
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