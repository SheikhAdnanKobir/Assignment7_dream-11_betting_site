import { useEffect, useState } from 'react';
import "../../index.css"
import Player from './Player';
import About from './About';
import AddPlayer from './AddPlayer/AddPlayer'
import PropTypes from 'prop-types';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Players = ({count , setCount}) => {

    const [players, setPlyers] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setPlyers(data))
    })

    const [playerr, setPlyerr] = useState([]);


    const addplayerselect = (addplayer) => {
        const setnewhistory = [...playerr, addplayer];
                
        if (setnewhistory.length <= 6 && addplayer.market_price<=count) {
            setPlyerr(setnewhistory);
            // alert("hello")
            toast.success(`Congrats!! ${addplayer.player_name} is now in your squad`,{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    const afterdelitesite = (player) => {
        const {player_id}=player
        const afterDelite = playerr.filter(player => player.player_id !== player_id)
        // console.log(afterDelite);
        setPlyerr(afterDelite);
        // alert(`You was deleted ${player_name}`)
    }


    const handelPage = (id) => {
        document.getElementById("add").classList.add("hidden")
        document.getElementById("main").classList.add("hidden")
        document.getElementById(id).classList.remove("hidden")
    }
    const handelbtn = (id) => {
        console.log(id);


        document.getElementById("content").classList.remove("colorHandel")
        document.getElementById("adding").classList.remove("colorHandel")
        document.getElementById("content").classList.add("hoverColor")
        document.getElementById("adding").classList.add("hoverColor")

        document.getElementById(id).classList.add("colorHandel")
        document.getElementById(id).classList.remove("hoverColor")
    }


    // const [countplayer,setCountplayer]=useState([]);
    const countfun = (inpuplayers) => {
        // console.log(count);
        
        const newarr = [...playerr, inpuplayers];
        if (newarr.length <= 6 && inpuplayers.market_price<=count) {
            setPlyerr(newarr);
        }

    }
    const handledecrement = (oddPrice) => {
        const newarr = [...playerr, oddPrice];
        const {market_price}=oddPrice
        if(market_price<=count && newarr.length<=6){        
          const odd=count-market_price;
          setCount(odd)
        }
        else if(newarr.length>6){
            // toast("You was Selected Maximum players  !!!");
            toast.warn('You was Selected Maximum players  !!!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
                })
        }
        else{
          toast.error("You don't have enough Credit",{
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
      }

    return (
        <div className='w-11/12 mx-auto'>
            <About playerr={playerr} handelPage={handelPage}></About>
            <div id='add' className='hidden'>
                <h1 className="text-2xl font-bold my-5">Selected players ({playerr.length}/6)</h1>
                <div>
                    {
                        playerr.map((player, indx) => <AddPlayer key={indx} afterdelitesite={afterdelitesite} player={player}></AddPlayer>)
                    }
                    <div className='border-2 p-3 rounded-xl w-64'>
                        <button onClick={() => { handelbtn("content"); handelPage("main") }} className='mx-auto py-4 px-3 text-2xl font-semibold rounded-xl bg-[#E7FE29] '>Add More Player</button>
                    </div>

                </div>
            </div>
            <div id='main'>
                <h1 className="text-2xl font-bold my-5">Available Players</h1>

                <div  className='grid grid-cols-3 gap-5 '>
                    {
                        players.map((player, indx) => <Player countfun={countfun} handledecrement={handledecrement} addplayerselect={addplayerselect} key={indx} player={player}></Player>)
                    }
                </div>
            </div>
        </div>
    );
};
Players.propType = {
    count:PropTypes.number.isRequired,
    setCount:PropTypes.number.isRequired
}
export default Players;