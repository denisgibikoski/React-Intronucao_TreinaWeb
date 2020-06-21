import React from 'react';
import TextCounter from './TextCounter';



function App() {
  return (
    <div>
      <TextCounter  limit={20} />
      <TextCounter   />
    </div>
  );
}

export default App;
