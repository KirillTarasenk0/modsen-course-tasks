import { useState, useEffect, useRef, Component } from 'react';
import './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  return (
      <div>
        <h2>Todo List</h2>
        <input type="text" ref={todoInputRef} placeholder="Введите дело" />
        <button onClick={handleAddTodo}>Добавить</button>
        <ul>
          {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
  );
};

const DogImage = () => {
  const [dogImageUrl, setDogImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setDogImageUrl(data.message));
  }, []);

  return (
      <div>
        <h2>Случайная картинка собаки</h2>
        {dogImageUrl && <img src={dogImageUrl} alt="Random Dog" style={{ maxWidth: '300px', height: 'auto' }} />}
      </div>
  );
};

class ShowHideButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }

  toggleShowHide() {
    this.setState(prevState => ({ isShown: !prevState.isShown }));
  }

  render() {
    return (
        <div>
          <button onClick={this.toggleShowHide}>
            {this.state.isShown ? 'Hide' : 'Show'}
          </button>
          {this.state.isShown && <p>Контент для отображения</p>}
        </div>
    );
  }
}

const App = () => {
  return (
      <div className="App">
        <h1>React Application</h1>
        <TodoList />
        <DogImage />
        <ShowHideButton />
      </div>
  );
};

export default App;
