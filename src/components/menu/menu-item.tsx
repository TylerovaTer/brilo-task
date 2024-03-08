'use client'

import { useState } from 'react';
import styles from './menu.module.css';
import Link from 'next/link';

type PropTypes = {
    children: string
    href: string
    submenu?: { title: string, href: string }[]
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const MenuItem = ({ children, href, submenu }: PropTypes) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.item} onClick={() => setOpen(!open)}>
            <Link className={styles.link} href={href}>{children.toUpperCase()}</Link>
            {submenu && <span className={styles.drawer} />}
            {open && submenu && (
                <div className={styles.submenu}>
                    {submenu.map((item, index) => (
                        <Link className={styles.item} key={index} href={item.href}>
                            {item.title.toUpperCase()}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}