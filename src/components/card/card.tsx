import styles from './card.module.css';

type TCard = {
    title: string;
    body: string;
}

export const Card: React.FC<TCard> = ({title, body }) => {
    return (
        <div className={styles.base}>
            <h2 className={styles.title}>{title}</h2>
            <p>{body}</p>
        </div>
    )
}