import React from 'react';
import cl from './MyBtns.module.css';

const MyBtns = ({arrBtns, selectBtn, btnsClasses, btnClasses})=>{
    return (
        <div className={[cl.btns, btnsClasses].join` `}>
        {arrBtns.map((el, i) => (
            <button className={el.selected ? [cl.btn, cl.btnSelected].join` ` : [btnClasses,cl.btn].join` `} key={i} my_key={i}
                    onClick={(e,i) => {
                        selectBtn(e.target.getAttribute('my_key'))
                        e.preventDefault();
                    }}>
                    {el.text}
            </button>
        ))}
        </div>
    )
}



export default MyBtns