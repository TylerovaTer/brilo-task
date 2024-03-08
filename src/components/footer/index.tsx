import Link from 'next/link';
import { Logo } from '../logo';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo size='large' />
            <div className={styles.links}>
                <ul>
                    <li><Link href={"#"}>První proklik</Link></li>
                    <li><Link href={"#"}>Druhý proklik</Link></li>
                    <li><Link href={"#"}>Třetí proklik</Link></li>
                </ul>
            </div>
            <p>© 2022 Thalion All rights reserved.</p>
        </footer>
    );
}