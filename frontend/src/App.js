import React, { useState } from 'react';
import StrategyToggle from './components/StrategyToggle';
import PostList from './components/PostList/PostList';

function App() {
  const [strategy, setStrategy] = useState('paging');

  return (
    <div>
      <StrategyToggle strategy={strategy} onChange={setStrategy} />
      <PostList strategy={strategy} />
    </div>
  );
}

export default App;
