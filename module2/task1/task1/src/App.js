import { useState } from 'react';
import './App.css';

const photos = [
  {
    albumId: 1,
    id: 1,
    title: 'green',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'purple',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
];

const PhotoList = ({ photos }) => {
  return (
      <div>
        {photos.map(photo => (
            <div key={photo.id}>
              <h3>{photo.title}</h3>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
        ))}
      </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const buttonStyle = {
    backgroundColor: count > 10 ? 'red' : 'green',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
      <div>
        <p>Счетчик: {count}</p>
        <button style={buttonStyle} onClick={incrementCount}>
          Увеличить
        </button>
      </div>
  );
};

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
  );
};

const App = () => {
  return (
      <div className="App">
        <h1>Photo List App</h1>
        <PhotoList photos={photos} />
        <Counter />
        <Form />
      </div>
  );
};

export default App;
