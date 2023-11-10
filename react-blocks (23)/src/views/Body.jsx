import React from 'react'
import MainContent from './MainContent';
import Navigation from '../components/Navigation';

const Body = () => {
  return (
    <div className='body'>
        <Navigation />
        <MainContent />
    </div>
  )
}

export default Body