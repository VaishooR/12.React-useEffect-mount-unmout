
import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import Text from './Text';

export default function App() {
  const [click, setclick] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setclick(!click);
        }}
      >
        Show/Hide
      </button>
      <br />
      <br />
      {click && <Text />}
    </div>
  );
}
