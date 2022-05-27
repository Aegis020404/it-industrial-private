import React, { useRef, useEffect } from "react";
import MainApplication from "../components/mainP/MainApplication";
import MainLider from "../components/mainP/MainLider";
import MainOfferContainer from "../components/mainP/MainOffer";
import MainResult from "../components/mainP/MainResult";
import MainReview from "../components/mainP/MainReview";
import SeoHead from "../components/seomsc/SeoHead";
import SeoMini from "../components/seomsc/SeoMini";
import SeoMonth from "../components/seomsc/SeoMonth";
import SeoQuestions from "../components/seomsc/SeoQuestions";
import SeoServices from "../components/seomsc/SeoServices";
import SeoStable from "../components/seomsc/SeoStable";
import MainSimple from './../components/mainP/MainSimple'
import MainQuestion from './../components/mainP/MainQuestion'
import SeoReport from './../components/seomsc/SeoReport'
import SeoTariff from './../components/seomsc/SeoTariff';

const SeoPage =()=>{
    const seoI = useRef(false)
    useEffect(()=>{
        seoI.current.classList.toggle('seoI')
    },[seoI])
    return (
        <div>
            <main ref={seoI} className='seo'>
                <SeoHead/>
                <div style={{'marginTop': '90px'}}></div>
                <SeoTariff/>
                <SeoServices/>
                <SeoStable/>
                <SeoQuestions/>
                <SeoMini/>
                <SeoMonth/>
                <div style={{'marginBottom': '155px'}}>
                    <MainOfferContainer/>
                </div>
                <MainApplication/>
                <SeoReport/>
                <MainLider/>
                <MainReview/>
                <MainSimple/>
                <MainQuestion/>
            </main>
        </div>
    )
}

export default SeoPage