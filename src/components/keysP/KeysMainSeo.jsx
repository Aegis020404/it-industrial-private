import React from 'react';
import cl from './../../style/KeysMainSeo.module.css';
import KeysMainSeoItem from './KeysMainSeoItem';
import ecoSchedule from './../../assets/img/eco-schedule-2.jpg';
import ecoSheduleM from './../../assets/img/ecoScheduleM.jpg'
import stroySchedule from './../../assets/img/stroymat-schedule-2.jpg';
import stroyScheduleM from './../../assets/img/stroySchedule.jpg';
import veniSchedule from './../../assets/img/venikolor-schedule-2.jpg';
import veniScheduleM from './../../assets/img/veniScheduleM.jpg';
import autoSchedule from './../../assets/img/autoestetica-schedule-2.jpg';
import autoScheduleM from './../../assets/img/autoSchedule.jpg';
import llumarSchedule from './../../assets/img/llumar-schedule-2.jpg';
import llumarScheduleM from './../../assets/img/llumarSchedule.jpg';

const KeysMainSeo = ({classesTabs})=>{
    const infoArr = [{nameCompany: 'Эковтор', linkCompany: 'ec-vtor.ru',changeSeo: {beenChange: {topTen:'67 запросов', traffic: '312'}, becameChange:{topTen:'453 запроса', traffic: '1 600'}}, schedule: ecoSchedule, scheduleSet: ecoSheduleM},
    {nameCompany: 'Строймат', linkCompany: 'строй-мат.рф',changeSeo: {beenChange: {topTen:'23 запроса', traffic: '200'}, becameChange:{topTen:'550 запросов', traffic: '400'}}, schedule: stroySchedule,scheduleSet: stroyScheduleM},
    {nameCompany: 'Вениколор', linkCompany: 'venicolor.ru',changeSeo: {beenChange: {topTen:'5 запросов', traffic: '50'}, becameChange:{topTen:'453 запроса', traffic: '2 300'}}, schedule: veniSchedule, scheduleSet: veniScheduleM},
    {nameCompany: 'Автоэстетика', linkCompany: 'autoestetica-msk.ru',changeSeo: {beenChange: {topTen:'5 запросов', traffic: '50'}, becameChange:{topTen:'453 запроса', traffic: '2 300'}}, schedule: autoSchedule, scheduleSet: autoScheduleM},
    {nameCompany: 'Люмар', linkCompany: 'lumar.ru',changeSeo: {beenChange: {topTen:'20 запросов', traffic: '50'}, becameChange:{topTen:'4000 запроса', traffic: '1 800'}}, schedule: llumarSchedule, scheduleSet:llumarScheduleM}]
    return (
        <div className={[cl.seoBlock, classesTabs].join` `}>
            <ul className={cl.seoList}>
                {infoArr.map((e,i)=><KeysMainSeoItem nameCompany={e.nameCompany} linkCompany={e.linkCompany} beenTopTen={e.changeSeo.beenChange.topTen} schedule={e.schedule} scheduleSet={e.scheduleSet} beenTraffic={e.changeSeo.becameChange.traffic} becameTopTen={e.changeSeo.becameChange.topTen} becameTraffic={e.changeSeo.becameChange.traffic}/>)}
            </ul>
        </div>
    )
}

export default KeysMainSeo