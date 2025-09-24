type ThemeName = 'wpp' | 'emc' | 'wavemaker' | 'mindshare';

type SurfaceKey = 'primary' | 'primary-reverse' | 'secondary' | 'tertiary' | 'accent' | 'tint'

interface Theme {
    logo: string,
    colors: {
        system: Record<string, string>
        brand: Record<SurfaceKey, Surface>
    }
}

type Surface = {
    background: string
    foreground: string
}