import { useState } from 'react';
import Hello from './Test/Hello';
import Profile from './Test/Profile';
import Counter from './Test/Counter';
import ToogleMessages from './Test/ToogleMessages';

function App() {
  const fruits = ["Apple", "Banana", "Orange"];


  return (
    <div>
      <Hello name="Ray"/>
      {/* <Profile name="test" age="23"/> */}

      <Counter />
      <ToogleMessages />

      <ul>
        {fruits.map(f => (
          <li>{f}</li>
          )
        )}
      </ul>



    </div>
  );
}

export default App;
