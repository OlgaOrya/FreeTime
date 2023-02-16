
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import picture from './picture.jpg'

function App() {

  const [activities, setActivities] = useState ('');
  const [participantsActivity,setParticipantsActivity] = useState('');
  const [typeActivity,setTypeActivity] = useState('')

useEffect (() =>{
  showAdvice()
}, [])

const showAdvice = useCallback (async() =>{
  const response = await fetch (`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  console.log (data)
  setActivities(data.activity)
  setParticipantsActivity (data.participants)
  setTypeActivity(data.type)
})

  return (
    <div className="App">
      <div className='container'>
        <img src ={picture} alt ="relax"/>
        <h2>KNOW HOW TO SPENT YOUR FREE TIME!</h2>
        <p className='header'>Maybe you will find something new...</p>
      </div>
      <div className='container activity'>
      <h1>{activities}</h1>
      <p className='addInfo'>Participants: {participantsActivity}</p>
      <p className='addInfo type'>Type of activity: {typeActivity}</p>
      <button onClick={showAdvice}>CLICK</button>
      </div>
    </div>
  );
}

export default App;
