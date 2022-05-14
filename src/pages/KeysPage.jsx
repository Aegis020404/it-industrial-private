import React, { useEffect, useRef } from 'react';
import MainApplication from '../components/mainP/MainApplication';
import KeysMain from '../components/keysP/KeysMain';


const KeysPage = () => {
    const keysI = useRef('')
    useEffect(()=>{
        keysI.current.classList.toggle('keysI')
    },[keysI])
    return (
        <div>
            <main ref={keysI} className='keys'>
                <KeysMain/>
                <MainApplication/>
            </main>
        </div>
    )
}

export default KeysPage