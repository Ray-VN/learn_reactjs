import { useState } from 'react';
import Hello from './Test/Hello';
import Profile from './Test/Profile';
import Counter from './Test/Counter';
import ToogleMessages.Toogle from './Test/ToogleMessages';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text]);
      setText("");
    }
  };

  return (
    <div>
      <Hello name="Ray"/>
      {/* <Profile name="test" age="23"/> */}

      <Counter />
      <ToogleMessages />



    </div>
  );
}

export default App;
