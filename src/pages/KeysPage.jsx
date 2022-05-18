import React, {useEffect, useRef} from 'react';
import MainApplication from '../components/mainP/MainApplication';
import KeysMain from '../components/keysP/KeysMain';
import cl from './../../src/style/KeysMain.module.css';
import {NavLink} from "react-router-dom";

const KeysPage = () => {
    const keysI = useRef('')
    useEffect(() => {
        keysI.current.classList.toggle('keysI')
    }, [keysI])
    return (
        <div>
            <main ref={keysI} className='keys'>
                <div className="container">
                    <div className={cl.pag}>
                        <NavLink to='/it-industrial-1' ><span className={cl.reddit}>Главная</span></NavLink><span className={cl.pagPoint}></span><span className={cl.gray}>Кейсы</span>
                    </div>
                </div>
                <KeysMain/>
                <MainApplication/>
            </main>
        </div>
    )
}

export default KeysPage