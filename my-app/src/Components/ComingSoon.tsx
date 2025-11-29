import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceID || !templateID) {
      console.error('EmailJS service/template ID is missing.');
      setError('Email configuration is incomplete.');
      return;
    }

    // send an email via EmailJS that matches the template fields your template uses:
    // {{subject}}, {{user_email}}, and {{message}}
    const subject = "Signup: WE'RE PROBABLY GONNA DIE IN THESE WOODS";
    const message = `User ${email} submitted the coming-soon signup.\nInterested in WE'RE PROBABLY GONNA DIE IN THESE WOODS`;

    emailjs
      .send(serviceID, templateID, {
        subject,
        user_email: email,
        message,
      })
      .then(
        () => {
          setSubmitted(true);
        },
        (err) => {
          console.error('EmailJS error', err);
          setError('Failed to register your email. Please try again later.');
        }
      );
  }

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key is missing.');
      return;
    }
    emailjs.init(publicKey);
  }, []);

  return (
    <div className="w-full min-h-screen text-pink-400 px-6 py-12" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <div className="max-w-3xl mx-auto bg-black/20 rounded-lg p-8 border-2 border-yellow-400">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">WE'RE PROBABLY GONNA DIE IN THESE WOODS <p></p>...<p className="mb-3"></p>is coming soon</h1>

        <p className="text-yellow-250 text-lg sm:text-xl leading-relaxed mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>
          The good news? exciting developments are underway. The bummer? The game is not ready for public release.<br></br><br></br>But don't worry, it'll be here in a jiffy! <br></br><br></br>If you’d like to be notified when the game becomes available, please register your email below and we’ll send you an update. Pinky promise, we won't abuse this!
        </p>

        {submitted ? (
          <div className="rounded-md bg-emerald-900/80 p-4 text-emerald-100">
            <p className="font-semibold">Thanks, you’re on the list.</p>
            <p className="mt-2 text-sm text-yellow-300">We’ll email you when the game is ready.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-yellow-300 block mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>Email address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black/10 border border-yellow-400 text-yellow-50 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
                aria-label="Email address for game notifications"
              />
            </label>

            {error && <p className="text-sm text-pink-300">{error}</p>}

            <div className="flex items-center space-x-3">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Notify me
              </button>

              <button
                type="button"
                className="text-yellow-300 underline"
                onClick={() => { setEmail(''); setError(null); }}
              >
                Clear
              </button>
            </div>
          </form>
        )}
        <aside aria-label="Alternate access to site" className="mt-8">
          <div className="max-w-2xl mx-auto bg-black/10 border border-yellow-400 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2" style={{ fontFamily: "'Dm Serif Display', serif" }}>
              Prefer to explore the site now?
            </h2>

            <p className="text-yellow-250 mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              If you would like to view Gabe Godoi’s portfolio, other games, and design resources immediately, use the button below to open the full site homepage.
            </p>

            <div className="flex justify-center">
              <Link
                to="/home"
                role="button"
                aria-label="Go to full site homepage"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-2 rounded-lg shadow transition-colors"
              >
                View Gabe's Site (Home)
              </Link>
            </div>

            {/* Machine-readable fallback for parsers */}
            <div className="sr-only" aria-hidden="false">/home</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
