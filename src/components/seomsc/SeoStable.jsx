import React from "react";
import cl from './../../style/SeoStable.module.css';
import SeoStableItem from "./SeoStableItem";

const SeoStable = ()=>{
    const infoArr = [{title: 'Прогретые клиенты', descr: 'Они ищут в поисковике ваш товар или услугу и по этим поисковым фразам видят ваш сайт', img:<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.377 36.7008H73.4766C74.0756 36.7008 74.5612 37.1863 74.5612 37.7855C74.5612 38.3847 74.0756 38.8701 73.4766 38.8701H71.3771C71.107 47.5072 67.6179 55.588 61.4795 61.7264C55.341 67.8649 47.2602 71.354 38.6232 71.624V73.7236C38.6232 74.3228 38.1376 74.8083 37.5386 74.8083C36.9396 74.8083 36.4539 74.3228 36.4539 73.7236V71.624C32.925 71.5128 29.4644 70.8609 26.1519 69.678C25.5877 69.4764 25.2937 68.8559 25.4952 68.2917C25.6965 67.7277 26.3166 67.4331 26.8814 67.635C29.959 68.7341 33.1744 69.3434 36.4538 69.4537V65.3196C29.6725 65.0557 23.5129 62.3305 18.8448 58.0131L18.4757 58.3822C18.264 58.5939 17.9863 58.6998 17.7088 58.6998C17.4313 58.6998 17.1536 58.5939 16.9419 58.3822C16.5183 57.9586 16.5183 57.2719 16.9419 56.8482L17.3108 56.4791C12.9935 51.8111 10.2682 45.6514 10.0043 38.8701H5.8686C6.25112 50.1323 12.5719 60.347 22.5581 65.7147C23.0856 65.9985 23.2835 66.6561 22.9999 67.1836C22.7163 67.7115 22.0584 67.909 21.531 67.6256C10.8402 61.879 4.08211 50.9322 3.69872 38.8701H1.60028C1.00126 38.8701 0.515625 38.3847 0.515625 37.7855C0.515625 37.1863 1.00126 36.7008 1.60028 36.7008H3.69988C3.96988 28.0638 7.45899 19.983 13.5975 13.8446C19.736 7.70606 27.8168 4.21695 36.4538 3.94695V1.84735C36.4538 1.24819 36.9394 0.762695 37.5384 0.762695C38.1374 0.762695 38.6231 1.24819 38.6231 1.84735V3.94695C47.2601 4.2171 55.3409 7.70606 61.4793 13.8446C67.6179 19.983 71.107 28.0638 71.377 36.7008ZM36.4538 10.2514V6.11784C19.8415 6.67969 6.43262 20.0886 5.87077 36.7008H10.0043C10.2682 29.9196 12.9935 23.7599 17.3108 19.0919L16.9419 18.7228C16.5183 18.2992 16.5183 17.6126 16.9419 17.1888C17.3653 16.7654 18.0521 16.7654 18.4757 17.1888L18.8448 17.5579C23.5129 13.2405 29.6725 10.5153 36.4538 10.2514ZM21.5655 55.2924L20.3788 56.4791C24.6522 60.405 30.2702 62.8875 36.4538 63.1487V60.4034C36.4538 59.8042 36.9394 59.3187 37.5384 59.3187C38.1374 59.3187 38.6231 59.8042 38.6231 60.4034V63.1487C44.8066 62.8875 50.4247 60.4048 54.6981 56.479L53.5113 55.2922C53.0877 54.8686 53.0877 54.182 53.5113 53.7582C53.9348 53.3348 54.6216 53.3348 55.0452 53.7582L56.2319 54.945C60.1579 50.6717 62.6405 45.0537 62.9018 38.8701H60.1565C59.5574 38.8701 59.0718 38.3847 59.0718 37.7855C59.0718 37.1863 59.5574 36.7008 60.1565 36.7008H62.9035C62.7948 34.1129 62.2973 31.578 61.4196 29.1512C61.216 28.5878 61.5074 27.9659 62.0708 27.7623C62.6338 27.5584 63.256 27.8501 63.4597 28.4134C64.4231 31.0774 64.9639 33.8604 65.0738 36.7008H69.2061C68.6442 20.0886 55.2353 6.67969 38.6231 6.11784V10.2518C43.1251 10.4288 47.5219 11.7021 51.4017 13.9652C53.1438 14.9815 54.7653 16.1872 56.2394 17.5507L56.6011 17.189C57.0246 16.7655 57.7114 16.7655 58.135 17.189C58.5586 17.6126 58.5586 18.2992 58.135 18.7229L57.7723 19.0857C59.0996 20.521 60.2784 22.0955 61.2776 23.7862C61.5823 24.3018 61.4112 24.9671 60.8955 25.2718C60.3801 25.5764 59.7148 25.4056 59.4099 24.8897C58.4971 23.3447 57.4279 21.9195 56.2336 20.6243L55.0452 21.8128C54.8334 22.0245 54.5558 22.1303 54.2782 22.1303C54.0007 22.1303 53.723 22.0245 53.5113 21.8128C53.0877 21.3892 53.0877 20.7025 53.5113 20.2788L54.6982 19.0919C50.3299 15.0983 44.6342 12.6846 38.6231 12.4239V15.1677C38.6231 15.7669 38.1374 16.2524 37.5384 16.2524C36.9394 16.2524 36.4538 15.7669 36.4538 15.1677V12.4224C30.2702 12.6836 24.6522 15.1663 20.3788 19.0922L21.5655 20.2789C21.9891 20.7025 21.9891 21.3892 21.5655 21.8129C21.3538 22.0246 21.0762 22.1305 20.7986 22.1305C20.5211 22.1305 20.2434 22.0246 20.0317 21.8129L18.8449 20.6262C14.9189 24.8994 12.4364 30.5175 12.1751 36.701H14.9204C15.5194 36.701 16.005 37.1865 16.005 37.7856C16.005 38.3848 15.5194 38.8703 14.9204 38.8703H12.1751C12.4364 45.0537 14.9191 50.6717 18.8449 54.9451L20.0317 53.7584C20.4552 53.3349 21.142 53.3349 21.5655 53.7584C21.9891 54.182 21.9891 54.8686 21.5655 55.2924ZM38.6231 65.3196V69.4532C55.2353 68.8913 68.6442 55.4824 69.2062 38.8701H65.0725C64.8086 45.6514 62.0834 51.8111 57.766 56.4791L58.135 56.8482C58.5586 57.2718 58.5586 57.9584 58.135 58.3822C57.9232 58.5939 57.6456 58.6998 57.368 58.6998C57.0905 58.6998 56.8128 58.5939 56.6011 58.3822L56.232 58.0131C51.564 62.3305 45.4043 65.0557 38.6231 65.3196ZM40.1875 42.4124C39.3743 42.7614 38.4796 42.9555 37.5401 42.9555C36.6007 42.9555 35.7058 42.7614 34.8924 42.412C32.0292 43.5047 30.1108 46.2832 30.1108 49.3546C30.1108 49.9538 29.6252 50.4393 29.0262 50.4393C28.4272 50.4393 27.9415 49.9538 27.9415 49.3546C27.9415 45.8771 29.8455 42.6899 32.8063 41.0048C32.0958 40.3014 31.5411 39.4415 31.1981 38.4815C30.7953 38.5557 30.3859 38.5967 29.9733 38.5967C29.0185 38.5967 28.1102 38.3957 27.2865 38.0358C27.2238 38.0802 27.1557 38.1191 27.0819 38.1503C24.3254 39.3162 22.5443 42.0034 22.5443 44.996C22.5443 45.5952 22.0587 46.0807 21.4597 46.0807C20.8606 46.0807 20.375 45.5952 20.375 44.996C20.375 41.5046 22.2519 38.3359 25.2383 36.645C24.0055 35.4241 23.2405 33.7319 23.2405 31.8638C23.2405 31.1375 23.3572 30.4198 23.5877 29.7299C23.7775 29.1619 24.392 28.8548 24.9602 29.045C25.5283 29.2348 25.8351 29.8492 25.6453 30.4175C25.4891 30.885 25.4098 31.3718 25.4098 31.8638C25.4098 34.3803 27.4572 36.4276 29.9736 36.4276C30.2559 36.4276 30.5357 36.3995 30.8105 36.3486C30.8098 36.3064 30.8073 36.2646 30.8073 36.2222C30.8073 33.6937 32.2091 31.4874 34.2756 30.3365C33.6387 28.526 31.9358 27.3 29.9736 27.3C29.4395 27.3 28.9163 27.3916 28.4188 27.5719C27.8553 27.7758 27.2336 27.4851 27.0294 26.922C26.8252 26.3588 27.1162 25.7368 27.6793 25.5326C28.4147 25.2661 29.1866 25.1309 29.9736 25.1309C32.8644 25.1309 35.3741 26.9359 36.3168 29.6028C36.7139 29.5296 37.1223 29.4894 37.5403 29.4894C37.9581 29.4894 38.3665 29.5296 38.7635 29.6028C39.7086 26.9411 42.2332 25.1309 45.1068 25.1309C48.8196 25.1309 51.8403 28.1515 51.8403 31.8645C51.8403 33.7329 51.0747 35.4254 49.8411 36.6463C52.8055 38.3291 54.7055 41.5036 54.7055 44.9963C54.7055 45.5955 54.2199 46.081 53.6209 46.081C53.0219 46.081 52.5362 45.5955 52.5362 44.9963C52.5362 41.9116 50.6223 39.1473 47.7541 38.0537C46.9409 38.4027 46.0463 38.5966 45.1068 38.5966C44.6939 38.5966 44.2845 38.5557 43.8822 38.4818C43.5391 39.4418 42.9844 40.3018 42.2738 41.0051C45.2346 42.6904 47.1386 45.8775 47.1386 49.3549C47.1386 49.9541 46.6529 50.4396 46.0539 50.4396C45.4549 50.4396 44.9693 49.9541 44.9693 49.3549C44.9693 46.2838 43.0509 43.505 40.1875 42.4124ZM49.6709 31.8647C49.6709 29.3478 47.6233 27.3003 45.1067 27.3003C43.1563 27.3003 41.4431 28.5296 40.8046 30.3366C42.8713 31.4875 44.2732 33.6938 44.2732 36.2225C44.2732 36.2473 44.2724 36.2719 44.2715 36.2965C44.2709 36.3139 44.2703 36.3313 44.27 36.3488C44.5444 36.3995 44.8241 36.4274 45.1067 36.4274C47.6233 36.4274 49.6709 34.3805 49.6709 31.8647ZM42.1039 36.2225C42.1039 33.7061 40.0565 31.6589 37.5401 31.6589C35.0237 31.6589 32.9763 33.7061 32.9763 36.2225C32.9763 38.7391 35.0236 40.7863 37.5401 40.7863C40.0567 40.7863 42.1039 38.7389 42.1039 36.2225Z" fill="#F84263"/>
    </svg>},
    {title: 'Доверие, рост ваших продаж', descr: 'Если ваш сайт получил позиции в поисковиках, то он, скорее всего, пробудет там долго. Всё это время вы будете получать клиентов', img:<svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0917 37.1241H6.92253C6.37206 37.1241 5.92578 36.6778 5.92578 36.1273V31.832C5.92578 31.2816 6.37206 30.8353 6.92253 30.8353H13.3084C13.8588 30.8353 14.3051 31.2816 14.3051 31.832C14.3051 32.3825 13.8588 32.8288 13.3084 32.8288H7.91928V35.1306H22.0917C22.4143 35.1306 22.7238 34.9946 22.941 34.7575L35.5932 20.9544C35.782 20.7484 36.0485 20.6312 36.328 20.6312H45.1831C45.4909 20.6312 45.7802 20.5116 45.9973 20.2945L57.9037 8.38809C58.1887 8.10302 58.6177 8.01796 58.9899 8.172C59.3624 8.32629 59.6052 8.68977 59.6052 9.09286V13.6513H61.9071V3.90711C61.9071 3.27251 61.3907 2.75619 60.7561 2.75619H51.0133V5.05948H55.5704C55.9735 5.05948 56.337 5.30229 56.4913 5.67481C56.6456 6.04719 56.5602 6.47593 56.2752 6.761L44.9986 18.0375C44.8117 18.2245 44.5582 18.3295 44.2938 18.3295H35.3829C35.0611 18.3295 34.7522 18.4655 34.535 18.7024L21.8815 32.5056C21.6928 32.7116 21.4262 32.8288 21.1468 32.8288H17.9599C17.4094 32.8288 16.9631 32.3825 16.9631 31.832C16.9631 31.2816 17.4094 30.8353 17.9599 30.8353H20.7084L33.0655 17.3554C33.6591 16.7076 34.5039 16.3359 35.383 16.3359H43.8812L53.1642 7.05285H50.0166C49.4662 7.05285 49.0199 6.60657 49.0199 6.0561V1.75944C49.0199 1.20897 49.4662 0.762695 50.0166 0.762695H60.7563C62.4901 0.762695 63.9007 2.17329 63.9007 3.90711V14.6479C63.9007 15.1984 63.4544 15.6447 62.9039 15.6447H58.6086C58.0581 15.6447 57.6119 15.1984 57.6119 14.6479V11.4991L47.4069 21.7041C46.8132 22.2978 46.0234 22.6247 45.1831 22.6247H36.7664L24.4107 36.1045C23.817 36.7524 22.9718 37.1241 22.0917 37.1241ZM63.8997 62.5171H68.005C68.5555 62.5171 69.0018 62.9634 69.0018 63.5139V67.8105C69.0018 68.361 68.5555 68.8073 68.005 68.8073H17.3702C16.8197 68.8073 16.3734 68.361 16.3734 67.8105C16.3734 67.2601 16.8197 66.8138 17.3702 66.8138H67.0083V64.5106H2.95053V66.8138H12.7187C13.2691 66.8138 13.7154 67.2601 13.7154 67.8105C13.7154 68.361 13.2691 68.8073 12.7187 68.8073H1.95378C1.40331 68.8073 0.957031 68.361 0.957031 67.8105V63.5139C0.957031 62.9634 1.40331 62.5171 1.95378 62.5171H6.05853V47.136C6.05853 46.5855 6.5048 46.1392 7.05527 46.1392H17.7954C18.3459 46.1392 18.7922 46.5855 18.7922 47.136V62.5171H21.0947V40.6919C21.0947 40.1414 21.541 39.6952 22.0914 39.6952H32.8315C33.3819 39.6952 33.8282 40.1414 33.8282 40.6919V62.5171H36.1307V32.6369C36.1307 32.0864 36.577 31.6401 37.1275 31.6401H47.8675C48.418 31.6401 48.8642 32.0864 48.8642 32.6369V62.5171H51.1666V27.2668C51.1666 26.7163 51.6129 26.27 52.1633 26.27H62.903C63.4535 26.27 63.8997 26.7163 63.8997 27.2668V42.315C63.8997 42.8655 63.4535 43.3118 62.903 43.3118C62.3525 43.3118 61.9062 42.8655 61.9062 42.315V28.2635H53.1601V62.5171H61.9062V46.9665C61.9062 46.416 62.3525 45.9698 62.903 45.9698C63.4535 45.9698 63.8997 46.416 63.8997 46.9665V62.5171ZM46.8707 33.6336H38.1242V62.5171H46.8707V33.6336ZM31.8346 41.6887H23.088V62.5171H31.8346V41.6887ZM16.7986 48.1327H8.05202V62.5171H16.7986V48.1327Z" fill="#F84263"/>
    </svg>},
    {title: 'Называем реальные сроки и стоимость',descr: 'Согласно исследованиям, 85% пользователей больше доверяют органической выдаче в отличие от контекстной рекламы. Поэтому клиент, открывая ваш сайт, заранее настроен лояльно и с большой вероятностью купит', img:
    <svg width="65" height="72" viewBox="0 0 65 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M51.0471 35.1587H55.9705C57.0835 35.1587 57.9891 34.2531 57.9891 33.14V28.2166C57.9891 27.1036 57.0835 26.198 55.9705 26.198H51.0471C49.934 26.198 49.0285 27.1036 49.0285 28.2166V33.14C49.0285 34.2531 49.934 35.1587 51.0471 35.1587ZM51.0963 28.2658H55.9213V33.0908H51.0963V28.2658ZM51.0471 48.255H55.9705C57.0835 48.255 57.9891 47.3494 57.9891 46.2364V41.313C57.9891 40.1999 57.0835 39.2943 55.9705 39.2943H51.0471C49.934 39.2943 49.0285 40.1999 49.0285 41.313V46.2364C49.0285 47.3494 49.934 48.255 51.0471 48.255ZM51.0963 41.3622H55.9213V46.1872H51.0963V41.3622ZM36.9973 35.1587H41.9207C43.0338 35.1587 43.9394 34.2531 43.9394 33.14V28.2166C43.9394 27.1036 43.0338 26.198 41.9207 26.198H36.9973C35.8843 26.198 34.9787 27.1036 34.9787 28.2166V33.14C34.9787 34.2531 35.8843 35.1587 36.9973 35.1587ZM37.0465 28.2658H41.8715V33.0908H37.0465V28.2658ZM13.8212 51.7767H8.89781C7.78475 51.7767 6.87918 52.6823 6.87918 53.7953V58.7187C6.87918 59.8318 7.78475 60.7373 8.89781 60.7373H13.8212C14.9343 60.7373 15.8398 59.8318 15.8398 58.7187V53.7953C15.8398 52.6823 14.9343 51.7767 13.8212 51.7767ZM13.772 58.6695H8.94702V53.8445H13.772V58.6695ZM13.8212 26.198H8.89781C7.78475 26.198 6.87918 27.1036 6.87918 28.2166V33.14C6.87918 34.2531 7.78475 35.1587 8.89781 35.1587H13.8212C14.9343 35.1587 15.8398 34.2531 15.8398 33.14V28.2166C15.8398 27.1034 14.9343 26.198 13.8212 26.198ZM13.772 33.0908H8.94702V28.2658H13.772V33.0908ZM36.9973 47.948H41.9207C43.0338 47.948 43.9394 47.0424 43.9394 45.9294V41.006C43.9394 39.8929 43.0338 38.9873 41.9207 38.9873H36.9973C35.8843 38.9873 34.9787 39.8929 34.9787 41.006V45.9294C34.9787 47.0424 35.8843 47.948 36.9973 47.948ZM37.0465 41.0552H41.8715V45.8802H37.0465V41.0552ZM59.016 5.21903H54.5955V3.63823C54.5955 1.90455 53.1851 0.494141 51.4514 0.494141H50.9767C49.2431 0.494141 47.8327 1.90455 47.8327 3.63823V5.21903H17.0356V3.63823C17.0356 1.90455 15.6252 0.494141 13.8915 0.494141H13.4167C11.6831 0.494141 10.2726 1.90455 10.2726 3.63823V5.21903H5.85228C2.99797 5.21903 0.675781 7.54122 0.675781 10.3955V65.907C0.675781 68.7576 2.9948 71.0766 5.84539 71.0766H59.0232C61.8738 71.0766 64.1928 68.7576 64.1928 65.907V10.3955C64.1927 7.54122 61.8705 5.21903 59.016 5.21903ZM49.9005 3.63823C49.9005 3.04476 50.3833 2.56199 50.9768 2.56199H51.4516C52.045 2.56199 52.5278 3.04476 52.5278 3.63823V5.21903H49.9005V3.63823ZM12.3406 3.63823C12.3406 3.04476 12.8234 2.56199 13.4169 2.56199H13.8917C14.4851 2.56199 14.9679 3.04476 14.9679 3.63823V5.21903H12.3408V3.63823H12.3406ZM62.1248 65.907C62.1248 67.6173 60.7334 69.0087 59.023 69.0087H5.84525C4.13487 69.0087 2.74349 67.6173 2.74349 65.907V65.9005C3.60978 66.5532 4.68657 66.9409 5.85228 66.9409H47.772C49.1547 66.9409 50.4547 66.4024 51.4324 65.4246L62.1248 54.7322V65.907ZM50.3774 63.5553C50.4584 63.2207 50.5026 62.8718 50.5026 62.5127V55.611C50.5026 54.3097 51.5614 53.2508 52.8629 53.2508H59.7644C60.1236 53.2508 60.4725 53.2067 60.807 53.1256L50.3774 63.5553ZM62.1248 19.9945H18.0695C17.4985 19.9945 17.0356 20.4574 17.0356 21.0284C17.0356 21.5994 17.4985 22.0623 18.0695 22.0623H62.1248V48.8227C62.1248 50.1242 61.0659 51.1831 59.7644 51.1831H52.8629C50.4212 51.1831 48.4347 53.1696 48.4347 55.6112V62.5128C48.4347 63.8143 47.3758 64.8732 46.0745 64.8732H5.85228C4.13818 64.8732 2.74363 63.4786 2.74363 61.7644V22.0623H13.9338C14.5048 22.0623 14.9678 21.5994 14.9678 21.0284C14.9678 20.4574 14.5048 19.9945 13.9338 19.9945H2.74349V10.3955C2.74349 8.68143 4.13804 7.28687 5.85215 7.28687H10.2726V10.3269C10.2726 12.0606 11.6831 13.471 13.4167 13.471C13.9877 13.471 14.4507 13.008 14.4507 12.437C14.4507 11.866 13.9877 11.4031 13.4167 11.4031C12.8233 11.4031 12.3405 10.9204 12.3405 10.3269V7.28687H47.8327V10.3269C47.8327 12.0606 49.2431 13.471 50.9768 13.471C51.5478 13.471 52.0107 13.008 52.0107 12.437C52.0107 11.866 51.5478 11.4031 50.9768 11.4031C50.3833 11.4031 49.9005 10.9204 49.9005 10.3269V7.28687H59.0162C60.7303 7.28687 62.1248 8.68143 62.1248 10.3955V19.9945ZM13.8212 38.9873H8.89781C7.78475 38.9873 6.87918 39.8929 6.87918 41.006V45.9294C6.87918 47.0424 7.78475 47.948 8.89781 47.948H13.8212C14.9343 47.948 15.8398 47.0424 15.8398 45.9294V41.006C15.8398 39.8928 14.9343 38.9873 13.8212 38.9873ZM13.772 45.8802H8.94702V41.0552H13.772V45.8802ZM22.9476 35.1587H27.871C28.984 35.1587 29.8896 34.2531 29.8896 33.14V28.2166C29.8896 27.1036 28.984 26.198 27.871 26.198H22.9476C21.8345 26.198 20.9289 27.1036 20.9289 28.2166V33.14C20.9289 34.2531 21.8345 35.1587 22.9476 35.1587ZM22.9968 28.2658H27.8218V33.0908H22.9968V28.2658ZM37.0453 58.6695C37.0197 58.1212 36.5671 57.6848 36.0125 57.6848C35.4415 57.6848 34.9786 58.1477 34.9786 58.7187C34.9786 59.8318 35.8841 60.7373 36.9972 60.7373H41.9206C43.0336 60.7373 43.9392 59.8318 43.9392 58.7187V53.7953C43.9392 52.6823 43.0336 51.7767 41.9206 51.7767H36.9972C35.8841 51.7767 34.9786 52.6823 34.9786 53.7953V55.2152C34.9786 55.7862 35.4415 56.2492 36.0125 56.2492C36.5835 56.2492 37.0464 55.7862 37.0464 55.2152V53.8445H41.8714V58.6695H37.0453ZM22.9476 47.948H27.871C28.984 47.948 29.8896 47.0424 29.8896 45.9294V41.006C29.8896 39.8929 28.984 38.9873 27.871 38.9873H22.9476C21.8345 38.9873 20.9289 39.8929 20.9289 41.006V45.9294C20.9289 47.0424 21.8345 47.948 22.9476 47.948ZM22.9968 41.0552H27.8218V45.8802H22.9968V41.0552ZM22.9476 60.7373H27.871C28.984 60.7373 29.8896 59.8318 29.8896 58.7187V53.7953C29.8896 52.6823 28.984 51.7767 27.871 51.7767H22.9476C21.8345 51.7767 20.9289 52.6823 20.9289 53.7953V58.7187C20.9289 59.8318 21.8345 60.7373 22.9476 60.7373ZM22.9968 53.8445H27.8218V58.6695H22.9968V53.8445Z" fill="#F84263"/>
    </svg>},
    {title: 'Небольшая стоимость привлечения клиента',descr: 'Чем выше позиции вашего сайта, тем ниже стоимость привлечения клиентов. Особенно это касается фраз, по которым высокая стоимость контекстной рекламы.',img:<svg width="76" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.8338 70.6073H55.7687C61.2568 70.6073 66.5875 68.6559 70.7793 65.1135C76.2311 60.5048 77.2079 52.4678 73.0035 46.6868C71.147 44.1341 69.6837 42.1371 68.5242 40.5546C65.0196 35.7719 64.2891 34.775 63.8609 33.6617C63.7481 33.3686 63.6563 33.0673 63.5403 32.6868C63.4704 32.4572 63.3916 32.1989 63.2942 31.896C63.26 31.7902 63.2244 31.6795 63.1878 31.5658L63.1737 31.5217C64.7312 30.5079 65.5034 28.5294 64.8881 26.6449L63.7192 23.065C61.9356 17.6016 57.1228 13.7986 51.4945 13.2548V9.10452C52.2154 8.18647 52.6467 7.03084 52.6467 5.77602C52.6467 2.79814 50.2236 0.375 47.2451 0.375C44.2666 0.375 41.8435 2.79814 41.8435 5.77602C41.8435 7.03142 42.2754 8.18705 42.9962 9.10452V13.1844H32.6428V9.10452C33.3637 8.18647 33.795 7.03084 33.795 5.77602C33.795 2.79814 31.3719 0.375 28.394 0.375C25.4155 0.375 22.9924 2.79814 22.9924 5.77602C22.9924 7.03142 23.4237 8.18705 24.1446 9.10452V13.2548C18.5163 13.7986 13.7035 17.6016 11.9193 23.065L10.7504 26.6449C10.1357 28.5283 10.9067 30.5068 12.4654 31.5217C12.3382 31.9161 12.2394 32.2438 12.1531 32.5297C12.0239 32.9579 11.9229 33.2925 11.7974 33.6176C11.3483 34.7807 10.5847 35.8224 7.08934 40.5906C5.93282 42.1682 4.47724 44.1538 2.63503 46.6868C-1.56365 52.4598 -0.599468 60.499 4.8598 65.1135C9.05156 68.6559 14.3822 70.6068 19.8703 70.6068H34.6669C35.2788 70.6068 35.7741 70.1114 35.7741 69.4996C35.7741 68.8883 35.2788 68.3924 34.6669 68.3924H19.8703C14.9047 68.3924 10.0815 66.6272 6.28935 63.4221C1.74467 59.5804 0.926382 52.8017 4.42615 47.9889L12.6897 36.6263C13.5125 35.4951 13.7499 34.7577 14.4599 32.5524L14.5668 32.2206C16.3169 32.31 18.1911 31.2368 18.8295 29.2831L19.9984 25.7026C20.7832 23.2985 23.0097 21.6833 25.5389 21.6833H50.0996C52.6288 21.6833 54.8559 23.2985 55.6407 25.7026L56.8096 29.2831C57.4088 31.1157 59.1791 32.3037 61.0683 32.2079C61.1901 32.5856 61.2908 32.9114 61.3806 33.2015C61.5592 33.7792 61.6942 34.2154 61.8641 34.6374C62.3876 35.938 63.2436 37.1048 66.7371 41.867C67.9052 43.4594 69.3682 45.4537 71.2124 47.9895C74.7127 52.8017 73.8944 59.581 69.3497 63.4221C65.557 66.6272 60.7344 68.393 55.7687 68.393H39.8338C39.222 68.393 38.7266 68.8883 38.7266 69.5001C38.7266 70.1114 39.222 70.6073 39.8338 70.6073ZM47.2451 2.58939C49.0022 2.58939 50.4317 4.01893 50.4317 5.77602C50.4317 6.65255 50.0759 7.44719 49.5016 8.02386C49.5 8.02578 49.4985 8.02719 49.497 8.0286L49.4947 8.03078C48.918 8.60628 48.1222 8.96266 47.2451 8.96266C46.3686 8.96266 45.5733 8.60686 44.9967 8.03193C44.9944 8.02999 44.9923 8.02778 44.9903 8.02567L44.9875 8.0227C44.4137 7.44604 44.0585 6.65197 44.0585 5.77602C44.0585 4.01893 45.488 2.58939 47.2451 2.58939ZM49.2801 10.7786V13.1844H45.2106V10.7786C45.6829 10.9712 46.1886 11.0998 46.7163 11.1511C46.7338 11.1531 46.7512 11.1543 46.7687 11.1555C46.7818 11.1564 46.7949 11.1574 46.808 11.1586L46.8645 11.1629C46.9014 11.1659 46.9382 11.1688 46.9752 11.1707C47.0652 11.1753 47.1546 11.1776 47.2445 11.1776H47.2451C47.3351 11.1776 47.425 11.1753 47.5144 11.1707C47.5615 11.1684 47.608 11.1647 47.6545 11.1609L47.6909 11.158C47.7045 11.1566 47.7182 11.1556 47.7318 11.1546C47.7457 11.1536 47.7596 11.1526 47.7733 11.1511C48.3015 11.0998 48.8073 10.9712 49.2801 10.7786ZM28.3934 2.58939C30.1505 2.58939 31.5806 4.01893 31.5806 5.77602C31.5806 6.65255 31.2242 7.44719 30.6499 8.02386C30.6484 8.02578 30.6468 8.02718 30.6453 8.02859L30.643 8.03078C30.0663 8.60628 29.2711 8.96266 28.3934 8.96266C27.5169 8.96266 26.7217 8.60686 26.145 8.03193L26.1358 8.0227C25.562 7.44604 25.2068 6.65197 25.2068 5.77602C25.2068 4.01893 26.6363 2.58939 28.3934 2.58939ZM30.4285 10.7786V13.1844H26.3589V10.7786C26.8312 10.9712 27.337 11.0998 27.8646 11.1511C27.8822 11.1531 27.8999 11.1543 27.9176 11.1556L27.9177 11.1556C27.9307 11.1565 27.9437 11.1574 27.9569 11.1586L28.0109 11.1628L28.0109 11.1628C28.0484 11.1658 28.086 11.1688 28.1241 11.1707C28.2135 11.1753 28.3034 11.1776 28.3934 11.1776C28.4834 11.1776 28.5733 11.1753 28.6627 11.1707C28.7111 11.1684 28.7592 11.1645 28.8068 11.1606L28.8069 11.1606L28.8392 11.158C28.8528 11.1566 28.8665 11.1556 28.8801 11.1546L28.8801 11.1546C28.8941 11.1536 28.9079 11.1526 28.9216 11.1511C29.4499 11.0998 29.9556 10.9712 30.4285 10.7786ZM61.4806 29.8978C60.438 30.2386 59.2691 29.6793 58.915 28.5951L57.7461 25.0152C56.6626 21.6971 53.5901 19.4683 50.0996 19.4683H25.5389C22.049 19.4683 18.9759 21.6977 17.893 25.0152L16.7241 28.5951C16.3867 29.6291 15.2484 30.2542 14.1579 29.8978C13.0888 29.5489 12.5063 28.4014 12.8558 27.3323L14.0247 23.7518C15.6278 18.842 20.1246 15.5176 25.2679 15.4046H50.3706C55.5139 15.5176 60.0107 18.842 61.6138 23.7518L62.7827 27.3323C63.1322 28.4014 62.5497 29.5489 61.4806 29.8978ZM24.3398 45.038C24.3398 37.918 30.1324 32.126 37.2519 32.126C44.3714 32.126 50.1634 37.918 50.1634 45.038C50.1634 52.1569 44.3714 57.9495 37.2519 57.9495C30.1324 57.9495 24.3398 52.1575 24.3398 45.038ZM26.5548 45.038C26.5548 50.9361 31.3532 55.7351 37.2519 55.7351C43.1506 55.7351 47.949 50.9361 47.949 45.038C47.949 39.1393 43.1506 34.3404 37.2519 34.3404C31.3532 34.3404 26.5548 39.1393 26.5548 45.038ZM37.8143 40.5906V43.6146C39.7577 44.3216 41.0615 45.2097 41.0615 47.2914C41.0615 49.5145 39.6141 50.6557 37.8143 50.9342V51.4665C37.8143 51.7213 37.4955 51.8961 37.2302 51.8961C36.9292 51.8961 36.646 51.7115 36.646 51.4624V50.9769C34.6415 50.9769 32.1792 49.6309 33.287 48.0745C33.8012 47.3531 34.1847 47.639 34.7641 48.0709C35.2184 48.4096 35.7932 48.8381 36.646 48.9412V45.5222C34.8157 44.8233 33.3129 44.1411 33.3129 42.0686C33.3129 41.1079 33.6087 40.2798 34.3267 39.6547C34.9685 39.0965 35.8093 38.8283 36.646 38.7182V38.2372C36.646 37.9841 36.9395 37.8076 37.2302 37.8076C37.4983 37.8076 37.8143 37.9858 37.8143 38.2413V38.6922C39.5103 38.6922 41.4012 39.3098 40.5373 40.7786C40.1518 41.4317 39.7403 41.2493 39.1502 40.9878C38.7853 40.826 38.352 40.634 37.8143 40.5906ZM35.7955 42.7041C36.0532 42.899 36.3825 43.0766 36.7833 43.2369V40.6425C35.036 40.9181 35.2349 42.2808 35.7955 42.7041ZM37.6771 45.934V48.9239C39.3033 48.5797 39.1355 47.0417 38.5963 46.5268C38.3495 46.2921 38.0433 46.0948 37.6771 45.934ZM54.1001 42.2766C54.1981 42.8798 53.7887 43.4489 53.1849 43.547C52.5823 43.645 52.0125 43.2361 51.9145 42.6324C50.7404 35.4229 44.5782 30.1903 37.2615 30.1903C29.0746 30.1903 22.4142 36.8508 22.4142 45.0376C22.4142 53.2251 29.0746 59.8856 37.2615 59.8856C44.5782 59.8856 50.7404 54.6529 51.9145 47.4435C52.0125 46.8397 52.5806 46.4309 53.1849 46.5289C53.7887 46.6269 54.1981 47.1961 54.1001 47.7993C53.4565 51.7506 51.4209 55.3703 48.3669 57.9912C37.3463 67.4491 20.1992 59.5874 20.1992 45.0382C20.1992 30.5057 37.3336 22.6153 48.3669 32.0846C51.4209 34.7056 53.4565 38.3247 54.1001 42.2766Z" fill="#F84263"/>
    </svg>}]
    return (
        <section className={cl.stableSection}>
            <div className="container">
                <h1 className={cl.stableTitle}>SEO продвижение поможет вам получать стабильный поток целевых заявок длительное время</h1>
                <div className={cl.stableListBlock}>
                    <ul className={cl.stableList}>
                        {infoArr.map(e=>
                            <SeoStableItem title={e.title} descr={e.descr} img={e.img}/>  
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SeoStable