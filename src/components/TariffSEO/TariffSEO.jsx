import React, {useState} from 'react';
import {connect} from "react-redux/lib";
import cl from './../../style/tariffSEO.module.css'
import {Swiper} from "swiper";
import MainApplication from "../mainP/MainApplication";
import MyModal from "../UI/modal/MyModal";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";

const TariffSeo = (props) => {
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    React.useEffect(() => {
        let swiper1 = null;
        let swiper2 = null;
        let mediaQuerySize = 576;

        function inititalSwiper() {
            if (swiper1 || swiper2) return
            swiper1 = new Swiper('.SwiperTarrifSEO1', {
                slidesPerView: 'auto',
            })
            swiper2 = new Swiper('.SwiperTarrifSEO2', {
                slidesPerView: 'auto',
            })
        }

        function destroySwiper() {
            if (!(swiper1 || swiper2))
                swiper1.destroy();
            swiper2.destroy();
            swiper1 = null;
            swiper2 = null;

        }

        function loadResize() {
            let windowWidth = window.innerWidth
            if (windowWidth <= mediaQuerySize) {
                inititalSwiper()
            } else {
                destroySwiper()
            }
        }

        window.addEventListener('load', loadResize);
        window.addEventListener('resize', loadResize);

    })
    return (
        <div className={cl.tariffSEO}>
            <div className={cl.column1}>
                <div className={cl.title}>Тарифы на продвижение сайтов</div>
                <div className={cl.text}>Стоимость SEO продвижения рассчитывается индивидуально и зависит от
                    конкурентности
                    вашей ниши и количества поисковых фраз
                </div>

            </div>
            <div className="swiper SwiperTarrifSEO1">
                <div className={"swiper-wrapper " + cl.wrapperSlid}>
                    {props.tarrifSEOPage.firstColumn.map(el =>
                        <div className={"swiper-slide " + cl.swiperSl}>
                            <div className={cl.titleCase + ' ' + el.color}>
                                <div className={cl.titleCaseSpan}>{el.title}</div>
                            </div>
                            <ul className={cl.wrapList}>
                                {
                                    el.list.map(li => <li className={cl.listTitle}> {li}</li>)
                                }
                            </ul>
                            <div className={cl.price}>{el.price}</div>
                            <MyBtnBlank classes={cl.btn} onClick={e => {
                                e.preventDefault(e);
                                setModal(true)
                            }}>Заказать</MyBtnBlank>
                        </div>
                    )}
                </div>
                <div className="swiper-scrollbar"></div>
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