import { playSound } from './sounds.js';

export async function animateExplosion(container) {
  const containerRect = container.getBoundingClientRect();

  // Create explosion particles (yellow, smaller)
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('explosion-particle');
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${containerRect.left + containerRect.width / 2}px`;
    particle.style.top = `${containerRect.top + containerRect.height / 2}px`;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 200 + 50;
    particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    document.body.appendChild(particle);
    particle.addEventListener('animationend', () => particle.remove());
  }

  // Create huge smoke particles (grey, larger, slower fade)
  // This will be replaced by the new corner smoke system during the raccoon transition
  // For standard generate button explosion, keep a few smoke particles
  for (let i = 0; i < 10; i++) { // Reduced number for normal explosion
    const smokeParticle = document.createElement('div');
    smokeParticle.classList.add('smoke-particle');
    smokeParticle.style.width = `${Math.random() * 60 + 30}px`;
    smokeParticle.style.height = smokeParticle.style.width;
    smokeParticle.style.left = `${containerRect.left + containerRect.width / 2}px`;
    smokeParticle.style.top = `${containerRect.top + containerRect.height / 2}px`;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 200 + 50;
    smokeParticle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    smokeParticle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    document.body.appendChild(smokeParticle);
    smokeParticle.addEventListener('animationend', () => smokeParticle.remove());
  }

  // Shatter the container into pieces
  container.classList.add('container-shattered');
  const numPieces = 10; // Number of pieces to break into
  for (let i = 0; i < numPieces; i++) {
    const piece = document.createElement('div');
    piece.classList.add('container-piece');
    piece.style.width = `${Math.random() * 50 + 20}px`;
    piece.style.height = `${Math.random() * 50 + 20}px`;
    piece.style.left = `${containerRect.left + containerRect.width / 2}px`;
    piece.style.top = `${containerRect.top + containerRect.height / 2}px`;

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300 + 100;
    piece.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    piece.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    piece.style.setProperty('--rotate', `${Math.random() * 720 - 360}deg`); // Random rotation
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }

  return new Promise(resolve => {
    // We resolve immediately as the container's visual disappearance is handled by CSS,
    // and its 'display: none' is managed in main.js after smoke starts.
    // The shattering animation runs in parallel.
    setTimeout(() => resolve(), 500); // Allow some time for pieces to start moving
  });
}

export function animatePageExplosion(hugeSmoke = false) {
  // Clear previous smoke-dragger elements, but not the new corner-smoke-cloud
  document.querySelectorAll('.smoke-dragger').forEach(el => el.remove());

  const body = document.body;
  const numParticles = hugeSmoke ? 0 : 100; // No traditional explosion particles if hugeSmoke
  // const smokeCloudCount = hugeSmoke ? 20 : 0; // Number of drifting smoke clouds - handled by new corner smoke now

  // Drifting smoke clouds (kept for other general smoke effects if needed)
  if (!hugeSmoke) {
    for (let i = 0; i < 20; i++) {
      const smokeDragger = document.createElement('div');
      smokeDragger.classList.add('smoke-dragger');

      // Random start position
      const startX = Math.random() * window.innerWidth - window.innerWidth / 2;
      const startY = Math.random() * window.innerHeight - window.innerHeight / 2;
      // Random end position
      const endX = Math.random() * window.innerWidth * 2 - window.innerWidth;
      const endY = Math.random() * window.innerHeight * 2 - window.innerHeight;

      smokeDragger.style.setProperty('--startX', `${startX}px`);
      smokeDragger.style.setProperty('--startY', `${startY}px`);
      smokeDragger.style.setProperty('--endX', `${endX}px`);
      smokeDragger.style.setProperty('--endY', `${endY}px`);
      smokeDragger.style.animationDelay = `${Math.random() * 2}s`; // Stagger animation start
      smokeDragger.style.animationDuration = `${5 + Math.random() * 3}s`; // Random duration, slightly shorter
      smokeDragger.style.width = `${100 + Math.random() * 100}px`; // Random size
      smokeDragger.style.height = smokeDragger.style.width;

      body.appendChild(smokeDragger);
      smokeDragger.addEventListener('animationend', () => smokeDragger.remove());
    }
  }

  // Traditional page explosion particles (only if not hugeSmoke mode)
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('page-explosion-particle');
    particle.style.width = `${Math.random() * 30 + 10}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 500 + 200;
    particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    body.appendChild(particle);
    particle.addEventListener('animationend', () => particle.remove());
  }
}

