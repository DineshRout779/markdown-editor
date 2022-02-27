import ReactMarkdown from 'react-markdown';
import Title from './Title';

const Preview = ({ markdown }) => {
  return (
    <div className='grid-item'>
      <Title title='Output' />
      <ReactMarkdown children={markdown} />
    </div>
  );
};

export default Preview;
