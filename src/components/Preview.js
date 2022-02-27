import ReactMarkdown from 'react-markdown';
import Title from './Title';

const Preview = ({ markdown }) => {
  return (
    <div className='grid-item'>
      <Title title='Output' />
      <div id='preview'>
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
};

export default Preview;
