import React from 'react';
import {connect} from "react-redux/lib/";
import KeysMainSeoItem from "../keysP/KeysMainSeoItem";
import cl from "../../style/KeysMainSeo.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const KeysMainSeoSwiper = (props) => {
    console.log(props)
    let state = props.KeysMainSeoPage;
    return (
        <div>
            <Swiper
                modules={[Navigation,Pagination]}
                pagination={{
                    type:"fraction",
                    el: '.paginationRev',
                }}
                navigation ={{
                    prevEl: '.arrPrevRevSeo',
                    nextEl: '.arrNextRevSeo',
                    // disabledClass: cl.disabledMainRew
                }}
                autoHeight={true}
                >
                {state.map((e,i)=> <SwiperSlide>
                    <div className={"container " + cl.container}>
                    <KeysMainSeoItem nameCompany={e.nameCompany} linkCompany={e.linkCompany} beenTopTen={e.changeSeo.beenChange.topTen} schedule={e.schedule} scheduleSet={e.scheduleSet} beenTraffic={e.changeSeo.becameChange.traffic} becameTopTen={e.changeSeo.becameChange.topTen} becameTraffic={e.changeSeo.becameChange.traffic}/>
                    </div>
                    </SwiperSlide>
                )}
                    <div className={cl.controller}>
                        <div className={ cl.arrow + " arrPrevRevSeo " + cl.arrPrevRevSeo} ></div>
                        <div className={"paginationRev " + cl.pag }></div>
                        <div className={ cl.arrow + " arrNextRevSeo " + cl.arrNextRevSeo} ></div>
                    </div>
            </Swiper>
        </div>
    );
};

const mSTP = state => ({ KeysMainSeoPage: state.KeysMainSeoPage})

const KeysMainSeoSwiperContainer = connect(mSTP, {})(KeysMainSeoSwiper)

export default KeysMainSeoSwiperContainer;