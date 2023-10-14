import { useState } from 'react';
import OpenAI from 'openai';
import Navbar from '../components/Navbar';

const OpenAi = () => {
  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: prompt,
        max_tokens: 100,
      });
      setResult(response.choices[0].text);
      console.log(response);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col  p-5 mx-auto">
        <textarea name="" value={prompt} className="w-1/3 border rounded-md outline-none" onChange={(e) => setPrompt(e.target.value)}></textarea>
        <button
          onClick={handleClick}
          disabled={loading || prompt.length === 0}
          className={loading || prompt.length === 0 ? 'rounded-md font-semibold px-5 py-2 text-white w-32 mt-2 bg-cyan-400' : 'bg-cyan-700 rounded-md font-semibold px-5 py-2 text-white w-32 mt-2'}
        >
          {loading ? 'Genereting...' : 'Generete'}
        </button>
        <p className="bg-red-300 p-9 w-1/3 mt-5 rounded-md shadow-2xl">{result}</p>
      </div>
    </>
  );
};

export default OpenAi;
