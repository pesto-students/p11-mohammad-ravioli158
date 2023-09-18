import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = ({children, to}) => { 
  return <Link className='text-white text-sm' to={to}>{children}</Link>
 }

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <LinkItem to={'/'}><div className="text-white font-semibold text-xl">Workout Planner</div></LinkItem>
        <ul className="flex space-x-4">
          <LinkItem to={'/plan'}>My Plan</LinkItem>
          <LinkItem to={'/newplan'}>New Plan</LinkItem>      
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
