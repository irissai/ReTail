import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const forms = [ 
  {
    id: 1,
    code: `
<form class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
  <h2 class="text-xl font-semibold mb-4">Login Form</h2>
  <input type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 border border-gray-300 rounded" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 border border-gray-300 rounded" />
  <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
</form>
`
  },
  {
    id: 2,
    code: `
<form class="bg-white bg-opacity-20 backdrop-blur-md p-6  rounded-xl shadow-lg w-full max-w-md text-[#000]">
  <h2 class="text-xl font-bold mb-4">Glass Form</h2>
  <input type="text" placeholder="Your Name" class="w-full mb-3 px-4 py-2 rounded  border border-gray-700  bg-white bg-opacity-10 placeholder-white" />
  <input type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 rounded  border border-gray-700  bg-white bg-opacity-10 placeholder-white" />
  <button class="w-full bg-white bg-opacity-20 hover:bg-opacity-30 py-2 rounded">Submit</button>
</form>
`
  },
  {
    id: 3,
    code: `
<form class="bg-gray-900 text-white p-6 rounded-lg border border-gray-700 w-full max-w-md">
  <h2 class="text-lg font-semibold mb-4">Dark Mode Contact</h2>
  <input type="text" placeholder="Subject" class="w-full mb-3 px-4 py-2 bg-gray-800 border border-gray-700 rounded" />
  <textarea placeholder="Message" class="w-full mb-3 px-4 py-2 bg-gray-800 border border-gray-700 rounded h-24"></textarea>
  <button class="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded">Send</button>
</form>
`
  },
  {
    id: 4,
    code: `
<form class="bg-gradient-to-r from-yellow-200 via-white to-yellow-100 p-6 rounded-xl shadow-lg w-full max-w-md text-gray-800">
  <h2 class="text-xl font-bold mb-4">Luxury Gold</h2>
  <input type="text" placeholder="Username" class="w-full mb-3 px-4 py-2 border border-yellow-300 rounded bg-white bg-opacity-70" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 border border-yellow-300 rounded bg-white bg-opacity-70" />
  <button class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded shadow">Login</button>
</form>
`
  },
  {
    id: 5,
    code: `
<form class="bg-slate-800 text-white p-6 rounded-xl shadow-md w-full max-w-md">
  <h2 class="text-xl font-bold mb-4">Modern Slate</h2>
  <input type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 rounded border border-slate-600 bg-slate-700" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 rounded border border-slate-600 bg-slate-700" />
  <button class="w-full bg-slate-600 hover:bg-slate-500 py-2 rounded">Sign In</button>
</form>
`
  },
  {
    id: 6,
    code: `
<form class="bg-gradient-to-br from-pink-400 to-red-500 p-6 text-white rounded-xl w-full max-w-md shadow-lg">
  <h2 class="text-xl font-bold mb-4">Vibrant Login</h2>
  <input type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded placeholder-white" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded placeholder-white" />
  <button class="w-full bg-white text-pink-600 font-bold py-2 rounded hover:bg-gray-100">Log In</button>
</form>
`
  },
  {
    id: 7,
    code: `
<form class="bg-white p-6 rounded-xl shadow-md w-full max-w-md border border-gray-200">
  <h2 class="text-xl font-semibold mb-4 text-gray-700">Minimal Clean</h2>
  <input type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 border border-gray-300 rounded" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 border border-gray-300 rounded" />
  <button class="w-full bg-black text-white py-2 rounded hover:bg-gray-900">Login</button>
</form>
`
  },
  {
    id: 8,
    code: `
<form class="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-md w-full max-w-md transition-colors">
  <h2 class="text-xl font-bold mb-4">Adaptive Theme</h2>
  <input type="text" placeholder="Username" class="w-full mb-3 px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
  <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Login</button>
</form>
`
  },
  {
    id: 9,
    code: `
<form class="bg-gradient-to-tr from-teal-400 to-cyan-500 p-6 rounded-xl shadow-xl max-w-md w-full text-white">
  <h2 class="text-xl font-bold mb-4">Cool Teal Login</h2>
  <input type="text" placeholder="Username" class="w-full mb-3 px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded placeholder-white" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded placeholder-white" />
  <button class="w-full bg-white text-teal-600 py-2 rounded hover:bg-gray-100">Sign In</button>
</form>
`
  },
  {
    id: 10,
    code: `
<form class="bg-[#fef9f8] text-[#4b2e2e] p-6 rounded-xl shadow-inner w-full max-w-md border border-[#e0cfcf]">
  <h2 class="text-xl font-bold mb-4">Soft Rose</h2>
  <input type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 border border-[#d3bcbc] rounded bg-[#fffafa]" />
  <input type="password" placeholder="Password" class="w-full mb-3 px-4 py-2 border border-[#d3bcbc] rounded bg-[#fffafa]" />
  <button class="w-full bg-[#d49a9a] hover:bg-[#c88888] text-white py-2 rounded">Enter</button>
</form>
`
  }
];
function FormPreview({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="flex flex-col mb-8 border border-[#9881ff58] rounded-xl bg-[#3c3c3c2c]  text-white overflow-hidden shadow-lg min-h-[260px]">
      <div className="lg:basis-[45%] flex items-center justify-center p-5 rounded-xl">
        <div
          className="select-none"
          dangerouslySetInnerHTML={{ __html: code.replace(/className=/g, 'class=') }}
        />
      </div>

      <div className="lg:basis-[55%] p-5 flex items-center justify-center">
        <div className="relative w-full max-h-[300px] overflow-auto">
          <button
            onClick={handleCopy}
            className={`absolute right-0 top-[0.4rem] px-2 py-1 text-[0.7rem] font-medium rounded ${
              copied ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-600'
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
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default function FormGallery() {
  return (
    <div className="max-w-6xl mx-auto p-5 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-[#9881ff] text-center">Form Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {forms.map((form) => (
          <FormPreview key={form.id} code={form.code} />
        ))}
      </div>
    </div>
  );
}
