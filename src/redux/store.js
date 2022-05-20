import {combineReducers, createStore} from 'redux'
import sliderReducer from "./slider-redux";
import MainTariffReducer from "./mainTariff-redux";
import MainDevReducer from "./mainDev-redux";
import mainOfferReducer from "./mainOffer-redux";
import keysMainReducer from './keysNav-redux.js';
import {KeySiteReducer} from "./keySite-redux";
import {tarrifSEORedux} from "./tariffSEO-redux";

let reducers = combineReducers( {
    mainSliderPage: sliderReducer,
    MainTariffPage: MainTariffReducer,
    MainDevPage: MainDevReducer,
    mainOfferPage: mainOfferReducer,
    keysNavPage: keysMainReducer,
    KeySitePage: KeySiteReducer,
    tarrifSEOPage: tarrifSEORedux,
})

let store = createStore(reducers)
window.store = store;

export default store;