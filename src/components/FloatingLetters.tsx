
import React from 'react';

const SANSKRIT_LETTERS = [
  'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ',
  'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ',
  'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',
  'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श',
  'ष', 'स', 'ह', 'क्ष', 'त्र', 'ज्ञ'
];

const FloatingLetters = () => {
  const letters = React.useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const style: React.CSSProperties & { '--duration': string; 'animationDelay': string } = {
        left: `${Math.random() * 100}vw`,
        '--duration': `${20 + Math.random() * 20}s`,
        animationDelay: `${Math.random() * 20}s`,
        fontSize: `${1 + Math.random() * 1.5}rem`,
      };
      const character = SANSKRIT_LETTERS[Math.floor(Math.random() * SANSKRIT_LETTERS.length)];
      return { style, character, id: i };
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {letters.map(({ style, character, id }) => (
        <span
          key={id}
          className="absolute text-book-muted/20 animate-floating"
          style={style}
        >
          {character}
        </span>
      ))}
    </div>
  );
};

export default FloatingLetters;
