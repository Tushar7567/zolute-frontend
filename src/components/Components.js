
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const One = () => <h1>Content of page one</h1>;
const Two = () => <h1>Content of page two</h1>;
const Three = () => <h1>Content of page three</h1>;
const Four = () => <h1>Content of page four</h1>;

const Components = () => {
  return (
    <div>
    <ul className='navbar' >
        <li><Link className='link-text'  to="/home/one">One</Link></li>
        <li><Link className='link-text'  to="/home/two">Two</Link></li>
        <li><Link className='link-text'  to="/home/three">Three</Link></li>
        <li><Link className='link-text'  to="/home/four">Four</Link></li>
        {/* <li><Link className='link-text' to="/">Login</Link></li>
        <li><Link className='link-text' to="/register">Register</Link></li> */}
      </ul>
  
      <h3>Route of home component</h3>
      <Outlet />
    </div>
  )
}

export default Components


export { One, Two, Three, Four };