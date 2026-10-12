import type { Skin } from '../skin'

// Light slots sit on Paper Ink Vellum (#eee5d5), the wezterm background.
// `user` is Rosé Pine Dawn iris (herdr's accent), deepened so the rail reads on that paper.
const skin: Skin = {
  name: 'vellum',
  label: 'Vellum',
  palette: {
    read: '#8aa4b8',
    write: '#d7827e',
    run: '#8fb5ac',
    search: '#b898a8',
    web: '#7aa8b8',
    mcp: '#9ccfd8',
    other: '#a89880',
    user: '#c4a7e7',
    fg: '#e4d8c5',
    muted: '#a89880',
    surface: '#3a332c',
    zebra: '#2e2924',
    ok: '#a3b18a',
    err: '#e08a7a',
    warn: '#e0b060',
  },
  light: {
    read: '#4a5e70',
    write: '#874a5c',
    run: '#3c6057',
    search: '#705163',
    web: '#286983',
    mcp: '#53603b',
    other: '#6a5c4a',
    user: '#655576',
    fg: '#57504a',
    muted: '#6a5c4a',
    surface: '#e4d8c5',
    zebra: '#f3ebdf',
    ok: '#53603b',
    err: '#8c4b3f',
    warn: '#745522',
  },
  spinner: ['Pressing', 'Ruling', 'Inking', 'Drying', 'Binding', 'Warming'],
  done: ['Pressed', 'Ruled', 'Inked', 'Bound'],
}

export default skin
