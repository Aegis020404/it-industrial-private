import React from "react";
import cl from '../../style/MainSimple.module.css';
import MainSItem from "./MainSItem";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

import MainOItem from "./MainOItem";
import MainSimpleList from "./MainSimpleList";

const MainSimple = () => {

    

    return (
        <section className={cl.simple}>
            <div className={cl.simpleContent}>
                <h2 className={cl.simpleTitle}>С нами надежно, легко и комфортно</h2>
                <MainSimpleList/>
            </div>
        </section>
    )
}

export default MainSimple