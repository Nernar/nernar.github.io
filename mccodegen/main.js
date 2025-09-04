import { playSound } from './sounds.js';
import { animateExplosion, createCenterSmoke } from './animations.js';
import { displayMessage } from './chat.js';

let previousCode = '';
let titleHoldTimer = null; // Timer for holding the title image
const HOLD_DURATION = 1000; // 1 second hold duration, but we'll manage stages inside
let sillySoundLoopSource = null; // To keep track of the looped sound
let explosionLongSoundSource = null; // To keep track of the long explosion sound
let isRaccoonActive = false; // Flag to check if raccoon explosion has occurred

let raccoonDanceInterval = null;
let currentRaccoonFrame = 1;
const totalRaccoonFrames = 4;
let raccoonFrames; // Collection of all raccoon image elements
let previousRaccoonFrameElement = null; // To keep track of the currently displayed frame
let backgroundEffectsLayer; // Reference to the new background element
let smokeOverlay; // Reference to the smoke overlay element

// Function to start the raccoon dance animation
function startRaccoonDance() {
  if (raccoonDanceInterval) clearInterval(raccoonDanceInterval); // Clear any existing interval
  if (!raccoonFrames || raccoonFrames.length === 0) {
    console.error('Raccoon frames not found for starting dance! Cannot start dance.');
    return;
  }

  currentRaccoonFrame = 1;

  // Initially hide all frames, then show the first one
  raccoonFrames.forEach(frame => frame.style.display = 'none');
  const firstFrame = document.getElementById(`raccoon-frame-${currentRaccoonFrame}`);
  if (firstFrame) {
    firstFrame.style.display = 'block';
    previousRaccoonFrameElement = firstFrame;
  }

  raccoonDanceInterval = setInterval(() => {
    if (previousRaccoonFrameElement) {
      previousRaccoonFrameElement.style.display = 'none'; // Hide the previously active frame
    }

    currentRaccoonFrame = (currentRaccoonFrame % totalRaccoonFrames) + 1;
    const nextFrame = document.getElementById(`raccoon-frame-${currentRaccoonFrame}`);
    if (nextFrame) {
      nextFrame.style.display = 'block';
      previousRaccoonFrameElement = nextFrame; // Update the previous frame tracker
    }
  }, 100); // 100ms interval for 10 frames per second animation
}

// Function to stop the raccoon dance animation
function stopRaccoonDance() {
  if (raccoonDanceInterval) {
    clearInterval(raccoonDanceInterval);
    raccoonDanceInterval = null;
  }
  if (raccoonFrames) {
    raccoonFrames.forEach(frame => frame.style.display = 'none'); // Hide all frames
    previousRaccoonFrameElement = null; // Reset tracker
  }
  if (sillySoundLoopSource) {
    sillySoundLoopSource.stop();
    sillySoundLoopSource = null;
  }
  // Also remove glitch and shake classes from the background layer if stopping the raccoon sequence early
  if (backgroundEffectsLayer) {
    backgroundEffectsLayer.classList.remove('glitch');
    backgroundEffectsLayer.classList.remove('shake');
  }
  if (smokeOverlay) { // Also remove shake from smoke overlay
    smokeOverlay.classList.remove('shake');
    // Also remove fade-out if it was active
    smokeOverlay.classList.remove('fade-out');
    // Also remove all generated smoke clouds
    Array.from(smokeOverlay.children).forEach(child => {
      if (child.classList.contains('center-smoke-cloud')) {
        child.remove();
      }
    });
    smokeOverlay.style.display = 'none'; // Hide the overlay
  }
  // Reset title image animations and filters
  const titleImage = document.getElementById('title-image');
  if (titleImage) {
    titleImage.classList.remove('shaking', 'glitching');
    titleImage.style.filter = ''; // Remove any applied SVG filters
  }
  isRaccoonActive = false; // Reset the flag
  // Stop long explosion sound if it was playing due to premature release
  if (explosionLongSoundSource) {
    explosionLongSoundSource.stop();
    explosionLongSoundSource = null;
  }
}

