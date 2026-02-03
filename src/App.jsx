//import Todo from './components/Todo'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Profile from './components/Profile';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';


function App() {

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(Response => {
        setProfile(Response.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [count]);



  const goDark = () => {
    setDark(!dark)
    if(!dark){
      document.body.classList.add('bg-secondary')
    } else(
      document.body.classList.remove('bg-secondary')
    )
  }
  
  const classBtnThem = dark ? 'btn-light' : 'btn-dark'
  const testBtnTheme = dark ? 'rendre claire' : 'rendre sombre'
  const btnReini = () =>{
    if(count==1){
      alert('le bouton est deja reunitialiser')
    } else (
      setCount(count * 0 + 1)
    )
  
  }


  const btnactive = () =>{
    if(count >= 10){
      return true
    } else {
      return false
    }
     
  }

  const memoizeValue =  useMemo(() => {
    return count == 10
  }, [count])  


  return (
    <div className='container'>
      <h1 className='text-center mt-4'>UseMemo()</h1>
      {memoizeValue  && <div className='alert alert-danger' role='alert'>STOP!!!</div>}

      <div className='mt-4'>
        <button className='btn btn-info mb-3 float-start' onClick={() => setCount(count + 1)} disabled={btnactive()}>increment {count}</button>
        <button className={`btn ${classBtnThem} mb-3 float-end`} onClick={goDark}>{testBtnTheme}</button>
        <div className='text-center'>
          <button className='btn btn-danger' onClick={btnReini}>Reinitialisaer</button>
        </div>
      </div>
      <Profile count={count} profile={profile} />
    </div>
  )
}

export default App
