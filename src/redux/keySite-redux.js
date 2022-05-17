import stroimat1 from './../assets/img/1stroimat.png'
import stroimat2 from './../assets/img/2stroimat.png'
import stroimat3 from './../assets/img/3stroimat.png'
import stroimat4 from './../assets/img/4stroimat.png'
import stroimat5 from './../assets/img/5stroimat.png'

import estetic1 from './../assets/img/1estetic.png'
import estetic2 from './../assets/img/2estetic.png'
import estetic3 from './../assets/img/3estetic.png'
import estetic4 from './../assets/img/4estetic.png'
import estetic5 from './../assets/img/5estetic.png'
import estetic6 from './../assets/img/6estetic.png'

import hockey1 from './../assets/img/1hockey.png'
import hockey2 from './../assets/img/2hockey.png'
import hockey3 from './../assets/img/3hockey.png'
import hockey4 from './../assets/img/4hockey.png'
import hockey5 from './../assets/img/5hockey.png'
import hockey6 from './../assets/img/6hockey.png'

import lumar1 from './../assets/img/1lumar.png'
import lumar2 from './../assets/img/2lumar.png'
import lumar3 from './../assets/img/3lumar.png'
import lumar4 from './../assets/img/4lumar.png'
import lumar5 from './../assets/img/5lumar.png'
import lumar6 from './../assets/img/6lumar.png'

import acovtor1 from './../assets/img/1acovtor.png'
import acovtor2 from './../assets/img/2acovtor.png'
import acovtor3 from './../assets/img/3acovtor.png'
import acovtor4 from './../assets/img/4acovtor.png'
import acovtor5 from './../assets/img/5acovtor.png'
import acovtor6 from './../assets/img/6acovtor.png'


import React from "react";

const initialState = [{
    descrAchor: 'Интернет-магазин «Строймат»',
    descr: 'Разработка интернет-магазина «Строймат»',
    achorSite: ['строй-мат.рф','https://строй-мат.рф/'],
    href: '/строй-мат',
    aboutCompany: 'Компания является крупнейшим официальным дистрибьютором ведущих производителей строительно–отделочных материалов, таких как Кнауф, Saint–Gobain, Ceresit, Основит, Евро Л, Kronoflooring и другие.\n' + '\n' + 'Побеждали в тендерах и выступали в качестве поставщика на многих объектах Москвы и РФ.',
    task: 'Разработать полноценный интернет-магазин на Wordpress, добавить более 20 000 товаров на сайт',
    imageInfo: [['', stroimat1], ['Главная страница', stroimat2], ['Мобильная версия', stroimat3], ['Карточка товара и каталог', stroimat4], ['Элементы интерфейса', stroimat5], ['Спасибо за просмотр!',]]

}, {
    descrAchor: 'интернет-магазин «Автоэстетика»',
    descr: 'Разработка интернет-магазина «Автоэстетика»',
    achorSite: ['avto-estetica.ru', 'https://avto-estetica.ru/'],
    href: '/avto-estetica',

    aboutCompany: 'Компания АвтоЭстетика предоставляет свои услуги в авто тематике с 2009 года. Осуществляем полный спектр услуг по уходу и сохранению внешнего и внутреннего вида автомобиля. Работает только с проверенными немецкими и американскими материалами. Широкий выбор антигравийной защиты, автовинила, тонирующих плёнок и детейлинг услуг. Предоставляем гарантии на все выполненные работы.',
    task: 'Разработать полноценный интернет-магазин ',
    imageInfo: [['', estetic1], ['Каталог товаров', estetic2], ['Карточка товара', estetic3], ['Оформление заказа и оплата', estetic4], ['Мобильная версия', estetic5], ['Спасибо за просмотр!', estetic6]]

}, {
    descrAchor: 'сайт для Хоккейного клуба»',
    descr: 'Разработка сайта для Хоккейного клуба',
    achorSite: ['hock-team.ru', 'https://hock-team.ru/'],
    href: '/hock-team',

    aboutCompany: 'Хоккейный клуб — спортивная организация, участвующая в соревнованиях по хоккею с шайбой.' + ' Кроме собственно спортсменов-хоккеистов, в состав клуба входят тренер и его помощники, менеджеры клуба,' + ' врачи и прочий обслуживающий персонал. Непосредственно основная команда состоит из двадцати и более игроков.',
    task: 'Разработать имиджевый корпоративный сайт ',
    imageInfo: [['', hockey1], ['Главный экран', hockey2], ['О клубе', hockey3], ['Цены и как записаться', hockey4], ['Мобильная версия', hockey5], ['Спасибо за просмотр!', hockey6]]

}, {
    descrAchor: 'сайт для бренда Llumar',
    descr: 'Разработка сайта для бренда Llumar',
    achorSite: ['llumar.ru', 'https://llumar.ru/'],
    href: '/llumar',

    aboutCompany: 'Официальный эксклюзивный дистрибьютор LLumar на территории России и стран СНГ.' + 'Компания основана в 1997 году. Лидирующий поставщик профессиональных тонирующих и антигравийных пленок, произведенных в США.',
    task: 'Разработать полноценный интернет-магазин автопленок для крупного бренда',
    imageInfo: [['', lumar1], ['Главная страница', lumar2], ['Каталог пленок', lumar3], ['Мобильная версия', lumar4], ['Элементы интерфейса', lumar5], ['Спасибо за просмотр!', lumar6]]

}, {
    descrAchor: 'сайт «Эковтор»',
    descr: 'Разработка сайта «Эковтор»',
    achorSite: ['ec-vtor.ru', 'http://ec-vtor.ru/'],
    href: '/ec-vtor',
    aboutCompany: 'Переработка вторсырья – основное направление деятельности нашей.' + ' «Эковтор» имеет своем распоряжении современное высокотехнологичное оборудование, позволяющее производить переработку быстро и качественно.',
    task: 'Разработать сайт услуг для компании по переработки вторсырья',
    imageInfo: [['', acovtor1], ['Главная страница', acovtor2], ['Мобильная версия', acovtor3], ['Заказ услуги', acovtor4], ['Мобильная версия', acovtor5], ['Спасибо за просмотр!', acovtor6]]

},]

export function KeySiteReducer (state = initialState, action) {
    return state
}
