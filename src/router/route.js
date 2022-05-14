import MainPage from "../pages/MainPage";

import AboutCompanyPage from "../pages/AboutCompanyPage";
import ReviewsPage from "../pages/ReviewsPage";
import VacancyPage from "../pages/VacancyPage";
import KeysPage from '../pages/KeysPage'; 



export const publicRouters = [
    {path: '/it-industrial-1', component: MainPage, exact: true},
    {path: '/keys', component: KeysPage, exact: true},
    {path: '/about', component: AboutCompanyPage, exact: true},
    {path: '/reviews', component: ReviewsPage, exact: true},
    {path: '/vacancy', component: VacancyPage, exact: true}
]

