export type ThemeName = 
  | 'dark' 
  | 'light' 
  | 'dracula' 
  | 'nord' 
  | 'one-dark' 
  | 'monokai' 
  | 'github-dark' 
  | 'tokyo-night' 
  | 'catppuccin-mocha' 
  | 'rose-pine' 
  | 'everforest';

export interface Theme {
  name: ThemeName;
  label: string;
  background: string;
  foreground: string;
  accent: string;
  accentDim: string;
  border: string;
  muted: string;
  mutedForeground: string;
  card: string;
  cardBorder: string;
}

export const themes: Record<ThemeName, Theme> = {
  dark: {
    name: 'dark',
    label: 'Dark',
    background: '#09090b',
    foreground: '#fafafa',
    accent: '#34d399',
    accentDim: '#10b981',
    border: '#27272a',
    muted: '#18181b',
    mutedForeground: '#a1a1aa',
    card: '#09090b',
    cardBorder: '#27272a',
  },
  light: {
    name: 'light',
    label: 'Light',
    background: '#fafafa',
    foreground: '#09090b',
    accent: '#059669',
    accentDim: '#047857',
    border: '#e4e4e7',
    muted: '#f4f4f5',
    mutedForeground: '#71717a',
    card: '#ffffff',
    cardBorder: '#e4e4e7',
  },
  dracula: {
    name: 'dracula',
    label: 'Dracula',
    background: '#282a36',
    foreground: '#f8f8f2',
    accent: '#50fa7b',
    accentDim: '#42e872',
    border: '#44475a',
    muted: '#3a3c4e',
    mutedForeground: '#6272a4',
    card: '#282a36',
    cardBorder: '#44475a',
  },
  nord: {
    name: 'nord',
    label: 'Nord',
    background: '#2e3440',
    foreground: '#eceff4',
    accent: '#88c0d0',
    accentDim: '#81a1c1',
    border: '#3b4252',
    muted: '#3b4252',
    mutedForeground: '#81a1c1',
    card: '#2e3440',
    cardBorder: '#3b4252',
  },
  'one-dark': {
    name: 'one-dark',
    label: 'One Dark',
    background: '#282c34',
    foreground: '#abb2bf',
    accent: '#61afef',
    accentDim: '#528bff',
    border: '#3e4451',
    muted: '#353b45',
    mutedForeground: '#5c6370',
    card: '#2c313a',
    cardBorder: '#3e4451',
  },
  monokai: {
    name: 'monokai',
    label: 'Monokai',
    background: '#272822',
    foreground: '#f8f8f2',
    accent: '#a6e22e',
    accentDim: '#9de021',
    border: '#49483e',
    muted: '#3e3d32',
    mutedForeground: '#75715e',
    card: '#272822',
    cardBorder: '#49483e',
  },
  'github-dark': {
    name: 'github-dark',
    label: 'GitHub Dark',
    background: '#0d1117',
    foreground: '#e6edf3',
    accent: '#58a6ff',
    accentDim: '#4695f4',
    border: '#30363d',
    muted: '#161b22',
    mutedForeground: '#8b949e',
    card: '#161b22',
    cardBorder: '#30363d',
  },
  'tokyo-night': {
    name: 'tokyo-night',
    label: 'Tokyo Night',
    background: '#1a1b26',
    foreground: '#c0caf5',
    accent: '#7aa2f7',
    accentDim: '#5d8df4',
    border: '#24283b',
    muted: '#16161e',
    mutedForeground: '#565f89',
    card: '#1a1b26',
    cardBorder: '#24283b',
  },
  'catppuccin-mocha': {
    name: 'catppuccin-mocha',
    label: 'Catppuccin Mocha',
    background: '#1e1e2e',
    foreground: '#cdd6f4',
    accent: '#f5e0dc',
    accentDim: '#f2d5cd',
    border: '#313244',
    muted: '#181825',
    mutedForeground: '#a6adc8',
    card: '#1e1e2e',
    cardBorder: '#313244',
  },
  'rose-pine': {
    name: 'rose-pine',
    label: 'Rose Pine',
    background: '#191724',
    foreground: '#e0def4',
    accent: '#ebbcba',
    accentDim: '#ea9a97',
    border: '#26233a',
    muted: '#1f1d2e',
    mutedForeground: '#6e6a86',
    card: '#191724',
    cardBorder: '#26233a',
  },
  everforest: {
    name: 'everforest',
    label: 'Everforest',
    background: '#2d353b',
    foreground: '#d3c6aa',
    accent: '#a7c080',
    accentDim: '#8fc46e',
    border: '#425047',
    muted: '#343f44',
    mutedForeground: '#859289',
    card: '#2d353b',
    cardBorder: '#425047',
  },
};

export const themeOrder: ThemeName[] = [
  'dark',
  'light',
  'dracula',
  'nord',
  'one-dark',
  'monokai',
  'github-dark',
  'tokyo-night',
  'catppuccin-mocha',
  'rose-pine',
  'everforest',
];

export function getTheme(name: ThemeName): Theme {
  return themes[name] || themes.dark;
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--foreground', theme.foreground);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-dim', theme.accentDim);
  root.style.setProperty('--border', theme.border);
  root.style.setProperty('--muted', theme.muted);
  root.style.setProperty('--muted-foreground', theme.mutedForeground);
  root.style.setProperty('--card', theme.card);
  root.style.setProperty('--card-border', theme.cardBorder);
  
  root.setAttribute('data-theme', theme.name);
  
  localStorage.setItem('theme', theme.name);
}

export function getInitialTheme(): ThemeName {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme') as ThemeName | null;
    if (stored && themes[stored]) return stored;
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'dark';
}