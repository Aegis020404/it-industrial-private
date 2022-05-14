import React from 'react';
import cl from './../../style/VacancyAcc.module.css';

const VacancyAccItem = ({title, descr, whatDo, info})=>{
    const accordionActive = (e)=>{
        e.preventDefault()
        e.target.classList.toggle(cl.accordionActive)
    }
    return (
        <div className={cl.accordion} onClick={e => accordionActive(e)}>
            <div className={cl.accordionHeading}>
                <h3 className={cl.accordionTitle}>{title}</h3>
                <div className={cl.accordionSignBlock}>
                    <span className={cl.accordionLineV}></span>
                    <span className={cl.accordionLineH}></span>
                </div>
            </div>
            <div className={cl.accordionBottomBlock}>
                <p className={cl.accordionDescr}>{descr}</p>
                <p className={cl.accordionWhatDo}>{whatDo}</p>
                <ul className={cl.accordionList}>
                    {info.map(e => 
                    <li className={cl.accordionItem}>
                        <span></span>
                        {e}
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default VacancyAccItem