// These functions are no longer used for the "forever long" glitch/shake,
// as classes are added directly. Kept for potential other uses.
export function animatePageShake() {
  return new Promise(resolve => {
    document.body.classList.add('shake');
    document.body.addEventListener('animationend', function handler() {
      document.body.removeEventListener('animationend', handler);
      document.body.classList.remove('shake');
      resolve();
    }, { once: true });
  });
}

export function animatePageBreak() {
  return new Promise(resolve => {
    document.body.classList.add('page-break');
    document.body.addEventListener('animationend', function handler() {
      document.body.removeEventListener('animationend', handler);
      document.body.classList.remove('page-break');
      resolve();
    }, { once: true });
  });
}

export function animatePageGlitches(duration = 1000) {
  document.body.classList.add('glitch');
  return new Promise(resolve => {
    setTimeout(() => {
      document.body.classList.remove('glitch');
      resolve();
    }, duration);
  });
}

export function createCenterSmoke(overlayElement) {
  const smokeClouds = [];
  const numClouds = 45; // Increased number of clouds

  for (let i = 0; i < numClouds; i++) {
    const smokeCloud = document.createElement('div');
    smokeCloud.classList.add('center-smoke-cloud');
    
    // Position near the center initially
    smokeCloud.style.left = `calc(50% + ${Math.random() * 150 - 75}px)`; // Slightly wider initial spread
    smokeCloud.style.top = `calc(50% + ${Math.random() * 150 - 75}px)`;
    
    // Random initial size (smaller than before to grow aggressively)
    const initialSize = 15 + Math.random() * 25; // From 15 to 40px (slightly larger start)
    smokeCloud.style.width = `${initialSize}px`;
    smokeCloud.style.height = `${initialSize}px`;

    const initialRotation = Math.random() * 360;
    const finalRotation = initialRotation + (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 360); // Spin 1 to 2 times
    
    // Randomized movement values - Increased for more movement
    const startMoveX = Math.random() * 600 - 300; // Wider initial random movement
    const startMoveY = Math.random() * 600 - 300;
    const endMoveX = Math.random() * 2000 - 1000; // Even wider range for final drift
    const endMoveY = Math.random() * 2000 - 1000;

    // Random final scale, ensuring they grow large to block view significantly - Increased scale
    const finalScale = 20 + Math.random() * 20; // Scale from 20x to 40x (larger final scale)
    
    // Set CSS variables for animation
    smokeCloud.style.setProperty('--initial-rotation', `${initialRotation}deg`);
    smokeCloud.style.setProperty('--final-rotation', `${finalRotation}deg`);
    // The individual cloud animation should be longer than the total obscuring phase
    smokeCloud.style.setProperty('--animation-duration', `${5 + Math.random() * 3}s`); // 5-8 seconds duration
    smokeCloud.style.setProperty('--start-move-x', `${startMoveX}px`);
    smokeCloud.style.setProperty('--start-move-y', `${startMoveY}px`);
    smokeCloud.style.setProperty('--end-move-x', `${endMoveX}px`);
    smokeCloud.style.setProperty('--end-move-y', `${endMoveY}px`);
    smokeCloud.style.setProperty('--final-scale', finalScale); // Pass final scale
    
    overlayElement.appendChild(smokeCloud);
    smokeClouds.push(smokeCloud);
  }
  return smokeClouds;
}