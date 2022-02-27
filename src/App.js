import './styles.css';
import { useState } from 'react';
import Input from './components/Input';
import Preview from './components/Preview';

const App = () => {
  const [markdown, setMarkdown] = useState('## Type something...');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <h1 className='heading'>Markdown editor</h1>
      <div className='grid'>
        <Input markdown={markdown} handleChange={handleChange} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
