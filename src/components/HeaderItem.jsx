import React from "react";
import cl from '../style/Header.module.css';

const HeaderItem = ({title, info, titleClass, setHeaderNav, burgerA}) => {
    const changePage = (e)=>{
        e.preventDefault()
        setHeaderNav(false)
        burgerA(e)
    }
    return (
        
        <div className={cl.headerIComponent}>
            <h4 className={[cl.headerICtitle, titleClass].join` `} onClick={e=>changePage(e)} >{title}</h4>
            <ul className={cl.headerIClist}>
                {info.map(e=>
                    <li className={[cl.headerICitem, e.class].join` `} key={e.link} >
                        <a className={cl.headerIClink} onClick={e=>changePage(e)}>{e.link}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default HeaderItem