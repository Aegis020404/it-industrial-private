import React, { useEffect, useRef } from "react";
import cl from '../components/style/CRM.module.css'
import MobilePortfolio from "../components/componentsUI/mobilemsc/MobilePortfolio";
import MainApplication from "../components/componentsUI/mainP/MainApplication";
import MainSimple from '../components/componentsUI/mainP/MainSimple'
import MainReview from "../components/componentsUI/mainP/MainReview";
import MainQuestion from '../components/componentsUI/mainP/MainQuestion'
import MainLider from "../components/componentsUI/mainP/MainLider";
import MainOfferContainer from "../components/componentsUI/mainP/MainOffer";
import MainDevContainer from "../components/componentsUI/mainP/MainDev";
import MobileServiceContainer from "../components/componentsUI/mobilemsc/MobileService";
import MobileHero from '../components/componentsUI/MobileHero'
import CrmCount from '../components/componentsUI/crmseo/CrmCount';
import Container from "../components/componentsUI/Container";

const CRMPage = ()=>{
    const mobileI = useRef('')
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <>
            <Container>
            <main ref={mobileI} className="mobile">
                <MobileHero column='crm'/>
                <CrmCount/>
                <MobileServiceContainer column={'crmDevelop'}/>
                <MobilePortfolio/>
                <MainDevContainer column={'developerCRM'}/>
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

export default CRMPage