import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const boxes = [
  {
    id: 1,
    // name: 'Shadow Small',
    code: `
    <div class="w-38 h-34 bg-white
    shadow-[0_2px_6px_#595959] rounded-lg"></div>
    `
  },
  {
    id: 2,
    // name: 'Shadow Medium',
    code: `
    <div class="w-38 h-34 bg-white
    shadow-[5px_5px_0px_0px_#757575] rounded-lg
    "></div>
    `
  }, 
  {
    id: 3,
    // name: 'Shadow Large',
    code: `
    <div class="w-38 h-34 bg-white
    shadow-[-7px_7px_0_1px_#bcbcbc] rounded-lg
    "></div>
    `
  },
  {
    id: 4,
    // name: 'Shadow XL',
    code: `
    <div class="w-38 h-34 bg-white
    shadow-[0_3px_5px_0_#636363,0px_0px_0px_1px_#636363] 
    rounded-lg"></div>
    `
  },
  {
    id: 5,
    // name: 'Shadow 2XL',
    code: `
    <div class="w-38 h-34 bg-white
    shadow-[5px_5px_8px_0px_inset_#7b7b7b,-5px_-5px_8px_1px_inset_#e3e3e3]
    rounded-lg"></div>
    `
  }, 
  {
    id: 6,
    // name:  
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[2px_2px_4px_#424242]
    rounded-lg"></div>
    `
  }, 
  {
    id: 7,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[0_20px_40px_-20px_#4c4c4c,0_30px_0_-30px_#4c4c4c,0_-2px_8px_0_inset_#4c4c4c]
    rounded-lg"></div>
    `
  }, 
  {
    id: 8,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[0_0_0_2px_#696969f5]
    rounded-lg"></div>
    `
  }, 
  {
    id: 9,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[0px_-50px_60px_-30px_inset_#5d4e74]
    rounded-lg"></div>
    `
  }, 
  {
    id: 10,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[0_0_45px_3px_#6c6773]
    rounded-lg"></div>
    `
  }, 
  {
    id: 11,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[4px_2px_16px_0_#616161,-4px_-2px_16px_0_#616161f5]
    rounded-lg"></div>
    `
  }  , 
  {
    id: 12,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[0_2px_4px_#3a3a3a,0_7px_13px_-3px_#3a3a3af4,0_-3px_0_inset_#616161]
    rounded-lg"></div> 
    ` 
  },
    {
    id: 13,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[0_0_10px_-3px_#3a3a3af4,0_-5px_8px_inset_#616161]
    rounded-lg"></div> 
    ` 
  },
    {
    id: 14,
    // name: 'Shadow Inner', 
    code: ` 
    <div class="w-38 h-34 bg-white
    shadow-[0_0_100px_0_#c1c1c1,0_2px_10px_#242424,0_0_4px_0_#242424]
    rounded-lg"></div> 
    ` 
  } 
]; 
function BoxPreview({ name, code }) {
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
    <div className="flex flex-col mb-8 border border-[#5f5f5f3a] rounded-xl bg-[#9881ff] text-white overflow-hidden shadow-lg" style={{ minHeight: '220px' }}>
      <div className="flex items-center justify-center px-8 pt-8 pb-4 rounded-xl">
        <div className="select-none" dangerouslySetInnerHTML={{ __html: code }} />
      </div>

      <div className=" px-8 pb-8 pt-4 flex items-center justify-center">
        <div className="relative w-full max-h-[280px] overflow-auto">
          <button
            onClick={handleCopy}
            className={`absolute right-0 top-[0.4rem] px-2 py-1 text-[0.7rem] font-medium rounded ${
              copied ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-600'
            } transition-colors shadow-sm z-10`}
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>

          <SyntaxHighlighter
            language="html"
            style={dracula}
            customStyle={{
              borderRadius: '8px',
              paddingTop: '1rem',
              padding: '0.35rem',
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

export default function BoxShadowGallery() {
  return (
    <div className="max-w-6xl mx-auto p-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-[#9881ff] text-center">Box Shadow Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {boxes.map(box => (
          <BoxPreview key={box.id} name={box.name} code={box.code} />
        ))}
      </div>
    </div>
  );
}
