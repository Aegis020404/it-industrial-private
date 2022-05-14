import React from "react";
import cl from './MyNavPages.module.css';

const NavPagesHead = ({navItems})=>{
    return (
        <div className={cl.navBlock}>
            <div className={cl.navCard}>
                <nav className={cl.nav}>
                    <ul className={cl.navList}>
                        <li className={cl.navItem}>
                            Главная
                        </li>
                        {navItems.map(e=><li className={cl.navItem}>{e}</li>)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavPagesHead