import React, {useEffect, useState} from 'react';
import {connect} from "react-redux/lib";
import cl from './../style/keySite.module.css'
import {NavLink} from "react-router-dom";
import MainApplication from "../components/mainP/MainApplication";
import miniPhone from './../assets/img/miniPhone.png'
import MyModal from "../components/UI/modal/MyModal";
import MyThxModal from "../components/UI/thxmodal/MyThxModal";
import MyBtnBlank from "../components/UI/buttonborder/MyBtnBlank";

const KeySite = (props) => {
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    let [state] = props.KeySitePage.filter(el => el.href === props.match.path)
    console.log(state)
    return (
        <div className={cl.KeySite} >
            <div className={"container"}>
                <div className={cl.pag}>
                    <NavLink to='/it-industrial-1'>
                        <span className={cl.achor}>Главная</span>
                    </NavLink>
                    <NavLink to='/keys'>
                        <span className={cl.achor}>Кейсы</span>
                    </NavLink>
                    <span className={cl.currentAchor}>{state.descrAchor}</span>
                </div>


            </div>
            <div className={cl.container}>
                <div className={cl.descr}>{state.descr}</div>
                <div className={cl.achorSite}>
                    <a href={state.achorSite[1]} target='_blank' className={cl.hrefSite} >{state.achorSite[0]}
                    </a></div>
                <div className={cl.about}>
                    <div className={cl.aboutCompany}>
                        <div className={cl.title}>О компании</div>
                        <div className={cl.text}>
                            {state.aboutCompany}
                        </div>
                    </div>
                    <div className={cl.task}>
                        <div className={cl.title}>Задача</div>
                        <div className={cl.text}>
                            {state.task}
                        </div>
                    </div>
                </div>

            </div>


            {state.imageInfo.map((el, i) => (
                <div className={cl.photoWrap}>
                    <h1 className={cl.imageInfo}>{state.imageInfo[i][0]}</h1>
                    <img src={state.imageInfo[i][1]} alt="" className={cl.photo}/>
                </div>
            ))
            }

            <div className={cl.publicity}>
                <div className={cl.wrapMiniPhone}>
                    <img src={miniPhone} alt="miniPhone" className={cl.miniPhone}/>
                </div>
                <div className={cl.titlePubl}>Понравилось? Закажите подобное решение</div>
                <div className={cl.textPubl}>Мы свяжемся с вами, ответим на интересующие вопросы и подготовим
                    коммерческое предложение
                </div>
                <div className={cl.tel}>+7 (925) 117-00-46</div>
                <MyBtnBlank classes={cl.btn} onClick={e => {
                    e.preventDefault(e);
                    setModal(true)
                }}>получить консультацию</MyBtnBlank>
            </div>
                <MyModal visible={modal} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
                <MyThxModal visible={thxModal} setVisible={setThxModal}/>


            <MainApplication/>
        </div>
    );
};
const mapStateToProps = (state) => ({
    KeySitePage: state.KeySitePage
})
const KeySiteContainer = connect(mapStateToProps, {})(KeySite)
export default KeySiteContainer;