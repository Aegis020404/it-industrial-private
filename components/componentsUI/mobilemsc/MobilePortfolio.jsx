import React from "react";
import cl from '../../style/MobilePortfolio.module.css';

import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import Link from "next/link";

const MobilePortfolio = ()=>{
    return (
        <section className={cl.portSection}>
            <div className="container">
                <h2 className={cl.portTitle}>Портфолио</h2>
                <p className={cl.portDescr}>Мы стремимся к длительным отношениям с погружением в мир бизнеса клиента. Это наш способ находить точные, красивые и своевременные решения</p>
                <div className={cl.portCardBlock}>
                    <figure className={cl.portLeft}>
                        <div className={cl.portLBlock}>
                            <img src={`/img/mob-phones.svg`} />
                        </div>
                        <figcaption className={cl.portImgDescr}>Перевозки App</figcaption>
                    </figure>
                    <figure className={cl.portRight}>
                        <div className={cl.portRBlock}>
                            <img src={`/img/mob-crm.svg`}  />
                        </div>
                        <figcaption className={cl.portImgDescr}>Разработка индивидуальной CRM-системы</figcaption>
                    </figure>
                </div>
                <div className={cl.portBtnBlock}>
                    <Link href='/keys'>
                        <a  className={cl.portLink}>
                        <MyBtnBlank classes={cl.portBtn} onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}}>ВСЕ КЕЙСЫ</MyBtnBlank>
                        </a>
                      
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MobilePortfolio