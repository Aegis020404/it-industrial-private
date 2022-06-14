import React, {useRef, useEffect} from "react";
import MarketplaceSeoText from "../components/componentsUI/genericServices/marketplaceSeo/MarketplaceSeoText";
import MainApplication from "../components/componentsUI/mainP/MainApplication";
import MainLider from "../components/componentsUI/mainP/MainLider";
import MainOfferContainer from "../components/componentsUI/mainP/MainOffer";
import MainQuestion from "../components/componentsUI/mainP/MainQuestion";
import MainResult from "../components/componentsUI/mainP/MainResult";
import MainSimple from "../components/componentsUI/mainP/MainSimple";
import MobileHero from '../components/componentsUI/MobileHero';
import Container from '../components/componentsUI/Container';

const MarketplaceSeoPage = ()=>{
    const marketI = useRef('')
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        marketI.current.classList.toggle('marketplaceI')
    },[marketI])
    return (
        <>
            <Container>
                <main ref={marketI} className="marketplace">
                    <MobileHero column='marketPlace'/>
                    <MarketplaceSeoText/>
                    <MainApplication/>
                    <MainOfferContainer/>
                    <MainLider/>
                    <MainResult/>
                    <MainSimple/>
                    <MainQuestion/>
                </main> 
            </Container>
            
        </>
    )
}

export default MarketplaceSeoPage