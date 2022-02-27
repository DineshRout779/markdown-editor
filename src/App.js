import './styles.css';
import { useState } from 'react';
import Input from './components/Input';
import Preview from './components/Preview';

const App = () => {
  const [markdown, setMarkdown] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
  - Some are bulleted.
  - With different indentation levels.
  - That look like this.
  
  1. And there are numbered lists too.
  2. Use just 1s if you want!
  3. And last but not least, let's not forget embedded images: ![sample image](https://www.vhv.rs/dpng/d/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png)
  
  `);

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
