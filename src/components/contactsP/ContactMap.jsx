import React, { useState } from 'react';
import cl from './../../style/ContactMap.module.css';
import ReactMapGl, {Marker} from 'react-map-gl';

const ContactMap = (props)=>{
    const [viewport, setViewport] = useState({
        latitude: 55.621884,
        longitude: 37.637397,
        zoom: 16,
        width: '100%',
        height: '700px',
    })
    
    const [viewportMarker, setViewportMarker] = useState({
        latitude:55.622843,
        longitude: 37.635209,
    })
    const [mapActive, setMapActive] = useState(false)
    const valueMap = (e)=>{
        e.preventDefault();
        setMapActive(!mapActive);
        console.log(mapActive)}
    return (
        <section className={cl.mapSection} onClick={e=>valueMap(e)}>
            <div className={mapActive ? [cl.mapCard, cl.active].join` ` : cl.mapCard}>
                <ReactMapGl {...viewport} onViewportChange={(viewport)=>setViewport(viewport)}  mapboxApiAccessToken={'pk.eyJ1IjoiZnRlajJpc2giLCJhIjoiY2wzZnRnaTZkMHY5bTNkcDhwZDhiZDV0cSJ9.Z3d6ButxjVK1vn71kwS_YA'}>
                    <Marker {...viewportMarker}>
                        <svg width="55" height="68" viewBox="0 0 55 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2185 1.57385C38.1615 2.55542 41.8376 4.39985 44.9816 6.97411L44.9846 6.95896C48.2461 9.63917 50.8402 13.0406 52.5621 16.895C54.2841 20.7493 55.0868 24.9511 54.907 29.1688C54.7271 33.3865 53.5696 37.5047 51.5258 41.1984C49.482 44.8922 46.6077 48.0605 43.1299 50.4533C38.6945 53.6769 34.9978 57.8096 32.2866 62.5755L30.2531 65.9636C29.9837 66.4117 29.6029 66.7824 29.1478 67.0398C28.6927 67.2972 28.1788 67.4325 27.6559 67.4325C27.1331 67.4325 26.6192 67.2972 26.1641 67.0398C25.709 66.7824 25.3282 66.4117 25.0588 65.9636L22.9374 62.4361C19.824 57.4602 15.7912 53.123 11.0546 49.6563C6.90606 46.4732 3.75992 42.1647 1.99097 37.2441C0.222011 32.3234 -0.0951911 26.9979 1.07715 21.902C2.24948 16.8061 4.86194 12.1546 8.60332 8.50164C12.3447 4.84864 17.0573 2.34811 22.1797 1.2979C26.1636 0.498026 30.2754 0.592274 34.2185 1.57385Z" fill="#F84263"/>
                        <circle cx="27.659" cy="27.8484" r="21.8309" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.094 22.7651C38.6129 23.6988 39.5643 24.3558 40.6368 24.4769L40.9309 24.5115C42.8164 24.4596 44.3559 25.9638 44.3559 27.8485C44.3559 29.5084 43.1277 30.9089 41.4844 31.1509C41.3806 31.1682 41.2941 31.1682 41.1903 31.1855C39.6335 31.3757 38.6475 31.6524 37.9383 33.3122C37.575 34.1768 37.748 34.488 37.5231 35.3006C37.2636 36.5801 36.2949 37.5657 35.0322 37.8596C34.6862 37.946 34.3922 37.9806 34.2365 37.9979C33.7002 38.0325 33.3024 38.1017 32.818 38.3437C32.1088 38.6895 31.5725 39.312 31.2612 40.0382C31.1228 40.4013 31.0363 40.799 31.019 41.2139C30.9844 41.7672 30.8979 42.2341 30.6557 42.7355C30.3617 43.3061 29.9465 43.7556 29.4622 44.0495L29.4449 44.0668C28.9259 44.3953 28.3205 44.5682 27.6805 44.5682C26.7637 44.5682 25.9333 44.1879 25.3279 43.6C24.7225 42.9948 24.3592 42.1649 24.3592 41.2485C24.3592 40.3321 24.7398 39.5022 25.3279 38.897C25.916 38.3091 26.7118 37.946 27.594 37.9288C27.6286 37.9288 27.6632 37.9288 27.6805 37.9288C27.7324 37.9288 27.7842 37.9288 27.8361 37.9288C29.6179 37.8769 30.9498 36.4245 30.9498 34.609C30.9498 33.2949 31.7455 32.1019 32.9391 31.5832C33.7521 31.1855 34.2884 31.3411 35.1533 31.1337C35.9663 30.9435 36.6755 30.442 37.1426 29.7504C37.5058 29.2144 37.6788 28.6438 37.7134 28.0041C37.7134 27.9349 37.7134 27.8485 37.7134 27.7793C37.6788 27.226 37.5404 26.6382 37.229 26.1713C37.229 26.1713 36.9696 25.8082 36.935 25.7736C36.4852 25.2376 35.9144 24.8745 35.309 24.7016C34.9111 24.5806 34.5305 24.5633 34.1327 24.5115C32.4894 24.3904 31.1747 23.0764 31.0536 21.4165L31.019 21.0534C30.8979 19.2033 29.2027 17.7336 27.6113 17.8201C26.7291 17.8028 25.9333 17.4224 25.3452 16.8518C24.7398 16.2467 24.3765 15.4167 24.3765 14.5003C24.3765 13.584 24.7571 12.754 25.3452 12.1489C25.8987 11.5091 26.7291 11.1287 27.6459 11.1287C28.5627 11.1287 29.393 11.5091 29.9984 12.097C30.5866 12.6849 30.9498 13.4802 30.9671 14.3793C30.9844 14.5695 31.0017 14.7424 31.019 14.9326C31.0536 15.1401 31.1055 15.3649 31.1747 15.5723C31.4169 16.2294 31.7282 16.6616 32.1088 16.9729C33.0602 17.7509 33.5791 17.7509 34.5997 17.8374C35.9317 17.9584 37.0734 18.8575 37.4885 20.1197C37.8172 21.0361 37.5577 21.7969 38.094 22.7651ZM24.29 21.1917C24.29 21.2263 24.29 21.2782 24.29 21.3127C24.3592 23.0764 25.8642 24.5115 27.6805 24.5115C27.9918 24.546 28.3032 24.5806 28.6146 24.6844C29.9811 25.1339 30.9152 26.4134 30.8979 27.8658C30.8979 28.6957 30.6039 29.5429 29.9465 30.2C29.2027 30.9607 28.5108 31.1337 27.5248 31.2547C25.7258 31.272 24.3592 32.6725 24.2727 34.3842C24.2727 34.4361 24.2727 34.488 24.2727 34.5398C24.2727 34.5917 24.2727 34.6436 24.2727 34.7128V34.73C24.2208 35.5773 23.8576 36.338 23.304 36.9086C22.6986 37.5138 21.8683 37.8769 20.9515 37.8769C20.0347 37.8769 19.2044 37.4965 18.5989 36.9086C17.9935 36.3035 17.6302 35.4735 17.6302 34.5571C17.6302 33.6408 18.0108 32.8108 18.5989 32.2057C18.7546 32.05 18.9276 31.9117 19.1179 31.7907C19.2735 31.6869 19.4292 31.6005 19.5849 31.5313C19.9828 31.3411 20.4325 31.2374 20.8996 31.2374C20.9861 31.2201 21.0726 31.2201 21.1763 31.2028C22.9235 31.0991 24.3073 29.6467 24.3073 27.8831C24.3073 26.4653 23.4078 25.2376 22.1104 24.7535C21.7472 24.6152 21.4358 24.5806 21.0899 24.546C21.038 24.546 21.0034 24.546 20.9515 24.546C20.0347 24.546 19.2044 24.1656 18.5989 23.5778C18.0108 22.9899 17.6475 22.1945 17.6302 21.3127V21.1744C17.6302 21.1917 17.6302 21.209 17.6302 21.2436V21.2263C17.6302 20.3099 18.0108 19.48 18.5989 18.8748C19.2044 18.2696 20.0347 17.9065 20.9515 17.9065C21.8683 17.9065 22.6986 18.2869 23.304 18.8748C23.9095 19.4454 24.29 20.2753 24.29 21.1917ZM16.6442 30.2346C15.9869 30.8916 15.1393 31.2028 14.2917 31.2028C12.4408 31.2028 10.9531 29.7158 10.9531 27.8658C10.9531 26.033 12.4408 24.5287 14.2917 24.5287C16.1253 24.5287 17.6302 26.0157 17.6302 27.8658C17.6129 28.7303 17.2843 29.5775 16.6442 30.2346Z" fill="#F84263"/>
                        </svg>
                    </Marker>
                </ReactMapGl>
            </div>
        </section>  
    )

}



export default ContactMap