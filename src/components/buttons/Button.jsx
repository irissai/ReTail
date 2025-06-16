import { useState } from 'react';  
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const buttons = [
  {
    id: 1,
    code: `
<button className="px-10 py-4 bg-gradient-to-r from-purple-600
to-indigo-600 text-white font-medium rounded-4xl shadow-md
hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105
transition duration-300 ease-in-out cursor-pointer select-none
">Click me</button>
`
  },
  {
    id: 2,
    code: `
<button className="px-10 py-4 bg-0 bg-opacity-20 transition duration-150
border backdrop-blur-md text-white border-purple-800 rounded-4xl 
font-medium hover:bg-[#270944] transform hover:rotate-1 hover:scale-105
cursor-pointer">Click me</button>
`
  },
  {
    id: 3,
    code: `
<button className="px-10 py-4 bg-blue-600 text-white font-medium 
rounded-4xl shadow-md hover:bg-blue-700 active:shadow-inner transition 
duration-150 transform hover:translate-y-1 cursor-pointer">Click me</button>
`
  },
  {
    id: 4,
    code: `
<button className="px-10 py-4 bg-gradient-to-br from-pink-500 
to-rose-600 text-white font-semibold rounded-full shadow-lg 
hover:from-pink-600 hover:to-rose-700 transform hover:scale-110 
transition duration-200">Click me</button>
`
  },
  {
    id: 5,
    code: `
<button className="px-10 py-4 bg-black text-white border 
border-gray-700 rounded-xl hover:bg-gray-900 font-semibold shadow-md
transform hover:-translate-y-0.5 transition">Click me</button>
`
  },
  {
    id: 6,
    code: `
<button className="px-10 py-4 bg-gradient-to-r from-yellow-400 
via-yellow-500 to-yellow-600 text-black font-bold rounded-2xl 
shadow hover:brightness-110 transform hover:scale-105">Click me</button>
`
  },
  {
    id: 7,
    code: `
<button className="px-10 py-4 bg-white text-gray-800 border 
border-gray-300 rounded-full shadow hover:shadow-lg hover:bg-gray-50 
font-medium transform hover:rotate-2 transition">Click me</button>
`
  },
  {
    id: 8,
    code: `
<button className="px-10 py-4 bg-gradient-to-r from-cyan-500 
to-blue-500 text-white font-semibold rounded-lg shadow-lg 
hover:from-cyan-600 hover:to-blue-600 transform hover:scale-110
">Click me</button>
`
  },
  {
    id: 9,
    code: `
<button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl
font-medium shadow hover:bg-emerald-700 transform hover:translate-x-1 
transition">Click me</button>
`
  },
  {
    id: 10,
    code: `
<button className="px-10 py-4 bg-gradient-to-br from-gray-900 
via-gray-800 to-gray-700 text-white rounded-lg font-semibold 
shadow-lg hover:shadow-xl transform hover:scale-105">Click me</button>
`
  },
  {
    id: 11,
    code: `
<button className="px-10 py-4 bg-white bg-opacity-10 text-white
border border-white border-opacity-30 backdrop-blur-lg rounded-xl
shadow hover:bg-opacity-20 transform hover:skew-x-1 transition
">Click me</button>
`
  },
  {
    id: 12,
    code: `
<button className="px-10 py-4 bg-orange-500 text-white font-semibold
rounded-3xl shadow hover:bg-orange-600 transform hover:scale-110
">Click me</button>
`
  },
  {
    id: 13,
    code: `
<button className="px-10 py-4 bg-gradient-to-tr from-green-400 
to-lime-500 text-black font-bold rounded-2xl shadow-lg hover:scale-105
transform hover:rotate-1 transition">Click me</button>
`
  },
  {
    id: 14,
    code: `
<button className="px-10 py-4 bg-gradient-to-l from-indigo-700
to-violet-700 text-white rounded-full font-semibold shadow-md
hover:from-indigo-800 hover:to-violet-800 transform hover:translate-y-1
">Click me</button>
`
  },
  {
    id: 15,
    code: `
<button className="px-10 py-4 bg-pink-600 text-white rounded-xl 
shadow hover:bg-pink-700 font-medium transform hover:scale-105
">Click me</button>
`
  },
  {
    id: 16,
    code: `
<button className="px-10 py-4 bg-gradient-to-b from-slate-600 
to-slate-800 text-white rounded-2xl font-semibold shadow-md 
hover:brightness-110 transform hover:rotate-1 hover:scale-105
">Click me</button>
`
  },
];




function ButtonPreview({ name, code }) {
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
  <div
  className="flex flex-col mb-8  border border-[#9881ff58]  rounded-xl bg-[#3c3c3c2c] text-white overflow-hidden shadow-lg"
  style={{ minHeight: '220px' }}
>

      {/* ฝั่งซ้าย */}
    <div className="flex items-center justify-center p-5 rounded-xl  ">
        <div
          className="select-none"
          dangerouslySetInnerHTML={{ __html: code.replace(/className=/g, 'class=') }}
        />
      </div>

      {/* ฝั่งขวา */} 
    <div className="p-5 flex items-center justify-center">
  <div className="relative w-full max-h-[280px] overflow-auto">
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
        backgroundColor: '#282c34', // ให้ contrast ชัดขึ้น
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
</div>

    </div>
  );
}



export default function ButtonGallery() {
  return (
    <div className="max-w-6xl mx-auto p-5  min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-[#9881ff] text-center">Button Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {buttons.map(btn => (
          <ButtonPreview key={btn.id} name={btn.name} code={btn.code} />
        ))}
      </div>
    </div>
  );
}
