import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import "particles.js";
declare const particlesJS: any;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 1.2, random: true, out_mode: "out" }
  },
  interactivity: {
    events: { onhover: { enable: false }, onclick: { enable: false } }
  },
  retina_detect: true
});

