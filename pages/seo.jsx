import React, { useRef, useEffect } from "react";
import MainApplication from "../components/componentsUI/mainP/MainApplication";
import MainLider from "../components/componentsUI/mainP/MainLider";
import MainOfferContainer from "../components/componentsUI/mainP/MainOffer";
import MainResult from "../components/componentsUI/mainP/MainResult";
import MainReview from "../components/componentsUI/mainP/MainReview";
import SeoMini from "../components/componentsUI/seomsc/SeoMini";
import SeoMonth from "../components/componentsUI/seomsc/SeoMonth";
import SeoQuestions from "../components/componentsUI/seomsc/SeoQuestions";
import SeoServices from "../components/componentsUI/seomsc/SeoServices";
import SeoStable from "../components/componentsUI/seomsc/SeoStable";
import MainSimple from '../components/componentsUI/mainP/MainSimple'
import MainQuestion from '../components/componentsUI/mainP/MainQuestion'
import SeoReport from '../components/componentsUI/seomsc/SeoReport'
import SeoTariff from '../components/componentsUI/seomsc/SeoTariff';
import KeysMainSeoSwiperContainer from "../components/componentsUI/seomsc/KeysMainSeoSwiper";
import MobileHero from '../components/componentsUI/MobileHero'
import Container from "../components/componentsUI/Container";

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