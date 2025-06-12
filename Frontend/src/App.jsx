import React, { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor";
// import "prismjs/components/prism-jsx"
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./app.css"

const App = () => {

  const [count, setCount] = useState(0);
  const [code, setCode] = useState(`function sum(){
  return 1+1
}`);

const [reviews, setReviews] = useState(``);

  useEffect(() => {
    prism.highlightAll()
  },[])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })

      setReviews(response.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 20,
                border: '1px solid #ccc',
                borderRadius: '4px',
                height: '100%',
                width: '100%',
                color: '#abb2bf'
              }}
            />
          </div>
          <div
          onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <Markdown
          
            rehypePlugins={[rehypeHighlight]}
          >
            {reviews}
            </Markdown>
        </div>
      </main>
    </>
  )
}

function sum() {
  return 1 + 1
}

export default App
