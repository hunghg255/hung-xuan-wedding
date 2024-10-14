import { useState } from 'react';

const useCopied = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch {
      setIsCopied(false);
    }
  };

  return { isCopied, copyToClipboard };
};

export default useCopied;
