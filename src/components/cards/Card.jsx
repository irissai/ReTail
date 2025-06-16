import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const cards = [
  {
    id: 1,
    code: `
<div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
  <img class="w-full h-40 object-cover" src="" alt="Card image" />
  <div class="p-4">
    <h2 class="text-lg font-semibold mb-2">Card Title</h2>
    <p class="text-gray-600 text-sm">This is a sample card description.</p>
    <button class="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white text-sm">Learn More</button>
  </div>
</div>
`
  },
  {
    id: 2,
    code: `
<div class="max-w-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg overflow-hidden">
  <div class="p-5">
    <h2 class="text-md font-bold mb-2">Gradient Card</h2>
    <p class="text-sm">Stylish card with gradient background and soft rounded corners.</p>
    <button class="mt-4 px-4 py-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30 text-sm">Explore</button>
  </div>
</div>
`
  },
  {
    id: 3,
    code: `
<div class="max-w-sm bg-[#1a1a1a] text-white rounded-xl border border-gray-700 shadow-md overflow-hidden">
  <div class="p-5">
    <h3 class="text-md font-semibold">Dark Mode Card</h3>
    <p class="text-sm text-gray-300">Perfect for night-themed layouts with contrast and minimal style.</p>
    <button class="mt-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">Details</button>
  </div>
</div>
`
  },
  {
    id: 4,
    code: `
<div class="max-w-sm bg-gradient-to-tr from-amber-400 to-yellow-300 text-gray-900 rounded-xl shadow-lg p-4">
  <h2 class="text-xl font-bold">Luxury Gold</h2>
  <p class="text-sm mt-2">A bright, elegant card for premium content or promotions.</p>
  <button class="mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded">See More</button>
</div>
`
  },
  {
    id: 5,
    code: `
<div class="max-w-sm bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition overflow-hidden">
  <img class="w-full h-32 object-cover" src="https://source.unsplash.com/random/401x201" alt="Preview" />
  <div class="p-4">
    <h3 class="text-lg font-semibold">Minimalist</h3>
    <p class="text-sm text-gray-500">Clean design with subtle shadow effects and neutral colors.</p>
    <button class="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-900">Read</button>
  </div>
</div>
`
  },
  {
    id: 6,
    code: `
<div class="max-w-sm bg-gradient-to-br from-pink-500 to-red-400 text-white rounded-xl shadow-xl p-5">
  <h2 class="text-xl font-bold">Vibrant Promo</h2>
  <p class="text-sm mt-1">Great for announcements and exciting offers with high energy tones.</p>
  <button class="mt-4 px-4 py-2 bg-white text-pink-600 font-semibold rounded hover:bg-gray-100">Join Now</button>
</div>
`
  },
  {
    id: 7,
    code: `
<div class="max-w-sm bg-slate-800 text-white rounded-lg shadow-lg overflow-hidden">
  <div class="p-5">
    <h3 class="text-lg font-semibold">Modern Slate</h3>
    <p class="text-sm text-gray-300">A contemporary feel with sleek colors and minimalist layout.</p>
    <button class="mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">View</button>
  </div>
</div>
`
  },
  {
    id: 8,
    code: `
<div class="max-w-sm bg-gradient-to-l from-cyan-500 to-blue-500 text-white rounded-xl p-5 shadow-md">
  <h2 class="text-lg font-bold">Cool Tone Card</h2>
  <p class="text-sm mt-1">Cool gradients for tech or digital product highlights.</p>
  <button class="mt-4 px-4 py-2 bg-white text-blue-700 rounded hover:bg-gray-100">Launch</button>
</div>
`
  },
  {
    id: 9,
    code: `
<div class="max-w-sm bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
  <div class="p-4">
    <h2 class="text-lg font-semibold">Classic Card</h2>
    <p class="text-sm text-gray-600">A timeless design for general use and wide appeal.</p>
    <button class="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded">Details</button>
  </div>
</div>
`
  },
  {
    id: 10,
    code: `
<div class="max-w-sm bg-white backdrop-blur-md bg-opacity-10 text-white rounded-xl border border-white border-opacity-30 p-4 shadow-xl">
  <h2 class="text-lg font-semibold">Glassmorphism</h2>
  <p class="text-sm text-gray-100 mt-2">Trendy translucent card effect for modern UIs.</p>
  <button class="mt-4 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded">Try</button>
</div>
`
  },
  {
    id: 11,
    code: `
<div class="max-w-sm bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-xl shadow-lg p-5">
  <h2 class="text-xl font-bold">Tropical Green</h2>
  <p class="text-sm mt-2">A refreshing design with green tones for nature or wellness content.</p>
  <button class="mt-4 px-4 py-2 bg-white text-emerald-700 rounded hover:bg-gray-100">Explore</button>
</div>
`
  },
  {
    id: 12,
    code: `
<div class="max-w-sm bg-black text-white rounded-xl border border-gray-800 shadow-lg p-5">
  <h2 class="text-xl font-bold">Elegant Black</h2>
  <p class="text-sm mt-1">Sleek and modern black design for high-end products or fashion.</p>
  <button class="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">Discover</button>
</div>
`
  },
  {
    id: 13,
    code: `
<div class="max-w-sm bg-gradient-to-tr from-sky-400 to-indigo-500 text-white rounded-xl shadow-xl p-5">
  <h2 class="text-xl font-bold">Sky Blend</h2>
  <p class="text-sm mt-2">Airy and uplifting card style for creative and travel content.</p>
  <button class="mt-4 px-4 py-2 bg-white text-sky-700 rounded hover:bg-gray-100">Fly</button>
</div>
`
  },
  {
    id: 14,
    code: `
<div class="max-w-sm bg-white text-gray-800 rounded-xl shadow-md border border-gray-100 p-5">
  <h2 class="text-xl font-bold">Neutral Balance</h2>
  <p class="text-sm mt-1">Balanced tone for blogs, business, or any general use.</p>
  <button class="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded">More</button>
</div>
`
  }
];

function CardPreview({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="flex flex-col mb-8 border border-[#9881ff58]  rounded-xl bg-[#3c3c3c2c] text-white overflow-hidden shadow-lg">
      <div className="flex items-center justify-center p-5 rounded-xl">
        <div
          className="select-none"
          dangerouslySetInnerHTML={{ __html: code.replace(/className=/g, 'class=') }}
        />
      </div>

      <div className="p-5 flex items-center justify-center">
        <div className="relative w-full max-h-[500px] overflow-auto">
          <button
            onClick={handleCopy}
            className={`absolute right-0 top-[0.4rem] px-2 py-1 text-[0.7rem] font-medium rounded ${
              copied ? 'bg-blue-500' : 'bg-[#3f4248] hover:bg-[#3f4248]'
            } transition-colors shadow-sm z-10`}
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>

          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            customStyle={{
              borderRadius: '8px',
              paddingTop: '1rem',
              fontSize: '0.75rem',
              backgroundColor: '#282c34',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default function CardGallery() {
  return (
    <div className="max-w-6xl mx-auto p-5 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-[#9881ff] text-center">Card Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <CardPreview key={card.id} code={card.code} />
        ))}
      </div>
    </div>
  );
}
