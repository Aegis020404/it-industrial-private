import React, {useEffect, useRef} from 'react';
import MainApplication from '../components/componentsUI/mainP/MainApplication';
import KeysMain from '../components/componentsUI/keysP/KeysMain';
import NavPagesHead from '../components/componentsUI/UI/navpage/MyNavPages';
import Container from '../components/componentsUI/Container';
const KeysPage = () => {
    const keysI = useRef('')
    useEffect(() => {
        keysI.current.classList.toggle('keysI')
        document.body.scrollTo({top:0,behavior:'smooth'})
    }, [keysI])
    const infoPage = [{text: 'Кейсы'}]
    return (
        <>
          <Container>
                <main ref={keysI} className='keys'>
                    <NavPagesHead navItems={infoPage}/>
                    <KeysMain/>
                    <MainApplication/>
                </main>
            </Container>
        </>
      
    )
}

export default KeysPage