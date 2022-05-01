import { Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import ArticlePage from './ArticlePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:title" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
