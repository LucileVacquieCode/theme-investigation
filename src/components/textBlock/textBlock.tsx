import { useTheme } from '@/app/providers/ThemeContext';
import styles from './textBlock.module.css';

type TTextBlock = {
    title: string;
    body: string;
    surface: SurfaceKey;
}

export const TextBlock: React.FC<TTextBlock> = ({title, body, surface }) => {
    const { getSurface } = useTheme()
    const color = getSurface(surface)

    return (
        <div className={styles.base} style={{backgroundColor: color.background, color: color.foreground}}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}