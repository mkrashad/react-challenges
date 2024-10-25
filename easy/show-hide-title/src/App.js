import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
}

export default App;
