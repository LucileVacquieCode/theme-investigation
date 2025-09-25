'use client'
import { useTheme } from '@/app/providers/ThemeContext';
import { useEffect, useState } from 'react';

export type TLink = {
    label: string;
    url: string;
    surface: SurfaceKey;
}

export const Link: React.FC<TLink> = ({label, url, surface }) => {
    const { getSurface } = useTheme();
    const color: Surface = getSurface(surface);

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredColor, setHoveredColor] = useState<Surface>(getSurface('accent'));

    useEffect(() => {
        switch (surface) {
            case 'primary':
                setHoveredColor(getSurface('accent'))
                break

            case 'primary-reverse':
                setHoveredColor(getSurface('primary'))
                break

            case 'accent':
                setHoveredColor(getSurface('tint'))
                break

            case 'tint':
                setHoveredColor(getSurface('accent'))
                break

            default:
                setHoveredColor(getSurface('accent'))
                break
        }
    }, [surface, getSurface])

    const linkStyle = {
        backgroundColor: isHovered ? hoveredColor.background : color.background,
        color: isHovered ? hoveredColor.foreground : color.foreground,
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    }

    return (
        <a 
            href={url} 
            style={linkStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
        </a>
    )
}