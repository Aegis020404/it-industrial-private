import React, {useState} from 'react';
import cl from './../../style/VacancyAcc.module.css';

const VacancyAccItem = ({title, descr, whatDo, info})=>
{
    const [active, setActive] = useState(false)
    return (
        <div className={active ? [cl.accordion, cl.accordionActive].join` ` : cl.accordion} onClick={e=>setActive(!active)}>
            <div className={cl.accordionHeading}>
                <h3 className={cl.accordionTitle}>{title}</h3>
                <div className={cl.accordionSignBlock}>
                    <span className={cl.accordionLineV}></span>
                    <span className={cl.accordionLineH}></span>
                </div>
            </div>
            <div className={cl.accordionBottomBlock}>
                <div className={cl.accordionCard}>
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
        </div>
    )
}

export default VacancyAccItem


// .accordionCard {
//     max-height: 0px;
//     opacity: 0;
// }