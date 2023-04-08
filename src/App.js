import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import Blogs from './components/Blogs/Blogs';
import { useEffect, useState } from 'react';
import Sidecart from './components/Sidecart/Sidecart';

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className="App  w-[100%]" >
      <div className='mx-auto w-[80%]'>
        <Menubar></Menubar>
      </div>

      <div className='flex mx-auto justify-center my-12 w-[80%]'>
        <div className="home-container w-[60%] mr-2">
          <Blogs blogs={blogs}></Blogs>
        </div>
        <div className="sideCart w-[40%]">
          <Sidecart></Sidecart>
        </div>
      </div>

    </div>
  );
}

export default App;
