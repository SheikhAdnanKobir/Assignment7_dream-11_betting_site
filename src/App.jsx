import { useState } from 'react'
import './App.css'
import Players from './components/Body/Players'
import Banner from './components/Header/Banner/Banner'
import "./index.css"
import Navbar from './components/Header/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [count,setCount]=useState(0)

    const handleIncrement = () => {
        const oldValue=2000000;
        const newValue=count+oldValue;
        setCount(newValue)

      toast.success("You added free credit",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
        
    }
    
  return (
    <>
      <Navbar count={count}></Navbar>
      <Banner handleIncrement={handleIncrement}></Banner>
      <Players count={count} setCount={setCount}></Players>
      <Footer></Footer>
    </>
  )
}



export default App
