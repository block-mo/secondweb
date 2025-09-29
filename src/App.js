import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import btnModule from './Button.module.css'
import FruitComponent from './Fruits';

function App() {

  let template = '';

  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(true);
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalstatus, setModalstatus] = useState(false);

  const items = ['Autumn', 'Spring', 'Summer', 'Winter'];

  if (pshow) {
    // template=<Card/>
    template = <>
      <button className='bg-red-400 p-4' onClick={() => setPshow(!pshow)}>Hide</button>
      <p>Welcome to belmos</p>
    </>
  }
  else {
    // template='';
    template = <button className='bg-green-400 p-4' onClick={() => setPshow(!pshow)}>Show</button>
  }

  let displayData = () => {
    // alert("Welcome to belmos");
    setCount(count + 1)
  }

  let addData = (a, b) => {
    console.log(a + b);
  }

  return (

    <div className='App'>

      <div>
        <button className='en' onClick={() => setModalstatus(true)}>Enquire Now</button>
        <div onClick={() => setModalstatus(false)} className={`modalOverLay ${modalstatus ? 'modalShow' : ''}`}></div>
        <div className={`modalDiv ${modalstatus ? 'showModalDiv' : ''}`}>
          <h3 className='bg-slate-400 text-center font-semibold'>
            Enquire Now
            <button className='p-2'><span onClick={() => setModalstatus(false)}>&times;</span></button>
          </h3>
        </div>
      </div>

      <button onClick={() => setMenuStatus(!menuStatus)} className='micon'>
        {
          menuStatus ? <span>&times;</span> : <span>&#9776;</span>
        }
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact US</li>
        </ul>
      </div>
      <br />

      <div>
        <h1 className='w-[10rem] h-[7rem] m-10 text-center rounded-2xl bg-green-500 font-extrabold text-[2rem]'> Seasons Names</h1>
        <ul className='m-10 py-1 shadow-lg text-[1.5rem] font-semibold'>
          {items.map((item, index) => (
            <li className='m-2 pl-5' key={index}>Index is at: {index} for season -&gt; {item}</li>
          ))}
        </ul>
      </div>

      <br/>
      <FruitComponent/>
      {template}
      <h1 className='text-[50px] bg-red-500 mt-4'>This is first build with tailwindcss</h1>
      <p className='bg-blue-300 font-sans text-[30px]'>React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.</p>
      <Header />
      <br />
      <div className='flex items-center justify-center'>
        <input className='m-5 border-2 rounded-lg border-purple-400 hover:border-purple-600' type={pstatus ? 'text' : 'password'} placeholder='Type your password here..' />
        <button className='w-[4rem] p-1 bg-purple-500 rounded-lg hover:bg-purple-600' onClick={() => setPstatus(!pstatus)}>
          {pstatus ? 'Hide' : 'Show'}
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <button className='mx-auto w-[50px] rounded-full bg-pink-500' onClick={() => setStatus(!status)}>
          {(status) ? 'Hide' : 'Show'}
        </button>
        {(status) ? <p className='w-[100px] h-[100px] mx-auto flex items-center text-center mt-3 text-blue font-semibold bg-blue-500 rounded-lg'>Good to see you!</p> : ''}
      </div>
      <div>
        <button className={btnModule.error}>Error</button>
        <button className={btnModule.warning}>Warning</button>
      </div>
      <br />
      {count}
      <button className='bg-red-500 p-9 mr-8' onClick={() => addData(20, 25)}>Add</button>
      <button className='bg-[red] p-[10px]' onClick={displayData}>Save</button>
      <img className='w-[10rem]' src={logo} alt='' />
      <img className='max-w-[10rem]' src='https://cdn.mos.cms.futurecdn.net/mNVxcusbHybBaCDU9tA2kG-650-80.jpg.webp' alt='' />
    </div>
  );
}

export default App;

let Card = () => {
  return (
    <h1>Welcome to belmos</h1>
  )
}