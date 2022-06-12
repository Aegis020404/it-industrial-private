import React from 'react';
import cl from './../../style/KeysMainCrm.module.css';
import KeysItemList from '../KeysItemList';
import Link from 'next/link';

const KeysMainCrm = ({classesTabs}) => {
    const infoArr = [{
        descr: 'Разработка индивидуальной CRM-системы',  href: '/crm-system', img: {
            background: '#E50A0B', 
            alt: 'Индивидуальная CRM-система разработанная для компании "LLumar"',
            img: 'keys-crm-red.svg',
            classesImg: cl.crmLlumarImg,
            logo: <svg width="81" height="45" viewBox="0 0 81 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.38873 16.8357H0.823242V43.7824H10.4429V40.6823H4.38873V16.8357Z" fill="white"/>
                <path d="M16.3028 16.8357H12.6895V43.7824H22.333V40.6823H16.3028V16.8357Z" fill="white"/>
                <path
                    d="M31.4513 37.2246C31.4513 38.8461 31.7146 40.9923 29.4173 40.9923C27.1201 40.9923 27.3355 38.6554 27.3355 37.0338V25.7305H23.9854V37.2246C23.9854 41.3023 24.6554 44.0924 29.5848 44.0924C33.7007 44.0924 34.8254 41.6362 34.8254 37.94V25.7305H31.4513V37.2246Z"
                    fill="white"/>
                <path
                    d="M52.0315 25.4442C50.1889 25.4442 49.0163 26.3981 48.2985 27.9481H48.2027C47.8438 26.3743 46.5755 25.4442 44.9483 25.4442C43.2254 25.4442 42.0529 26.422 41.3828 27.9481H41.335V25.7066H37.9609V43.7584H41.3111V32.3121C41.4068 30.7859 41.2153 28.4489 43.3451 28.4489C45.2833 28.4489 45.2834 30.0705 45.2834 31.5013V43.7584H48.6574V32.3121C48.6574 30.6905 48.3942 28.4489 50.7871 28.4489C52.4622 28.4489 52.6297 29.7843 52.6297 31.1436V43.7584H56.0037V29.8082C56.0037 27.4235 55.1901 25.4442 52.0315 25.4442Z"
                    fill="white"/>
                <path
                    d="M66.2937 27.7335H66.2458C65.7911 26.7797 65.169 26.0166 64.2597 25.6589C63.8529 25.5158 63.4461 25.4442 62.9914 25.4442C58.7559 25.4442 58.6123 31.5013 58.6123 34.506C58.6123 37.4152 58.708 44.0685 62.8957 44.0685C63.4461 44.0685 63.8529 43.9731 64.2597 43.8538C65.2168 43.4484 65.7433 42.59 66.2458 41.4692H66.2937V43.7584H69.6677V25.7066H66.2937V27.7335ZM64.3075 41.0876C64.2597 41.0876 64.2597 41.0876 64.2597 41.0876C61.771 40.9922 62.0581 36.2468 62.0581 34.7683C62.0581 33.3375 61.7949 28.5205 64.2597 28.4728C64.2597 28.4728 64.2597 28.4728 64.3075 28.4728C66.5569 28.4728 66.4372 33.3136 66.4372 34.7683C66.4372 36.1752 66.5569 41.0876 64.3075 41.0876Z"
                    fill="white"/>
                <path
                    d="M79.5308 28.7352L80.1051 28.7829V25.4682C78.2625 25.4682 77.0421 26.4221 76.2764 27.9721H76.1807V25.7305H72.8545V43.7824H76.2285V32.4314C76.2285 30.1183 77.0421 28.7352 79.5308 28.7352Z"
                    fill="white"/>
                <path
                    d="M78.6658 40.0148C77.6368 40.0148 76.8232 40.8256 76.8232 41.8033C76.8232 42.8287 77.6368 43.6395 78.6658 43.6395C79.6709 43.6395 80.5084 42.8287 80.5084 41.8033C80.5084 40.8256 79.6469 40.0148 78.6658 40.0148ZM78.6658 43.3056C77.8043 43.3056 77.1822 42.6379 77.1822 41.8271C77.1822 41.0164 77.8043 40.3487 78.6658 40.3487C79.4794 40.3487 80.1494 41.0164 80.1494 41.8271C80.1494 42.6141 79.4794 43.3056 78.6658 43.3056Z"
                    fill="white"/>
                <path
                    d="M79.5999 41.4455C79.5999 41.2309 79.552 41.0401 79.3845 40.8971C79.2409 40.8017 79.0256 40.8017 78.8341 40.8017H78.6427H77.877V42.781H78.2838V41.9225H78.6427L79.0974 42.781H79.552L79.0495 41.9225C79.4324 41.9463 79.5999 41.8271 79.5999 41.4455ZM78.882 41.684H78.6666H78.3077V41.1117H78.6666H78.7623C78.9777 41.1117 79.2649 41.1117 79.2649 41.374C79.2409 41.6363 79.0734 41.684 78.882 41.684Z"
                    fill="white"/>
                <path
                    d="M51.9071 11.351C45.3983 11.351 38.052 16.025 36.7119 22.2251H67.4852C66.193 15.9773 58.4877 11.351 51.9071 11.351Z"
                    fill="white"/>
                <path
                    d="M76.6331 14.594C76.6331 14.594 74.0727 14.4032 72.0387 16.6925C69.9569 19.4826 67.9229 19.4349 67.9229 19.4349C68.545 20.198 68.7365 21.2711 68.904 22.2249H79.1936C78.715 19.4826 77.9014 16.9787 76.6331 14.594Z"
                    fill="white"/>
                <path
                    d="M71.6286 15.9296C73.6147 13.6403 76.1752 13.8311 76.1752 13.8311C73.9258 9.96797 70.7671 6.74868 66.9623 4.41171V4.36401C66.9623 4.36401 64.3062 5.58019 63.4926 8.48948C62.8226 11.8995 60.9561 12.7103 60.9561 12.7103H60.9082C63.6601 14.1888 66.0052 16.1681 67.4888 18.6243C67.5127 18.6243 69.5467 18.7197 71.6286 15.9296Z"
                    fill="white"/>
                <path
                    d="M52.7442 5.38928C53.9168 8.65627 52.6964 10.3732 52.6964 10.3732H52.6485C55.1372 10.5163 57.6019 11.1363 59.9948 12.3048L60.0427 12.2571C60.0427 12.2571 61.9331 11.3986 62.6031 8.03626C63.4167 5.07928 66.025 3.91079 66.025 3.91079H66.1208C62.3399 1.71691 58.0805 0.35765 53.6775 0.0953369C53.7014 0.0953369 51.9306 2.48 52.7442 5.38928Z"
                    fill="white"/>
                <path
                    d="M43.3193 12.6626C46.0234 11.1364 48.4642 10.421 51.6229 10.3733C51.6229 10.3733 52.8433 8.63248 51.7186 5.38934C50.905 2.43236 52.6279 0 52.6279 0C46.9327 0 43.1997 1.0731 39.371 3.00467C39.371 3.00467 38.9642 5.96165 41.046 8.20324C43.6065 10.5402 43.3193 12.6626 43.3193 12.6626Z"
                    fill="white"/>
                <path
                    d="M42.3386 13.2349L42.3865 13.1872C42.3865 13.1872 42.6497 11.0887 40.0893 8.7517C38.0074 6.55781 38.4142 3.60083 38.4142 3.60083C33.7719 6.15242 30.3739 9.44325 27.957 13.3064C27.957 13.3064 29.2732 15.9057 32.2404 16.6211C35.6623 17.1696 36.6195 19.0534 36.6195 19.0534C37.8638 16.6211 39.85 14.761 42.3386 13.2349Z"
                    fill="white"/>
                <path
                    d="M27.4746 14.1888C27.4746 14.1888 27.4746 14.2143 27.5002 14.2398C27.5002 14.2143 27.5258 14.2143 27.5258 14.1888H27.4746Z"
                    fill="white"/>
                <path
                    d="M31.7858 17.5034C29.0339 16.8833 27.6938 14.5464 27.5263 14.2125C25.5163 17.7418 25.0616 19.4826 24.583 22.2011H35.3273C35.5188 21.4381 35.7341 20.675 36.1888 19.9119C36.1409 19.9357 35.2077 18.0518 31.7858 17.5034Z"
                    fill="white"/>
            </svg>
        }
    }];
    const scrollTopPage = (e)=>{
        document.body.scrollTo({top:0,behavior:'smooth'});
    }
    return (
       
            <div className={[cl.crmBlock, classesTabs].join` `}>
                <ul className={cl.crmList}>
                    {infoArr.map((e, i) => <KeysItemList key={i} page={e.href} descr={e.descr} logo={e.img.logo} img={e.img.img}
                                                         background={e.img.background} alt={e.img.alt}
                                                         classesImg={e.img.classesImg}/>)}
                   
                </ul>
            </div>
       
    )
}

export default KeysMainCrm