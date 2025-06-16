import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula  } from 'react-syntax-highlighter/dist/esm/styles/prism';

const alerts = [
    {
  id: 1,
  code: `
<div class="mb-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline">This alert box could indicate a successful or positive action.</span>
</div>

<div class="mb-2 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Info!</strong>
  <span class="block sm:inline">This alert box could indicate a neutral informative change or action.</span>
</div>

<div class="mb-2 bg-amber-100 border border-amber-400 text-amber-700 px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline">This alert box could indicate a warning that might need attention.</span>
</div>

<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Danger!</strong>
  <span class="block sm:inline">This alert box could indicate a dangerous or potentially negative action.</span>
</div>
`
},{
  id: 2,
  code: `
<div class="mb-2 bg-green-600/10 border border-green-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline">This alert box could indicate a successful or positive action.</span>
</div>

<div class="mb-2 bg-blue-600/10 border border-blue-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Info!</strong>
  <span class="block sm:inline">This alert box could indicate a neutral informative change or action.</span>
</div>

<div class="mb-2 bg-amber-600/10 border border-amber-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline">This alert box could indicate a warning that might need attention.</span>
</div>

<div class="bg-red-600/10 border border-red-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Danger!</strong>
  <span class="block sm:inline">This alert box could indicate a dangerous or potentially negative action.</span>
</div>
`
},
{
  id: 2,
  code: `
<div class="mb-2 bg-green-600 border border-green-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline">This alert box could indicate a successful or positive action.</span>
</div>

<div class="mb-2 bg-blue-600 border border-blue-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Info!</strong>
  <span class="block sm:inline">This alert box could indicate a neutral informative change or action.</span>
</div>

<div class="mb-2 bg-amber-600 border border-amber-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline">This alert box could indicate a warning that might need attention.</span>
</div>

<div class="bg-red-600 border border-red-700 text-white px-4 py-3 rounded relative text-sm" role="alert">
  <strong class="font-bold">Danger!</strong>
  <span class="block sm:inline">This alert box could indicate a dangerous or potentially negative action.</span>
</div>
`
},


];

function AlertPreview({ code }) {
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
    <div className="flex flex-col mb-8 p-10 text-white  border border-[#9881ff58]  rounded-xl bg-[#3c3c3c2c] overflow-hidden shadow-lg" style={{ minHeight: '220px' }}>
      
      <div className="flex items-center justify-center p-5 ">
        <div className="select-none w-full" dangerouslySetInnerHTML={{ __html: code }} />
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
            language="html"
            style={dracula }
            customStyle={{
              borderRadius: '8px',
              paddingTop: '1rem',
              fontSize: '0.75rem',
              backgroundColor: '#1b1e23',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default function AlertGallery() {
  return (
    <div className="max-w-6xl mx-auto p-5  min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-[#9881ff] text-center">Alert Gallery</h1>

      <div className="grid grid-cols-1 gap-6">
         {alerts.map(alert => (
        <AlertPreview code={alert.code} />
        ))}
      </div>
    </div>
  );
}
