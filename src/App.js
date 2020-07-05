import React, { useState } from 'react';
import { pattern } from './util'
import './index.css'

const App = () => {
  const [markdown, setMarkdown] = useState('')
  const convertMarkdown = (markdown) => [...markdown.trim().split('\n').map(line => pattern(line))]
  return (
    <div className="App">
      <div className="editor">
        <textarea onChange={(e) => setMarkdown(e.target.value)}></textarea>
      </div>
      <div className="preview">{convertMarkdown(markdown)}</div>
    </div>
  );
}

export default App;
