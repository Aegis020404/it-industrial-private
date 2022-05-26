import React from "react";
import cl from './../../style/CrmOpportunities.module.css'
import MobileOppServ from "../mobilemsc/MobileOppServ";

const CrmOpportunities = ()=>{
    const infoArr = [{title: 'Производительность', descr: 'Сотрудники компании могут совершать тысячи разнообразных действий с системой, и это никак не повлияет на скорость ее работы', img: 
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1576 19.1331H32.8953C33.4457 19.1331 33.8918 19.5792 33.8919 20.1296V24.9232C33.8919 25.4735 33.4457 25.9197 32.8954 25.9197H31.1441C31.1042 26.0205 31.0625 26.1207 31.019 26.2201L32.2579 27.4589C32.4449 27.6458 32.5499 27.8993 32.5499 28.1636C32.5499 28.4279 32.4449 28.6814 32.2579 28.8682L28.8683 32.2579C28.4791 32.647 27.8482 32.647 27.459 32.2579L26.2132 31.0121C26.1162 31.0543 26.0183 31.0948 25.9198 31.1335V32.8954C25.9198 33.4457 25.4737 33.8919 24.9233 33.8919H20.1297C19.5793 33.8919 19.1332 33.4457 19.1332 32.8954V31.1335C19.0347 31.0948 18.9369 31.0543 18.8398 31.0121L17.594 32.2579C17.2049 32.647 16.5739 32.647 16.1847 32.2579L12.7951 28.8682C12.6082 28.6814 12.5032 28.4279 12.5032 28.1636C12.5032 27.8993 12.6082 27.6458 12.7951 27.4589L14.0339 26.2202C13.9904 26.1207 13.9487 26.0206 13.9088 25.9198H12.1575C11.6072 25.9198 11.161 25.4736 11.161 24.9233V24.0267H9.46681C8.91646 24.0267 8.47031 23.5806 8.47031 23.0302V21.1157C8.33984 21.065 8.21056 21.0115 8.08234 20.9552L6.72865 22.3088C6.54179 22.4957 6.28832 22.6007 6.02401 22.6007C5.75969 22.6007 5.50623 22.4958 5.31936 22.3088L1.71796 18.7074C1.32873 18.3182 1.32873 17.6872 1.71796 17.2981L3.06423 15.9517C3.00644 15.8212 2.95157 15.6893 2.89961 15.5564H0.996499C0.446154 15.5564 0 15.1103 0 14.5599V9.46674C0 8.9164 0.446154 8.47024 0.996499 8.47024H2.88537C2.9382 8.33355 2.99413 8.19805 3.05305 8.06381L1.71796 6.72865C1.32873 6.33943 1.32873 5.70852 1.71796 5.31936L5.3193 1.71789C5.70846 1.32873 6.33943 1.3286 6.72859 1.71789L8.05653 3.04576C8.19302 2.98533 8.33104 2.928 8.47024 2.87392V0.996499C8.47024 0.446154 8.9164 0 9.46674 0H14.5599C15.1103 0 15.5564 0.446154 15.5564 0.996499V2.87399C15.6956 2.92807 15.8336 2.98533 15.9702 3.04583L17.298 1.71796C17.6872 1.3288 18.3181 1.3288 18.7073 1.71796L22.3088 5.31936C22.4956 5.50623 22.6006 5.75969 22.6006 6.02401C22.6006 6.28832 22.4957 6.54179 22.3088 6.72865L20.9736 8.06381C21.0325 8.19805 21.0885 8.33355 21.1414 8.47024H23.0302C23.5805 8.47024 24.0267 8.9164 24.0267 9.46674V11.1609H24.9232C25.4735 11.1609 25.9197 11.6071 25.9197 12.1574V13.8845C26.0264 13.9265 26.1323 13.9705 26.2374 14.0164L27.4588 12.795C27.848 12.4059 28.4789 12.4059 28.8681 12.795L32.2577 16.1846C32.647 16.5738 32.647 17.2047 32.2577 17.5939L31.0294 18.8223C31.074 18.9251 31.1168 19.0287 31.1576 19.1331ZM10.4632 20.4062V22.0337H11.1609V20.1296C11.1609 19.5792 11.607 19.1331 12.1574 19.1331H13.8951C13.936 19.0287 13.9787 18.9251 14.0233 18.8223L12.795 17.5939C12.7391 17.538 12.6922 17.4768 12.6524 17.4124C12.4426 17.4371 12.2297 17.4512 12.0133 17.4512C9.0149 17.4512 6.57548 15.0118 6.57548 12.0133C6.57548 9.0149 9.0149 6.57548 12.0133 6.57548C15.0118 6.57548 17.4512 9.0149 17.4512 12.0133C17.4512 12.2297 17.4371 12.4427 17.4124 12.6524C17.4768 12.6922 17.538 12.7391 17.5939 12.795L18.8153 14.0164C18.9204 13.9705 19.0264 13.9265 19.1331 13.8845V12.1574C19.1331 11.6071 19.5792 11.1609 20.1296 11.1609H22.0337V10.4632H20.4302C19.9902 10.4632 19.6022 10.1746 19.4758 9.7531C19.3282 9.26147 19.1308 8.78268 18.8889 8.32998C18.6821 7.94287 18.7528 7.466 19.0632 7.15568L20.1949 6.02394L18.0027 3.83183L16.8768 4.95774C16.5656 5.26892 16.0873 5.33922 15.6998 5.13057C15.246 4.88625 14.7655 4.68667 14.2715 4.53727C13.851 4.41017 13.5634 4.02274 13.5634 3.58347V1.993H10.4632V3.58353C10.4632 4.02274 10.1756 4.41017 9.75515 4.53733C9.26114 4.68674 8.7807 4.88638 8.32693 5.13064C7.93943 5.33916 7.4611 5.26899 7.14992 4.95781L6.02394 3.8319L3.83183 6.02401L4.9635 7.15568C5.27375 7.466 5.34458 7.9428 5.13779 8.32984C4.89578 8.78295 4.69839 9.26174 4.55104 9.75304C4.4246 10.1745 4.03664 10.4632 3.59651 10.4632H1.993V13.5634H3.60763C4.04604 13.5634 4.43301 13.85 4.56083 14.2694C4.70938 14.757 4.9073 15.2321 5.14918 15.6814C5.35769 16.0688 5.28746 16.5472 4.97627 16.8583L3.83183 18.0027L6.02394 20.1949L7.17415 19.0447C7.48447 18.7344 7.96134 18.6637 8.34838 18.8704C8.79639 19.1098 9.26968 19.3056 9.75515 19.4523C10.1756 19.5795 10.4632 19.9669 10.4632 20.4062ZM8.56854 12.0133C8.56854 13.9128 10.1139 15.4582 12.0134 15.4582C13.9129 15.4582 15.4582 13.9128 15.4582 12.0133C15.4582 10.1139 13.9129 8.56848 12.0134 8.56848C10.1139 8.56848 8.56854 10.1139 8.56854 12.0133ZM30.4378 23.9267H31.8988V21.1261H30.4482C30.0082 21.1261 29.6202 20.8374 29.4938 20.4159C29.356 19.9569 29.1717 19.5098 28.9459 19.0873C28.7391 18.7001 28.8098 18.2233 29.1202 17.913L30.1439 16.8893L28.1635 14.9089L27.1452 15.9272C26.8341 16.2383 26.3557 16.3086 25.9682 16.1C25.5446 15.872 25.0959 15.6856 24.6347 15.5461C24.2143 15.4189 23.9267 15.0315 23.9267 14.5923V13.1539H21.1261V14.5923C21.1261 15.0315 20.8384 15.4189 20.418 15.5461C19.9568 15.6856 19.5081 15.872 19.0845 16.1C18.697 16.3088 18.2187 16.2384 17.9075 15.9272L16.8893 14.9089L14.9089 16.8893L15.9326 17.913C16.243 18.2233 16.3138 18.7001 16.1069 19.0873C15.8811 19.5098 15.6968 19.9569 15.5591 20.4159C15.4326 20.8374 15.0447 21.1261 14.6046 21.1261H13.154V23.9267H14.615C15.0534 23.9267 15.4404 24.2133 15.5682 24.6327C15.7069 25.088 15.8917 25.5314 16.1175 25.9508C16.3261 26.3383 16.2558 26.8166 15.9446 27.1278L14.909 28.1635L16.8893 30.1439L17.9303 29.1028C18.2406 28.7925 18.7174 28.7217 19.1045 28.9285C19.523 29.1519 19.9649 29.3348 20.4179 29.4717C20.8384 29.5989 21.1261 29.9863 21.1261 30.4256V31.8988H23.9267V30.4256C23.9267 29.9863 24.2144 29.5989 24.6349 29.4717C25.0879 29.3348 25.5298 29.1519 25.9483 28.9285C26.3355 28.7215 26.8121 28.7924 27.1225 29.1028L28.1636 30.1439L30.1439 28.1635L29.1082 27.1278C28.797 26.8166 28.7268 26.3383 28.9353 25.9508C29.1611 25.5313 29.346 25.0879 29.4846 24.6327C29.6124 24.2133 29.9994 23.9267 30.4378 23.9267ZM17.3498 22.5264C17.3498 19.672 19.672 17.3497 22.5264 17.3497C25.3808 17.3497 27.7031 19.6719 27.7031 22.5264C27.7031 25.3808 25.3808 27.7031 22.5264 27.7031C19.672 27.7031 17.3498 25.3807 17.3498 22.5264ZM19.3428 22.5264C19.3428 24.2818 20.771 25.7101 22.5264 25.7101C24.2818 25.7101 25.7101 24.2818 25.7101 22.5264C25.7101 20.771 24.2818 19.3428 22.5264 19.3428C20.771 19.3428 19.3428 20.771 19.3428 22.5264Z" fill="#F84263"/>
    </svg>},
    {title: 'Интеграция', descr: 'CRM можно интегрировать с любым необходимым вам сервисом: чаты, интернет-телефония, склад, ФИАС, КЛАДР, платежные системы', img:<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3219 0H31.3334C32.7441 0 33.8919 1.14776 33.8919 2.55851V13.5701C33.8919 14.1184 33.4473 14.563 32.899 14.563H29.8764C29.909 14.7509 29.9257 14.9424 29.9257 15.1356C29.9257 16.052 29.5621 16.907 28.9017 17.5428C28.2731 18.148 27.4552 18.477 26.5865 18.477C26.5429 18.477 26.4994 18.4762 26.4557 18.4745C24.7241 18.4091 23.314 17.0015 23.2456 15.2701C23.2361 15.0307 23.2518 14.7939 23.2917 14.5629H20.3218C19.7735 14.5629 19.3289 14.1184 19.3289 13.57V9.05741C19.3289 8.6658 19.5591 8.31073 19.9166 8.15093C20.2742 7.99101 20.6924 8.05654 20.9841 8.31761C21.2329 8.54036 21.5537 8.66302 21.8873 8.66295C22.2593 8.66295 22.6062 8.5154 22.8641 8.24745C23.1219 7.97975 23.2561 7.62693 23.242 7.25392C23.2155 6.55226 22.6451 5.98086 21.9434 5.95312C21.588 5.93883 21.2477 6.06149 20.9842 6.29734C20.6923 6.55868 20.2742 6.62395 19.9167 6.46408C19.5592 6.30429 19.329 5.94922 19.329 5.55761V0.992926C19.329 0.444566 19.7735 0 20.3219 0ZM28.3343 12.5771H31.906V2.55851C31.906 2.24276 31.6492 1.98585 31.3334 1.98585H21.3148V4.01506C21.5457 3.97521 21.7822 3.9592 22.0219 3.96886C23.7534 4.03731 25.161 5.44739 25.2264 7.17899C25.2612 8.09619 24.9303 8.96487 24.2947 9.6249C23.6589 10.2853 22.804 10.6489 21.8875 10.6489H21.8871C21.694 10.6489 21.5026 10.6322 21.3148 10.5996V12.5771H24.8344C25.226 12.5771 25.5812 12.8074 25.741 13.1649C25.9008 13.5224 25.8354 13.9406 25.5742 14.2323C25.3383 14.4959 25.216 14.8366 25.2301 15.1916C25.2578 15.8932 25.8291 16.4636 26.5309 16.4901C26.9052 16.5036 27.2568 16.37 27.5244 16.1123C27.7923 15.8543 27.9399 15.5074 27.9399 15.1356C27.9399 14.8019 27.8172 14.481 27.5946 14.2323C27.3333 13.9406 27.268 13.5224 27.4278 13.1649C27.5876 12.8073 27.9426 12.5771 28.3343 12.5771ZM21.5824 19.329H26.1471C26.6954 19.329 27.14 19.7735 27.14 20.3219V31.3334C27.14 32.7441 25.9922 33.8919 24.5814 33.8919H2.55851C1.14776 33.8919 0 32.7441 0 31.3333V9.31041C0 7.89966 1.14776 6.7519 2.55851 6.7519H13.5701C14.1184 6.7519 14.563 7.19647 14.563 7.74483V10.7674C14.7509 10.7348 14.9424 10.7181 15.1356 10.7181C16.052 10.7181 16.907 11.0817 17.5428 11.7421C18.1783 12.4021 18.5092 13.2708 18.4745 14.188C18.4091 15.9196 17.0015 17.3297 15.27 17.3981C15.0307 17.4077 14.7939 17.3918 14.5629 17.352V19.329H18.0824C18.4741 19.329 18.8293 19.5593 18.9891 19.9168C19.1489 20.2743 19.0835 20.6925 18.8223 20.9842C18.5864 21.2478 18.4641 21.5885 18.4782 21.9435C18.5059 22.6451 19.0772 23.2155 19.779 23.242C20.1537 23.2552 20.5048 23.1219 20.7725 22.8642C21.0404 22.6062 21.188 22.2593 21.188 21.8875C21.188 21.5538 21.0653 21.2329 20.8427 20.9842C20.5814 20.6925 20.5161 20.2743 20.6759 19.9168C20.8357 19.5592 21.1907 19.329 21.5824 19.329ZM2.55851 8.73775C2.24276 8.73775 1.98585 8.99459 1.98585 9.31041V19.329H4.01506C3.97528 19.098 3.95946 18.8612 3.96893 18.6219C4.03737 16.8905 5.44746 15.4828 7.17906 15.4174C8.09573 15.3816 8.96494 15.7136 9.62497 16.3492C10.2853 16.9849 10.6489 17.8398 10.6489 18.7563C10.6489 18.9496 10.6323 19.1411 10.5997 19.329H12.5771V15.8093C12.5771 15.4177 12.8074 15.0626 13.1649 14.9028C13.5225 14.743 13.9406 14.8084 14.2323 15.0696C14.4959 15.3055 14.8367 15.4277 15.1916 15.4137C15.8932 15.386 16.4636 14.8146 16.4901 14.1129C16.5042 13.7399 16.37 13.3871 16.1123 13.1194C15.8543 12.8514 15.5074 12.7039 15.1356 12.7039C14.8019 12.7039 14.481 12.8266 14.2323 13.0492C13.9406 13.3105 13.5223 13.3759 13.1649 13.216C12.8073 13.0562 12.5771 12.7012 12.5771 12.3095V8.73775H2.55851ZM1.98585 21.3148V31.3334C1.98585 31.6491 2.24276 31.906 2.55851 31.906H12.577V29.8764C12.3891 29.909 12.1976 29.9257 12.0043 29.9257C11.0879 29.9257 10.233 29.5621 9.59723 28.9017C8.96169 28.2417 8.63078 27.373 8.66547 26.4558C8.73087 24.7242 10.1385 23.3141 11.87 23.2457C12.1093 23.2361 12.346 23.252 12.5771 23.2918V21.3148H9.05754C8.66593 21.3148 8.31073 21.0846 8.15093 20.7271C7.99114 20.3696 8.05647 19.9514 8.31761 19.6596C8.54029 19.4109 8.66295 19.0901 8.66295 18.7563C8.66295 18.3845 8.5154 18.0376 8.24745 17.7797C7.97969 17.5218 7.62607 17.3891 7.25392 17.4018C6.55226 17.4283 5.98086 17.9987 5.95312 18.7004C5.93909 19.0553 6.06135 19.396 6.29727 19.6595C6.55861 19.9513 6.62388 20.3695 6.46408 20.727C6.30429 21.0846 5.94928 21.3148 5.55761 21.3148H1.98585ZM24.5815 31.906C24.8972 31.906 25.1541 31.6492 25.1541 31.3334V21.3149H23.1244C23.157 21.5028 23.1737 21.6943 23.1737 21.8875C23.1737 22.8039 22.8101 23.6589 22.1497 24.2947C21.4897 24.9302 20.6206 25.262 19.7038 25.2264C17.9722 25.161 16.5621 23.7534 16.4937 22.0219C16.4842 21.7826 16.5 21.5458 16.5398 21.3148H14.5629V24.8345C14.5629 25.2261 14.3326 25.5812 13.9751 25.741C13.6175 25.9009 13.1994 25.8354 12.9076 25.5742C12.644 25.3383 12.3025 25.216 11.9484 25.2301C11.2468 25.2578 10.6763 25.8292 10.6499 26.5309C10.6358 26.9039 10.7699 27.2567 11.0277 27.5244C11.2857 27.7923 11.6326 27.9399 12.0043 27.9399C12.3381 27.9399 12.659 27.8172 12.9076 27.5946C13.1994 27.3333 13.6177 27.2679 13.9751 27.4278C14.3327 27.5876 14.5629 27.9426 14.5629 28.3343V31.906H24.5815Z" fill="#F84263"/>
    </svg>},
    {title: 'Контроль', descr: 'Системы разрабатываются с учетом требований безопасности. Данные вашей компании и ваших клиентов всегда будут в безопасности', img: 
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0038 0H13.6133C13.0631 0 12.6172 0.445983 12.6172 0.996092V11.3765C12.1946 11.3334 11.7693 11.3114 11.3444 11.3112C10.5054 11.3112 9.66488 11.3958 8.84609 11.5625C8.38211 11.657 8.04875 12.065 8.04875 12.5385V14.2328C7.93799 14.2762 7.82815 14.3218 7.71925 14.3696L6.52095 13.1713C6.18619 12.8365 5.66185 12.7836 5.267 13.045C4.57067 13.5055 3.91657 14.0402 3.32283 14.6339C2.72889 15.2279 2.19419 15.882 1.73373 16.5783C1.47256 16.9731 1.52542 17.4974 1.86023 17.8321L3.05847 19.0304C3.01072 19.1393 2.9651 19.2491 2.92174 19.3599H1.22719C0.753709 19.3599 0.345644 19.6933 0.251148 20.1572C0.084535 20.9752 0 21.8158 0 22.6556C0 23.4954 0.084535 24.336 0.251148 25.154C0.345644 25.618 0.753709 25.9513 1.22719 25.9513H2.92167C2.9651 26.0621 3.01072 26.1719 3.0584 26.2808L1.86017 27.4791C1.52542 27.8139 1.47249 28.3381 1.73366 28.7329C2.19419 29.4292 2.72883 30.0834 3.32283 30.6774C3.9165 31.271 4.57067 31.8056 5.267 32.2663C5.66192 32.5275 6.18613 32.4747 6.52095 32.1399L7.71925 30.9416C7.82815 30.9894 7.93799 31.035 8.04875 31.0784V32.7727C8.04875 33.2462 8.38211 33.6542 8.84609 33.7487C9.66488 33.9155 10.5054 34 11.3446 34H33.0038C33.554 34 33.9999 33.554 33.9999 33.0039V0.996092C33.9999 0.445983 33.554 0 33.0038 0ZM12.6172 24.7504C12.2352 24.9834 11.7955 25.109 11.3444 25.109C9.9916 25.109 8.89105 24.0084 8.89105 22.6556C8.89105 21.3028 9.99166 20.2023 11.3444 20.2023C11.7955 20.2023 12.2352 20.3279 12.6172 20.5609V24.7504ZM11.3444 32.0078C10.9088 32.0078 10.4728 31.9807 10.0409 31.927V30.369C10.0409 29.9287 9.75181 29.5406 9.32993 29.4146C8.86608 29.2761 8.41618 29.0893 7.99264 28.8594C7.60496 28.6489 7.12504 28.7185 6.81307 29.0304L5.71026 30.1332C5.36714 29.866 5.03976 29.5768 4.7315 29.2686C4.42318 28.9603 4.13398 28.6329 3.86683 28.2899L4.96964 27.1871C5.28161 26.8752 5.3512 26.3951 5.1407 26.0074C4.9108 25.584 4.72407 25.1341 4.58554 24.6703C4.45957 24.2483 4.07143 23.9591 3.63109 23.9591H2.0728C2.01921 23.5276 1.99218 23.0914 1.99218 22.6555C1.99218 22.2196 2.01921 21.7835 2.0728 21.352H3.63109C4.07143 21.352 4.45957 21.0628 4.58554 20.6409C4.72407 20.1771 4.9108 19.7272 5.1407 19.3037C5.3512 18.916 5.28161 18.4361 4.96964 18.1241L3.86683 17.0213C4.13405 16.6782 4.42325 16.3508 4.7315 16.0427C5.03976 15.7343 5.36714 15.4452 5.71026 15.178L6.81307 16.2807C7.12498 16.5927 7.6049 16.6623 7.99264 16.4518C8.41611 16.2219 8.86608 16.0351 9.32993 15.8966C9.75187 15.7705 10.0409 15.3824 10.0409 14.9421V13.3842C10.8945 13.2781 11.7634 13.2769 12.6172 13.3806V18.398C12.2072 18.275 11.7789 18.2101 11.3444 18.2101C8.89311 18.2101 6.89887 20.2043 6.89887 22.6556C6.89887 25.1069 8.89317 27.1011 11.3444 27.1011C11.7789 27.1011 12.2072 27.0362 12.6172 26.9132V32.0077L11.3444 32.0078ZM32.0078 32.0078H14.6093V1.99218H32.0078V32.0078ZM19.2578 15.1759V28.1562C19.2578 28.7063 19.7038 29.1523 20.2539 29.1523C20.804 29.1523 21.25 28.7063 21.25 28.1562V15.1759C22.4838 14.7592 23.375 13.5915 23.375 12.2187C23.375 10.846 22.4838 9.67829 21.25 9.2616V5.84374C21.25 5.29363 20.804 4.84765 20.2539 4.84765C19.7038 4.84765 19.2578 5.29363 19.2578 5.84374V9.2616C18.024 9.67829 17.1328 10.846 17.1328 12.2187C17.1328 13.5915 18.024 14.7592 19.2578 15.1759ZM20.2539 11.0898C20.8764 11.0898 21.3828 11.5963 21.3828 12.2187C21.3828 12.841 20.8767 13.3472 20.2545 13.3476L20.2539 13.3476L20.2532 13.3476C19.631 13.3472 19.125 12.841 19.125 12.2187C19.125 11.5963 19.6314 11.0898 20.2539 11.0898ZM25.5664 28.1562V24.7158C24.3669 24.2803 23.5078 23.1293 23.5078 21.7812C23.5078 20.4085 24.3989 19.2408 25.6328 18.8241V5.84374C25.6328 5.29363 26.0787 4.84765 26.6289 4.84765C27.179 4.84765 27.6249 5.29363 27.6249 5.84374V18.8241C28.8588 19.2408 29.7499 20.4085 29.7499 21.7812C29.7499 23.1786 28.8269 24.3643 27.5585 24.7609V28.1562C27.5585 28.7063 27.1126 29.1523 26.5624 29.1523C26.0123 29.1523 25.5664 28.7063 25.5664 28.1562ZM27.7578 21.7812C27.7578 21.1588 27.2513 20.6523 26.6289 20.6523C26.0064 20.6523 25.5 21.1588 25.5 21.7812C25.5 22.4037 26.0064 22.9101 26.6289 22.9101C27.2513 22.9101 27.7578 22.4037 27.7578 21.7812Z" fill="#F84263"/>
    </svg>},
    {title: 'Организация экрана', descr: 'Индивидуальная разработка позволяет расположить функции вашей системы в наиболее удачной для вас последовательности', img: 
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.02539 0H33.9746C34.5409 0 35 0.459102 35 1.02539V25.6348C35 26.2011 34.5409 26.6602 33.9746 26.6602H21.6016V28.7793H22.9688C24.665 28.7793 26.0449 30.1593 26.0449 31.8555V33.9746C26.0449 34.5409 25.5858 35 25.0195 35H9.98047C9.41418 35 8.95508 34.5409 8.95508 33.9746V31.8555C8.95508 30.1593 10.335 28.7793 12.0312 28.7793H13.3984V26.6602H1.02539C0.459102 26.6602 0 26.2011 0 25.6348V1.02539C0 0.459102 0.459102 0 1.02539 0ZM23.9941 31.8555C23.9941 31.2901 23.5342 30.8301 22.9688 30.8301H12.0312C11.4658 30.8301 11.0059 31.2901 11.0059 31.8555V32.9492H23.9941V31.8555ZM15.4492 26.6602V28.7793H19.5508V26.6602H15.4492ZM2.05078 24.6094H32.9492V22.5244H2.05078V24.6094ZM2.05078 20.4736H32.9492V2.05078H2.05078V20.4736ZM11.6895 12.3047H9.63867C9.07238 12.3047 8.61328 11.8456 8.61328 11.2793C8.61328 10.713 9.07238 10.2539 9.63867 10.2539H11.0557L12.8231 6.71911C13.2306 5.90406 14.4246 5.98842 14.713 6.85344L17.0174 13.7668L19.2395 4.87826C19.4875 3.88637 20.8837 3.8325 21.2071 4.80272L23.0243 10.2539H25.3613C25.9276 10.2539 26.3867 10.713 26.3867 11.2793C26.3867 11.8456 25.9276 12.3047 25.3613 12.3047H22.2852C21.8438 12.3047 21.452 12.0222 21.3124 11.6037L20.3752 8.7919L18.153 17.6804C17.9047 18.6736 16.5101 18.7299 16.1854 17.7559L13.5503 9.85052L12.6066 11.7379C12.4329 12.0853 12.0779 12.3047 11.6895 12.3047Z" fill="#F84263"/>
    </svg>},
    {title: 'Индивидуальный дизайн', descr: 'Система создается в соответствии с разработанным с вашими корпоративными стандартами и пожеланиями дизайном', img:<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.65234 0H30.2149C32.2288 0 33.8672 1.63844 33.8672 3.65234V26.2969C33.8672 28.3108 32.2288 29.9492 30.2149 29.9492H29.8828V33.0039C29.8828 33.554 29.4368 34 28.8867 34C28.3366 34 27.8906 33.554 27.8906 33.0039V21.9805H25.8984V33.0039C25.8984 33.554 25.4525 34 24.9023 34C24.3522 34 23.9063 33.554 23.9063 33.0039V21.9805H21.9141V33.0039C21.9141 33.554 21.4681 34 20.918 34C20.3679 34 19.9219 33.554 19.9219 33.0039V29.9492H15.9375V33.0039C15.9375 33.554 15.4915 34 14.9414 34C14.3913 34 13.9453 33.554 13.9453 33.0039V31.9414H8.96485C8.41474 31.9414 7.96875 31.4954 7.96875 30.9453C7.96875 30.3952 8.41474 29.9492 8.96485 29.9492H13.9453V27.957H10.957C10.4069 27.957 9.96094 27.511 9.96094 26.9609C9.96094 26.4108 10.4069 25.9648 10.957 25.9648H13.9453V23.9727H8.96485C8.41474 23.9727 7.96875 23.5267 7.96875 22.9766C7.96875 22.4265 8.41474 21.9805 8.96485 21.9805H13.9453V19.9883H10.957C10.4069 19.9883 9.96094 19.5423 9.96094 18.9922C9.96094 18.4421 10.4069 17.9961 10.957 17.9961H13.9453V16.0039H5.97656V33.0039C5.97656 33.554 5.53058 34 4.98047 34C4.43036 34 3.98438 33.554 3.98438 33.0039V29.9492H3.65234C1.63844 29.9492 0 28.3108 0 26.2969V3.65234C0 1.63844 1.63844 0 3.65234 0ZM30.2149 1.99219H3.65234C2.73693 1.99219 1.99219 2.73693 1.99219 3.65234V8.03516H31.875V3.65234C31.875 2.73693 31.1303 1.99219 30.2149 1.99219ZM24.9023 16.6024L22.1936 19.9883H27.6111L24.9023 16.6024ZM29.8828 27.957H30.2149C31.1303 27.957 31.875 27.2123 31.875 26.2969V10.0273H1.99219V26.2969C1.99219 27.2123 2.73693 27.957 3.65234 27.957H3.98438V15.0078C3.98438 14.4577 4.43036 14.0117 4.98047 14.0117H14.9414C15.4915 14.0117 15.9375 14.4577 15.9375 15.0078V27.957H19.9219V19.9883C19.9219 19.7621 19.9988 19.5426 20.1402 19.3661L24.1245 14.3856C24.5232 13.8873 25.2818 13.8876 25.6802 14.3856L29.6645 19.3661C29.8059 19.5426 29.8828 19.7621 29.8828 19.9883V27.957ZM25.8984 5.04688C25.8984 5.597 25.4525 6.04297 24.9023 6.04297C24.3522 6.04297 23.9062 5.597 23.9062 5.04688C23.9062 4.49675 24.3522 4.05078 24.9023 4.05078C25.4525 4.05078 25.8984 4.49675 25.8984 5.04688ZM28.8867 6.04297C29.4368 6.04297 29.8828 5.597 29.8828 5.04688C29.8828 4.49675 29.4368 4.05078 28.8867 4.05078C28.3366 4.05078 27.8906 4.49675 27.8906 5.04688C27.8906 5.597 28.3366 6.04297 28.8867 6.04297ZM21.9141 5.04688C21.9141 5.597 21.4681 6.04297 20.918 6.04297C20.3678 6.04297 19.9219 5.597 19.9219 5.04688C19.9219 4.49675 20.3678 4.05078 20.918 4.05078C21.4681 4.05078 21.9141 4.49675 21.9141 5.04688Z" fill="#F84263"/>
    </svg>},
    {title: 'Ничего лишнего', descr: 'Вы сами выбираете необходимый функционал, делая вашу систему такой, как вам нужно, не перегружая ее ненужными элементами', img: 
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.6911 7.5751C35.9379 7.32826 36.0466 6.97528 35.9815 6.63228C35.9164 6.28928 35.686 6.00066 35.366 5.86145L31.811 4.31438L30.5634 0.709834C30.4445 0.366345 30.1573 0.108254 29.8032 0.0267963C29.4492 -0.0545211 29.0782 0.0519793 28.8212 0.309015L26.8102 2.32113C24.1044 0.823298 21.0032 0.00477868 17.9877 0.00477868C13.183 0.00477868 8.66592 1.87684 5.26844 5.27619C1.87095 8.67555 0 13.1951 0 18.0024C0 22.8096 1.87102 27.3293 5.26851 30.7286C8.66592 34.1279 13.1831 36 17.9878 36C22.7925 36 27.3096 34.1279 30.7071 30.7286C34.1045 27.3293 35.9756 22.8097 35.9756 18.0024C35.9756 15.0076 35.231 12.0688 33.8165 9.45088L35.6911 7.5751ZM28.3045 11.9814L26.1251 11.3962L31.2015 6.35041L33.1047 7.17864L28.3045 11.9814ZM27.9074 18.0024C27.9074 23.4751 23.4574 27.9275 17.9877 27.9275C12.518 27.9275 8.06805 23.4751 8.06805 18.0024C8.06805 12.5296 12.518 8.07721 17.9877 8.07721C19.6347 8.07721 21.0384 8.40234 22.3823 9.09663L22.9261 11.6011L21.5889 12.9304C20.5719 12.2054 19.3287 11.7786 17.9876 11.7786C14.5577 11.7786 11.7673 14.5706 11.7673 18.0024C11.7673 21.4343 14.5577 24.2262 17.9876 24.2262C21.4176 24.2262 24.208 21.4343 24.208 18.0024C24.208 16.6727 23.7888 15.4392 23.0761 14.4268L24.3943 13.1165L26.9879 13.8129C27.6141 15.0958 27.9074 16.4338 27.9074 18.0024ZM22.0989 18.0024C22.0989 20.2705 20.2546 22.1158 17.9877 22.1158C15.7208 22.1158 13.8765 20.2705 13.8765 18.0024C13.8765 15.7342 15.7208 13.8889 17.9877 13.8889C18.7426 13.8889 19.4501 14.0944 20.0588 14.4512L17.2077 17.2851C16.7945 17.6958 16.7923 18.3639 17.2028 18.7773C17.4089 18.9849 17.6798 19.0888 17.9509 19.0888C18.2196 19.0888 18.4885 18.9867 18.6941 18.7823L21.5466 15.947C21.8972 16.5523 22.0989 17.254 22.0989 18.0024ZM29.1215 2.99284L29.7525 4.81587L24.7014 9.83658L24.2695 7.84761L29.1215 2.99284ZM33.8663 18.0024C33.8663 22.246 32.2146 26.2357 29.2155 29.2364C26.2165 32.2371 22.229 33.8896 17.9877 33.8896C13.7464 33.8896 9.75895 32.237 6.75988 29.2364C3.76082 26.2357 2.10915 22.246 2.10915 18.0024C2.10915 13.7587 3.76082 9.76905 6.75988 6.7684C9.75895 3.76767 13.7464 2.11509 17.9877 2.11509C20.4531 2.11509 22.9865 2.73658 25.2503 3.88184L22.371 6.7627C22.3682 6.76551 22.3657 6.76847 22.3629 6.77128C21.0099 6.23167 19.567 5.9669 17.9876 5.9669C11.3549 5.9669 5.95883 11.366 5.95883 18.0024C5.95883 24.6387 11.3549 30.0378 17.9876 30.0378C24.6203 30.0378 30.0164 24.6387 30.0164 18.0024C30.0164 16.5164 29.7958 15.1947 29.3318 13.9347C29.3429 13.9245 29.3545 13.9152 29.3651 13.9045L32.251 11.017C33.3109 13.1821 33.8663 15.5712 33.8663 18.0024Z" fill="#F65774"/>
    </svg>
    }]
    return (
        <section className={cl.crmSection}>
            <div className="container">
                <h2 className={cl.crmTitle}>Возможности CRM-систем</h2>
                <MobileOppServ dataInfo={infoArr}/>
            </div>
        </section>
    )
}

export default CrmOpportunities