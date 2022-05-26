import React, {useRef, useState} from 'react';
import {connect} from "react-redux/lib";
import cl from './../../style/tariffSEO.module.css'
import {Swiper, Pagination} from "swiper";
import MyModal from "../UI/modal/MyModal";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import "swiper/css";
import "swiper/css/navigation";
const TariffSeo = (props) => {
    let swiperWrapper = useRef(false),
         pag = useRef(false),
         state = props.tarrifSEOPage[props.column]
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    React.useEffect(() => {
        let swiper = null;
        let mediaQuerySize = null

        function inititalSwiper() {
            if (swiper) return
            swiper = new Swiper(`.${props.column}`, {
                modules: [Pagination],
                slidesPerView: 'auto',
                speed: 400,
                // spaceBetween: 10,
                pagination: {
                    el: `.pag${props.column}`,
                    type: 'bullets',

                }
            })
        }

        function destroySwiper() {
            if (!swiper) return
                swiper.destroy();
            swiper = null;

        }

        function loadResize() {
            mediaQuerySize = state.cases.length * 400;
            let windowWidth = window.innerWidth
            if (windowWidth <= mediaQuerySize) {
                pag.current.style.display = 'block'
            swiperWrapper.current.style.justifyContent = 'flex-start'
                inititalSwiper()
            } else {
                swiperWrapper.current.style.justifyContent = 'center'
                pag.current.style.display = 'none'
                destroySwiper()
            }
        }

        window.addEventListener('load', loadResize);
        window.addEventListener('resize', loadResize);

    })
    return (
        <div className={cl.tariffSEO}>
            <div className={cl.column1}>
                {state.title ? <div className={cl.title}>{state.title}</div> : ''}
                {state.text ? <div className={cl.text}>{state.text}</div> : ''}
                {state.titleText ? <div className={cl.titleText}>{state.titleText}</div> : ''}

            </div>
            <div className={"swiper " + props.column + ' ' + cl.swiper}>
                <div className={"swiper-wrapper " + cl.wrapperSlid} ref={swiperWrapper}>
                    {state.cases.map(el =>
                        <div className={"swiper-slide " + cl.swiperSl}>
                            <div className={cl.titleCase + ' ' + el.color}>
                                <div className={cl.titleCaseSpan}>{el.title}</div>
                            </div>
                            {Array.isArray(el.list) ? <ul className={cl.wrapList}>
                                {
                                    el.list.map(li => <li className={cl.listTitle}><div className={cl.circle}/> <div>{li}</div></li>)
                                }

                            </ul>
                            : <div className={cl.wrapList}><div className={cl.caserText}>{el.list}</div></div>
                            }
                            <div className={cl.btnWrap}>
                            <div className={cl.price}>{el.price}</div>
                                <MyBtnBlank classes={cl.btn} onClick={e => {
                                    e.preventDefault(e);
                                    setModal(true)
                                }}>Заказать</MyBtnBlank>
                            </div>
                        </div>
                    )}
                </div>
                <div className="swiper-scrollbar"></div>
                <div className={`pag${props.column}` + ' ' + cl.pag} ref={pag}></div>
                {/*<div className={"pag" + props.column}></div>*/}
            </div>


            <MyModal visible={modal} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </div>

    )
        ;
};
let mapStateToProps = state => ({
    tarrifSEOPage: state.tarrifSEOPage
})

const TariffSeoContainer = connect(mapStateToProps, {})(TariffSeo)
export default TariffSeoContainer;