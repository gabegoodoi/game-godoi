import RotStar from '../assets/RotStar.gif';

import bucket from '../assets/bucket.gif';
import fireSound from '../assets/fireSound.m4a';
import hot from '../assets/hot.m4a';

import splash from '../assets/splash.mp3';
import sizzle from '../assets/sizzle.mp3';
import relief from '../assets/relief.m4a';

import { useEffect, useState } from 'react';

function SiteInfo() {
  const [showStarInfo] = useState(false);

  const [showCursor, setShowCursor] = useState(false);
  const [showResetImage, setShowResetImage] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(null);

useEffect(() => {
    if (!showCursor) return;
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.position = 'absolute';
    cursor.style.pointerEvents = 'none';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };
    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, [showCursor]);

  const handleRotStarClick = () => {
    if (audioInstance) return;
    setShowCursor(true);
    setShowResetImage(true);
    setHideImage(false);
    const audio = new Audio(fireSound);
    audio.volume = 0.3;
    audio.loop = true;
    audio.play();
    setAudioInstance(audio);

    const hotAudio = new Audio(hot);
    hotAudio.volume = 0.3;
    hotAudio.playbackRate = 2;
    hotAudio.play();

    document.body.style.cursor = 'grab';
  };

  const handleResetCursor = () => {
  // Play splash sound
  const audioSplash = new Audio(splash);
  audioSplash.volume = 0.3;
  audioSplash.play();

  // Play sizzle sound (fast)
  const audioSizzle = new Audio(sizzle);
  audioSizzle.volume = 0.1;
  audioSizzle.playbackRate = 12;
  audioSizzle.play();

  // Play relief sound
  const reliefAudio = new Audio(relief);
  reliefAudio.volume = 0.3;
  reliefAudio.playbackRate = 1;
  reliefAudio.play();

  setShowCursor(false);
  setHideImage(true);
  if (audioInstance) {
    audioInstance.pause();
    audioInstance.currentTime = 0;
    setAudioInstance(null);
  }
  setTimeout(() => {
    setShowResetImage(false);
  }, 500);
  document.body.style.cursor = 'default';
};


  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <div className="text-left">
        <h2 className="text-5xl font-bold pt-4 text-yellow-300 flex items-center">
          <img
            src={RotStar}
            alt="Rotating Star"
            className="w-12 h-12 mr-4 rotstar cursor-pointer"
            onClick={handleRotStarClick}
            title="Click for more about the tech stack!"
          />
          About This Website
        </h2>
        <div className="pt-4 text-2xl" style={{ fontFamily: "'League Spartan', sans-serif" }}>
          <p>
            <span className="text-yellow-400 font-bold">Game Godoi</span> is a custom-built portfolio and resource hub for board game design, made to showcase projects, share resources, and connect with other designers. Every interactive detail—from the animated bullets to the audio triggers and custom cursor—was handcrafted for a playful, memorable experience.
          </p>
          <ul className="list-disc pl-8 mt-6 space-y-2">
            <li>
              <span className="font-bold text-yellow-300">Custom Themes:</span> Instantly switch between Light, Dark, and Party modes for a dynamic, playful look.
            </li>
            <li>
              <span className="font-bold text-yellow-300">Fully Responsive:</span> Designed to look and work great on any device, from mobile to desktop.
            </li>
            <li>
              <span className="font-bold text-yellow-300">Interactive UI:</span> Handcrafted animated bullets, audio triggers, and custom cursor effects for an engaging user experience.
            </li>
            <li>
              <span className="font-bold text-yellow-300">Contact Form:</span> Secure, backend-free messaging via EmailJS.
            </li>
            <li>
              <span className="font-bold text-yellow-300">Modern Stack:</span> Built with React 19, TypeScript, Vite, and Tailwind CSS.
            </li>
            <li>
              <span className="font-bold text-yellow-300">Cloudflare Deployment:</span> Fast, global hosting with Cloudflare Pages and domain managed via Namecheap.
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-yellow-300 mb-2">How It Works</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                <span className="font-bold">Frontend:</span> Built with React 19 and TypeScript for a modern, maintainable codebase.
              </li>
              <li>
                <span className="font-bold">Styling:</span> Tailwind CSS for rapid, utility-first styling, plus custom CSS for unique effects.
              </li>
              <li>
                <span className="font-bold">Routing:</span> Client-side navigation with React Router.
              </li>
              <li>
                <span className="font-bold">Contact:</span> EmailJS integration allows users to send messages directly from the site—no backend required.
              </li>
              <li>
                <span className="font-bold">Deployment:</span> The site is built with Vite and deployed globally via Cloudflare Pages. The domain is managed through Namecheap.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-yellow-300 mb-2">Usage Tips</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>Switch between Light, Dark, and Party modes using the theme toggle in the navigation bar.</li>
              <li>Enjoy interactive feedback with animated bullets, sound effects, and a custom cursor as you explore the site.</li>
              <li>On the About Me Page: Click the stars or my face for some fun gags!</li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-yellow-300 mb-2">Contact Form Setup</h3>
            <p>
              The contact form uses <span className="font-bold">EmailJS</span> to send messages directly from the frontend. To configure, set the following environment variables in your <code>.env</code> file (and in Cloudflare Pages settings for production):
            </p>
            <ul className="list-disc pl-8 mt-2">
              <li><code>VITE_EMAILJS_PUBLIC_KEY</code></li>
              <li><code>VITE_EMAILJS_SERVICE_ID</code></li>
              <li><code>VITE_EMAILJS_TEMPLATE_ID</code></li>
            </ul>
          </div>
          {showStarInfo && (
            <div className="mt-8 p-4 bg-yellow-50 text-yellow-900 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Tech Stack & Tools</h4>
              <ul className="list-disc pl-8">
                <li>React 19 + TypeScript</li>
                <li>Vite for lightning-fast builds and hot reloads</li>
                <li>Tailwind CSS for styling</li>
                <li>Cloudflare Pages for deployment</li>
                <li>Namecheap for domain management</li>
                <li>EmailJS for contact form (no backend required)</li>
                <li>Lucide for icons</li>
              </ul>
            </div>
          )}
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-yellow-300 mb-2">Author</h3>
            <p>
              All UI animations, audio triggers, and cursor effects were personally designed and coded by Gabe Godoi.
            </p>
          </div>
        </div>
 {showResetImage && (
          <img
            src={bucket}
            alt="Reset Cursor"
            className={`fixed bottom-4 right-4 w-16 h-16 cursor-pointer transition-transform duration-1000 ${
              hideImage ? 'translate-x-full' : ''
            }`}
            onMouseEnter={handleResetCursor}
          />
        )}

      </div>
    </div>
  );
}

export default SiteInfo;