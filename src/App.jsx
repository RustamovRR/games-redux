import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import loadGames from './redux/actions/gamesAction'

import './App.css';
import Home from './pages/Home';

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  })

  return (
    <div>
      <Home/>
    </div>
  );
}
