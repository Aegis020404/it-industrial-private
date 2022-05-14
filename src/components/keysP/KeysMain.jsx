import React from "react";
import cl from './../../style/KeysMain.module.css';
import MyTitle from "../UI/titlepage/MyTitle";
import KeysMainCard from "./KeysMainCard";

const KeysMain = ()=>{
    return (
        <section className={cl.keysMain}>
            <div className={["container"].join` `}>
                <div className={cl.keysCont}>
                    <MyTitle title='Кейсы' classes={cl.keysTitle}/>
                    <KeysMainCard/>
                </div>               
            </div>
        </section>
    )
}

export default KeysMain