function generateCode() {
  // Exclude A, E, I, O, U, L, S, 0, 1, 5
  let allowedCharacters = 'BCDFGHJKMNPQRTUVWXYZ2346789'.replace(/[AEIOULS015]/g, '');
  let code = '';
  for (let i = 0; i < 25; i++) {
    let char;
    do {
      allowedCharacters = allowedCharacters.split('').sort(() => Math.random() - 0.5).join('');
      char = allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
    } while (previousCode.includes(char));

    code += char;
    if ((i + 1) % 5 === 0 && i < 25) {
      code += '-';
    }
  }
  if (code.endsWith('-')) {
    code = code.slice(0, -1);
  }
  code = code.toUpperCase();
  previousCode = code;
  return code;
}

document.addEventListener('DOMContentLoaded', () => {
  raccoonFrames = document.querySelectorAll('.dancing-raccoon-frame'); // Assign raccoon frames once the DOM is loaded
  backgroundEffectsLayer = document.getElementById('background-effects-layer'); // Get reference to the new background element
  smokeOverlay = document.getElementById('smoke-overlay'); // Get reference to the smoke overlay

  // Add bubblePop sound to all buttons with class 'action-button' except 'generate'
  document.querySelectorAll('.action-button:not(#generate)').forEach(button => {
    button.addEventListener('click', () => playSound('bubblePopBuffer'));
  });
  document.querySelector('.closebtn').addEventListener('click', () => playSound('bubblePopBuffer'));
  document.getElementById('close-chat').addEventListener('click', () => playSound('bubblePopBuffer')); // Added for chat close button
  document.getElementById('chat-send').addEventListener('click', () => playSound('bubblePopBuffer')); // Added for chat send button

  document.getElementById('generate').addEventListener('click', async () => {
    // Only play the explosion effect and generate codes if the raccoon is not active
    if (!isRaccoonActive) {
      playSound('explosionBuffer', 0.5); // Play ambient explosion sound with reduced volume

      const container = document.getElementById('container');
      await animateExplosion(container); // This will add 'container-shattered' and make it invisible

      // Reset container for the new slide-in animation
      container.classList.remove('container-shattered'); // Remove the shattering effect class
      container.classList.remove('container-slide-in'); // Remove any previous slide-in class
      
      // Generate codes and update the container
      const numCodes = document.getElementById('numCodes').value;
      const codeContainer = document.getElementById('code-container');
      codeContainer.innerHTML = '';
      // Hide the old copy input and button
      document.getElementById('copy-container').style.display = 'none';

      for (let i = 0; i < numCodes; i++) {
        const code = generateCode();
        const codeItemDiv = document.createElement('div');
        codeItemDiv.classList.add('code-item');

        const codeElement = document.createElement('span');
        codeElement.classList.add('code-text');
        codeElement.textContent = `${i + 1}. ${code}`;
        codeItemDiv.appendChild(codeElement);

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.classList.add('copy-code-button');
        copyButton.addEventListener('click', async () => {
          const codeToCopy = codeElement.textContent.replace(/^\d+\.\s/, '');
          try {
            await navigator.clipboard.writeText(codeToCopy);
            copyButton.textContent = 'Copied!';
            copyButton.classList.add('copied');
            setTimeout(() => {
              copyButton.textContent = 'Copy';
              copyButton.classList.remove('copied');
            }, 1000);
          } catch (err) {
            console.error('Failed to copy: ', err);
            alert('Failed to copy code to clipboard. Please copy manually.');
          }
          playSound('bubblePopBuffer'); // Play bubble pop sound on copy button click
        });
        codeItemDiv.appendChild(copyButton);

        codeContainer.appendChild(codeItemDiv);

        // Dispatch custom event for chat
        const codeGeneratedEvent = new CustomEvent('codeGenerated', { detail: { code } });
        document.dispatchEvent(codeGeneratedEvent);
      }

      // Set initial state for slide-in animation *before* making it display: block
      container.style.transform = 'translateY(100vh)'; // Start off-screen at the bottom
      container.style.opacity = '0'; // Start invisible
      container.style.display = 'block'; // Make it part of the layout, but still off-screen and invisible due to transform/opacity

      // Force a reflow to ensure the browser registers the initial transform/opacity before animation starts
      void container.offsetWidth;

      // Animate the new container sliding in
      container.classList.add('container-slide-in');
      container.addEventListener('animationend', function slideInHandler() {
        container.removeEventListener('animationend', slideInHandler);
        container.classList.remove('container-slide-in');
        container.style.transform = ''; // Clear inline transform after animation to allow CSS to manage
        container.style.opacity = ''; // Clear inline opacity after animation
      });
    }
  });

  // Raccoon dance logic - holding the image
  document.getElementById('title-image').addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent default image drag behavior
    if (isRaccoonActive) return; // Prevent re-triggering if raccoon is already active

    titleHoldTimer = setTimeout(async () => {
      isRaccoonActive = true;
      
      const titleImage = document.getElementById('title-image');
      const container = document.getElementById('container');
      const chatButton = document.getElementById('chat-button');
      const chatContainer = document.getElementById('chat-container');
      const alertDiv = document.querySelector('.alert');
      
      // New: Title shaking and distortion stages (3 stages)
      const filterStages = ['#glitch-filter-light', '#glitch-filter-medium', '#glitch-filter-heavy'];

      for (let i = 0; i < filterStages.length; i++) {
        // Stop previous long explosion sound if it's still playing before starting a new one
        if (explosionLongSoundSource) {
          explosionLongSoundSource.stop();
          explosionLongSoundSource = null;
        }
        // Play long explosion sound for each distortion stage
        explosionLongSoundSource = playSound('explosionLongBuffer', 0.8, false); 

        // Stage: 0.5s shake, become more distort
        titleImage.classList.add('shaking');
        titleImage.style.filter = `url(${filterStages[i]})`;

        await new Promise(resolve => setTimeout(resolve, 500)); // Wait 0.5 seconds for shake

        // Stage: slightly glitch for 0.25s
        titleImage.classList.remove('shaking');
        titleImage.classList.add('glitching');

        await new Promise(resolve => setTimeout(resolve, 250)); // Wait 0.25 seconds for glitch

        // Stage: 1s delay (between stages, or before proceeding after the last stage)
        titleImage.classList.remove('glitching');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      }

      // After all stages, ensure all title specific effects are removed
      titleImage.classList.remove('shaking', 'glitching');
      titleImage.style.filter = ''; // Remove any applied SVG filters
      
      // Stop the explosion sound after the title break stages
      if (explosionLongSoundSource) {
        explosionLongSoundSource.stop();
        explosionLongSoundSource = null;
      }

      // 2. Play standard explosion sound for cards, and animate card explosion
      playSound('explosionBuffer', 0.5); // Play ambient explosion sound with reduced volume
      await animateExplosion(container); // Animate the container exploding

      // 3. Hide the main container after its individual pieces animate
      if (container) container.style.display = 'none'; 

      // 4. Show the smoke overlay and activate for pointer-events
      smokeOverlay.style.display = 'block';
      smokeOverlay.classList.add('active'); 
      smokeOverlay.classList.add('shake'); // Start shaking the entire smoke overlay

      // 5. Create and animate smoke clouds from the center
      // These clouds will grow, move, and shake, and are fully opaque initially.
      createCenterSmoke(smokeOverlay);

      // *** Phase 1: Smoke actively growing, moving, shaking, obscuring the screen ***
      // Wait for the long explosion sound (which implies smoke should be active) and significant smoke growth.
      // This is the "together for few seconds" part for the smoke.
      await new Promise(resolve => setTimeout(resolve, 2500)); // Wait for 2.5 seconds for initial smoke density.

      // NEW: Hide chat button, chat container (if open), and alert div here,
      // just before smoke starts to fade, effectively when the screen is fully obscured.
      if (chatButton) chatButton.style.display = 'none';
      if (chatContainer) chatContainer.style.display = 'none'; // Ensure it's hidden if it was open
      if (alertDiv) alertDiv.style.display = 'none';

      // *** Phase 2: Raccoon appears, smoke starts fading, background glitches/shakes ***
      // Start raccoon dance (without sound initially)
      startRaccoonDance(); 

      // Start background glitches and shakes as smoke begins to disappear ("when smoke start dissappear and forever long")
      if (backgroundEffectsLayer) {
        backgroundEffectsLayer.classList.add('glitch'); 
        backgroundEffectsLayer.classList.add('shake');  
      }

      // Trigger the smoke overlay to fade out quickly (0.5 seconds as per instruction)
      smokeOverlay.classList.add('fade-out'); 
      smokeOverlay.classList.remove('shake'); // Stop shaking the smoke overlay as it fades

      // Play silly music 0.25s after smoke starts fading (i.e., halfway through its 0.5s fade)
      setTimeout(() => {
          if (sillySoundLoopSource) {
              sillySoundLoopSource.stop(); 
          }
          sillySoundLoopSource = playSound('sillySoundBuffer', 1, true);
      }, 250); // Play after 0.25 seconds of the 0.5s fade

      // Wait for the smoke overlay to fully fade out (0.5 seconds)
      await new Promise(resolve => setTimeout(resolve, 500)); 

      // *** Phase 3: Smoke gone, sound plays, raccoon dances with sound, glitch/shake continue ***
      // Now remove all smoke clouds and hide the overlay fully (cleanup)
      Array.from(smokeOverlay.children).forEach(child => {
        if (child.classList.contains('center-smoke-cloud')) {
          child.remove();
        }
      });
      smokeOverlay.style.display = 'none';
      smokeOverlay.classList.remove('active'); 
      smokeOverlay.classList.remove('fade-out'); 
      
    }, HOLD_DURATION);
  });

  document.getElementById('title-image').addEventListener('mouseup', () => {
    clearTimeout(titleHoldTimer);
    titleHoldTimer = null;
    // Stop the long explosion sound if it was playing and the hold was released early
    if (explosionLongSoundSource) {
      explosionLongSoundSource.stop();
      explosionLongSoundSource = null;
    }
    // If the full raccoon sequence wasn't triggered (i.e., isRaccoonActive is false), stop everything.
    // If isRaccoonActive is true, it means the full sequence started and shouldn't be stopped by a mouseup.
    if (!isRaccoonActive && (sillySoundLoopSource || (backgroundEffectsLayer && backgroundEffectsLayer.classList.contains('glitch')) || (smokeOverlay && smokeOverlay.classList.contains('shake')))) { 
      stopRaccoonDance(); // This also stops silly sound, glitch, and shake
    }
  });

  document.getElementById('title-image').addEventListener('mouseleave', () => {
    clearTimeout(titleHoldTimer);
    titleHoldTimer = null;
    // Stop the long explosion sound if it was playing and the hold was released early
    if (explosionLongSoundSource) {
      explosionLongSoundSource.stop();
      explosionLongSoundSource = null;
    }
    // If the full raccoon sequence wasn't triggered (i.e., isRaccoonActive is false), stop everything.
    // If isRaccoonActive is true, it means the full sequence started and shouldn't be stopped by a mouseleave.
    if (!isRaccoonActive && (sillySoundLoopSource || (backgroundEffectsLayer && backgroundEffectsLayer.classList.contains('glitch')) || (smokeOverlay && smokeOverlay.classList.contains('shake')))) { 
      stopRaccoonDance(); // This also stops silly sound, glitch, and shake
    }
  });
});