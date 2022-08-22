import * as React from 'react';
import { useState, useEffect } from 'react';

function Text() {
  const [text, settext] = useState('');
  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Comp unmounted');
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
}
export default Text;
