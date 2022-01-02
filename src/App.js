import React from 'react';
// import { state } from './reducers/homeReducer';
// import './App.css';
import Editor from './components/Editor'
import Preview from './components/Preview'

import { useSelector } from 'react-redux';

function App() {
  const root = useSelector(state => state.root);

  return (
    <div className='flex h-[100vh]'>
      <Editor></Editor>
      <Preview ></Preview>
    </div>
  );
}

export default App;
