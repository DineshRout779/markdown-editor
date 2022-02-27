import Title from './Title';

const Input = ({ markdown, handleChange }) => {
  return (
    <div className='grid-item'>
      <Title title='Input' />
      <textarea
        id='editor'
        className='textarea'
        value={markdown}
        placeholder='Type your markdown'
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Input;
