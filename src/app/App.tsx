import { Routes, Route } from 'react-router-dom';
import { TodoPage } from '../pages';

function App() {
  return (
    <Routes>
      <Route path="/todo-mobx/*" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
