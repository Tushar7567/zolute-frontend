import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Components, { One, Two, Three, Four } from './components/Components';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import axios from "axios"


  // dynamic api call
    const Get = (url) => {
      const [data, setData] = useState(null);
  
      useEffect(() => {
        axios.get(url)
          // .then((res) => res.data)
          .then((data) => setData(data))
          .catch((err) => setData(err))
      }, [url]);
    
      return [data];
  }

  const Post = ({url, inputData}) => {
      const [data, setData] = useState(null);
  
      useEffect(() => {
        axios.post(url, {inputData})
          // .then((res) => res.data)
          .then((data) => setData(data))
          .catch((err) => setData(err))
      }, [url]);
    
      return [data];
  }

  const Update = ({url, inputData}) => {
      const [data, setData] = useState(null);
  
      useEffect(() => {
        axios.put(url,{inputData})
          // .then((res) => res.data)
          .then((data) => setData(data))
          .catch((err) => setData(err))
      }, [url]);
    
      return [data];
  }

  const Delete = (url) => {
      const [data, setData] = useState(null);
  
      useEffect(() => {
        axios.delete(url)
          // .then((res) => res.data)
          .then((data) => setData(data))
          .catch((err) => setData(err))
      }, [url]);
    
      return [data];
  }

function Adaptor() {
  
  const Navbar = () =>{
    return(<ul className='navbar' >
        {/* <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
        <li><Link to="/three">Three</Link></li>
        <li><Link to="/four">Four</Link></li> */}
        <li><Link className='link-text' to="/">Login</Link></li>
        <li><Link className='link-text' to="/register">Register</Link></li>
      </ul>)
  }


  return (
    <BrowserRouter>
      

      {/* <h3>Content of main App component</h3> */}

      <Navbar />
      <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={<Components />}  >
            <Route path="/home/one" element={<One />}  />
            <Route path="/home/two" element={<Two />} />
            <Route path="/home/three" element={<Three />} />
            <Route path="/home/four" element={<Four />} />
          </Route>
          <Route path="/register" element={ <Register /> } />
        
      </Routes>
    </BrowserRouter>

  );
}


export {
    Adaptor,
    Get,
    Post,
    Update,
    Delete
 };

