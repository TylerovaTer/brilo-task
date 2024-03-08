import Link from 'next/link';
import styles from './button.module.css';

type ButtonType = {
    children: string;
    state?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkType = {
    children: string;
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonPrimary = ({ children, ...props }: ButtonType) => {
    return <button {...props} className={`${styles.btn} ${styles.primary}`}>{children.toUpperCase()}</button>;
}

export const ButtonPrimaryLink = ({ children, href, ...props }: ButtonLinkType) => {
    return <Link {...props} href={href} className={`${styles.btn} ${styles.primary}`}>{children.toUpperCase()}</Link>;
}

export const ButtonSecondary = ({ children, state, ...props }: ButtonType) => {
    return <button {...props} className={`${styles.btn} ${styles.secondary}`} data-state={state}>{children.toUpperCase()}</button>;
}