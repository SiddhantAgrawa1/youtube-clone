import './App.css';
import Content from './component/Content';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Tags from './component/Tags';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Sidebar />
        <Tags />
        <Content/>
      </div>
    </div>

  );
}

export default App;
