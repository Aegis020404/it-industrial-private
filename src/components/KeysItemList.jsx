import React from 'react';
import cl from './../style/KeysItem.module.css';

const KeysItemList = ({logo, descr, background, alt, img, classesImg})=>{
    return (
        <li className={cl.keysItem}>
        <figure alt={alt} className={cl.keysFigure}>
            <div className={cl.keysImgBlock} style={{backgroundColor: background}}>
                <div className={cl.keysImgCard}>
                    <span className={cl.keysLogo}>
                        {logo}
                    </span>
                </div>
                <div className={[cl.keysImgCard,classesImg].join` `}>
                    <img src={img} className={cl.keysImg}/>
                </div>
            </div>
            <figcaption className={cl.keysDescr}>{descr}</figcaption>
        </figure>
    </li>
    )
}

export default KeysItemList