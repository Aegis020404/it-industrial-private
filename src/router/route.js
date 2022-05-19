import MainPage from "../pages/MainPage";

import AboutCompanyPage from "../pages/AboutCompanyPage";
import ReviewsPage from "../pages/ReviewsPage";
import VacancyPage from "../pages/VacancyPage";
import KeysPage from '../pages/KeysPage'; 
import TariffPage from "../pages/TariffPage";
import KeySiteContainer from "../pages/KeySite";
import ContactsPage from "../pages/ContactsPage";

export const publicRouters = [
    {path: '/it-industrial-1', component: MainPage, exact: true},
    {path: '/keys', component: KeysPage, exact: true},

    {path: '/строй-мат', component: KeySiteContainer, exact: true},
    {path: '/avto-estetica', component: KeySiteContainer, exact: true},
    {path: '/hock-team', component: KeySiteContainer, exact: true},
    {path: '/llumar', component: KeySiteContainer, exact: true},
    {path: '/ec-vtor', component: KeySiteContainer, exact: true},

    {path: '/Перевозки-App', component: KeySiteContainer, exact: true},
    {path: '/CRM', component: KeySiteContainer, exact: true},


    {path: '/about', component: AboutCompanyPage, exact: true},
    {path: '/reviews', component: ReviewsPage, exact: true},
    {path: '/vacancy', component: VacancyPage, exact: true},
    {path: '/tariffs', component: TariffPage, exact: true},
    {path: '/contacts', component: ContactsPage, exact: true}
]

