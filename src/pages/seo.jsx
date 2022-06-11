import React, { useRef, useEffect } from "react";
import MainApplication from "../components/mainP/MainApplication";
import MainLider from "../components/mainP/MainLider";
import MainOfferContainer from "../components/mainP/MainOffer";
import MainResult from "../components/mainP/MainResult";
import MainReview from "../components/mainP/MainReview";
import SeoMini from "../components/seomsc/SeoMini";
import SeoMonth from "../components/seomsc/SeoMonth";
import SeoQuestions from "../components/seomsc/SeoQuestions";
import SeoServices from "../components/seomsc/SeoServices";
import SeoStable from "../components/seomsc/SeoStable";
import MainSimple from '../components/mainP/MainSimple'
import MainQuestion from '../components/mainP/MainQuestion'
import SeoReport from '../components/seomsc/SeoReport'
import SeoTariff from '../components/seomsc/SeoTariff';
import KeysMainSeoSwiperContainer from "../components/seomsc/KeysMainSeoSwiper";
import MobileHero from '../components/MobileHero'
import Container from "../components/Container";

const SeoPage =()=>{
    const seoI = useRef(false)
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        seoI.current.classList.toggle('seoI')
    },[seoI])
    return (
        <>
            <Container>
            <main ref={seoI} className='seo'>
                <MobileHero column='seo'/>
                <div className='seo-page-t'>
                   <SeoTariff/>
                </div>
                <SeoServices/>
                <KeysMainSeoSwiperContainer/>
                <SeoStable/>
                <SeoQuestions/>
                <SeoMini/>
                <SeoMonth/>
                <div className='seo-page-o' >
                   <MainOfferContainer/>
                </div>{/*</div>*/}
                <MainApplication/>
                <SeoReport/>
                <MainLider/>
                <MainReview/>
                <MainSimple/>
                <MainQuestion/>
            </main>
            </Container>
        </>
    )
}

export default SeoPage