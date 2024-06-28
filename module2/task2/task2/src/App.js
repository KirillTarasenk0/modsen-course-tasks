import { useState, useRef } from 'react';
import './App.css';

const FormWithRef = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Отправить</button>
      </form>
  );
};

const ShowMoreText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const firstSentence = text.split('. ')[0] + '.';

  return (
      <div>
        <p>{isExpanded ? text : firstSentence}</p>
        <button onClick={toggleText}>
          {isExpanded ? 'Показать меньше' : 'Показать подробнее'}
        </button>
      </div>
  );
};

const InputNumber = () => {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
      <div>
        <input
            type="number"
            value={number}
            onChange={handleChange}
        />
        <Message number={number} />
      </div>
  );
};

const Message = ({ number }) => {
  const num = parseFloat(number);
  if (isNaN(num)) {
    return <p>Введите число</p>;
  }

  return (
      <p>
        {num > 0 ? 'Число больше нуля' : 'Число меньше нуля'}
      </p>
  );
};

const App = () => {
  const text = "Это первое предложение. Это второе предложение. Это третье предложение.";

  return (
      <div className="App">
        <h2>Form with useRef</h2>
        <FormWithRef />
        <h2>Show More Text</h2>
        <ShowMoreText text={text} />
        <h2>Input Number</h2>
        <InputNumber />
      </div>
  );
};

export default App;
