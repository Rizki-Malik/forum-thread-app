import { useState, useEffect, useMemo } from "react";

const generateExcerpt = (text) => {
    const sentences = text.split(/[.!?;]\s/);
  
    const firstSentence = sentences[0];
  
    const maxWords = 100;
    const words = firstSentence.split(' ');
    const limitedWords = words.slice(0, maxWords);
  
    const excerpt = limitedWords.join(' ') + '...';
  
    return excerpt;
  };

const useExcerpt = (body) => {
    const [excerpt, setExcerpt] = useState('');
  
    useEffect(() => {
      const generatedExcerpt = generateExcerpt(body);
      setExcerpt(generatedExcerpt);
    }, [body]);
  
    const memoizedExcerpt = useMemo(() => excerpt, [excerpt]);
  
    return memoizedExcerpt;
  };
  
  export default useExcerpt;