import React, { useState } from 'react';
import './index.css'

const App = () => {
  const [markdown, setMarkdown] = useState('')
  return (
    <div className="App">
      <div className="editor">
        <textarea onChange={(e) => setMarkdown(e.target.value)}></textarea>
      </div>
      <div className="preview">{markdown}</div>
    </div>
  );
}

export default App;
