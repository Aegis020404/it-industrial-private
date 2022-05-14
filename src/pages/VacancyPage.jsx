import React, { useEffect, useRef } from 'react';
import VacancyAcc from '../components/vacancyP/VacancyAcc';

const VacancyPage = ()=>{
    const vacancyI = useRef('')
    useEffect(()=>{
        vacancyI.current.classList.toggle('vacancyI')
    },[vacancyI])
    return (
        <div>
            <main ref={vacancyI} className='vacancy'>
                <VacancyAcc/>
            </main>
        </div>
    )
}

export default VacancyPage