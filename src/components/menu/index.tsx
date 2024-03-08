'use client'

import { useState } from 'react';
import { Logo } from '../logo';
import { menu } from './data';
import { MenuItem } from './menu-item';
import styles from './menu.module.css';

export const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.boundary}>
            <div className={styles.container}>
                <Logo size='small' />
                <div className={styles.box}>
                    {menu.map((item, index) => <MenuItem key={index} {...item}>{item.title}</MenuItem>)}
                </div>
                <div onClick={() => setOpen(!open)} className={`${styles.item} ${styles.hamburgerButton}`}>MENU</div>
                {open && <HamburgerMenu />}
            </div>
        </div>

    )
}

const HamburgerMenu = () => {
    return (
        <div className={styles.hamburger}>
            {menu.map((item, index) => <MenuItem key={index} {...item}>{item.title}</MenuItem>)}
        </div>
    )
}