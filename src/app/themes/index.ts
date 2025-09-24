import wppTheme from './wpp';
import emcTheme from './emc';
import mindshareTheme from './mindshare';
import wavemakerTheme from './wavemaker';

const themeMap: Record<ThemeName, Theme> = {
  wpp: wppTheme,
  emc: emcTheme,
  wavemaker: wavemakerTheme,
  mindshare: mindshareTheme,
}

export default themeMap