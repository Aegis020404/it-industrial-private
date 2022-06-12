import React, { useEffect, useRef } from 'react';
import NavPagesHead from '../components/UI/navpage/MyNavPages';
import VacancyAcc from '../components/vacancyP/VacancyAcc';
import Container from './../components/Container'
const VacancyPage = ()=>{
    const vacancyI = useRef('')
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        vacancyI.current.classList.toggle('vacancyI')
    },[vacancyI])
    const infoPage = [{text: 'Вакансии'}]
    return (
        <>
            <Container>
                <main ref={vacancyI} className='vacancy'>
                    <NavPagesHead navItems={infoPage}/>
                    <VacancyAcc/>
                </main>
            </Container>
        </>
    )
}

export default VacancyPage