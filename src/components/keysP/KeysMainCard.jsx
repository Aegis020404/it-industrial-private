import React from "react";
import MyBtns from "../UI/btnsnav/MyBtns";
import cl from './../../style/KeysMain.module.css';
import { connect } from 'react-redux/lib/exports';
import { selectBtnKeys } from "../../redux/keysNav-redux";
import KeysMainSites from "./KeysMainSites";

const KeysMainCard = (props)=>{
    return (
        <div className={cl.keysNavBlock}>
            <nav className={cl.keysNav}>
                <MyBtns arrBtns={props.state.btns} selectBtn={props.selectBtnKeys} btnsClasses={cl.keysNavList} btnClasses={cl.keysNavItem}/>
            </nav>
            <KeysMainSites/>
        </div>
    )
}

let mapStateToProps = state => ({
    state: state.keysNavPage
})
const KeysMainContainer = connect(mapStateToProps, {selectBtnKeys})(KeysMainCard)

export default KeysMainContainer