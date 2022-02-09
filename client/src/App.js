
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Mainer from './pages/Main';
import Mypage from './pages/mypage';
import Friends from './pages/friends';
import Post from'./pages/post';
import Result from './pages/result';

function App() {
  return (

    <div className="App">
      <Header value="search"></Header>
      
      <Routes>
        <Route exact path='/' element={<Mainer/>}/>

        <Route exact path='/mypage' element={<Mypage/>}/>

        <Route exact path='/friends' element={<Friends/>}/>

        <Route exact path='/mypage/post' element={<Post/>}/>

        <Route exact path='/mypage/post/1' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;