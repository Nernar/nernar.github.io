export let audioContext;
export let fingerClickBuffer = null;
export let explosionBuffer = null;
export let heyBuddyBuffer = null;
export let bubblePopBuffer = null; // New buffer for bubble pop sound
export let sillySoundBuffer = null; // New buffer for silly sound
export let explosionLongBuffer = null; // New buffer for the long explosion sound

export async function loadSound(url) {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    console.log(`Sound loaded: ${url}`);
    return audioBuffer;
  } catch (error) {
    console.error(`Error loading sound ${url}:`, error);
    return null;
  }
}

export function playSound(bufferName, volume = 1, loop = false) {
  const buffer = window[bufferName]; // Access buffer from global scope
  if (!buffer) {
    console.error(`Audio buffer not found for ${bufferName}`);
    return null;
  }
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  const source = audioContext.createBufferSource();
  source.buffer = buffer;

  const gainNode = audioContext.createGain();
  gainNode.gain.value = volume;
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  source.loop = loop; // Set loop property
  source.start();
  console.log(`Playing sound: ${bufferName}, loop: ${loop}`);
  return source; // Return the source node to allow stopping it later
}

// Load sounds initially
(async () => {
  fingerClickBuffer = await loadSound('finger_click.mp3');
  explosionBuffer = await loadSound('explosion.mp3');
  heyBuddyBuffer = await loadSound('hey_buddy.mp3');
  bubblePopBuffer = await loadSound('bubble_pop.mp3'); // Load new bubble pop sound
  sillySoundBuffer = await loadSound('silly_sound.mp3'); // Load silly sound
  explosionLongBuffer = await loadSound('eWxplosion_long.mp3'); // Load new long explosion sound

  window.fingerClickBuffer = fingerClickBuffer; // Make globally accessible for direct use in HTML
  window.explosionBuffer = explosionBuffer;
  window.heyBuddyBuffer = heyBuddyBuffer;
  window.bubblePopBuffer = bubblePopBuffer; // Make globally accessible
  window.sillySoundBuffer = sillySoundBuffer; // Make globally accessible
  window.explosionLongBuffer = explosionLongBuffer; // Make globally accessible
})();