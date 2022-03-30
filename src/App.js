import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home';
import Post from './component/Post';
import Todo from './component/Todo';
import Album from './component/Album';
import View from './component/View';
import Update from './component/Update';
import A from './component/A';
import B from './component/B';
function App() {
  return (
    <div className="App">

  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/album" element={<Album/>}/>
      <Route path="/todo" element={<Todo/>}/>
            <Route path="/a" element={<A/>}/>
            <Route path="/b" element={<B/>}/>
      <Route path="/post/:id" element={<View/>}/>
      <Route path="/album/:id" element={<View/>}/>
      <Route path="/todo/:id" element={<View/>}/>
      <Route path="/postupdate/:id" element={<Update/>}/>
      <Route path="/albumupdate/:id" element={<Update/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
