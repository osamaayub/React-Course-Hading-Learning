import { useState } from 'react';

const ArrayFunction = () => {
  const initialArray = Array.from(
    { length: 20 },
    (_, index) => `Element ${index + 1}`
  );
  const [array, setArray] = useState(initialArray.slice(0, 10));
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setArray([...array, inputValue]);
    setInputValue('');
  };

  const handleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleShowMore = () => {
    const currentLength = array.length;
    const nextLength = Math.min(currentLength + 2, initialArray.length);
    setArray(initialArray.slice(0, nextLength));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
      <button onClick={handleAdd}>Add</button>

      {array.map((element, index) => (
        <div key={index}>
          {element} <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      {array.length < initialArray.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </div>
  );
};

export default ArrayFunction;
