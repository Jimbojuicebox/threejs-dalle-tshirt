import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#65b7a7',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './vitelogo.png',
  fullDecal: './react.png',
});

export default state;