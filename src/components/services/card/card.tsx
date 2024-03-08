import { ButtonPrimary, ButtonPrimaryLink } from "../../button"
import styles from './card.module.css';

type PropTypes = {
    title: string
    text: string
    image: { src: string, alt: string }
}

export const Card = ({ title, text, image }: PropTypes) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={image.src} alt={image.alt} />
            </div>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <ButtonPrimaryLink href="#">zjistit více</ButtonPrimaryLink>
        </div>
    )
}