import PropTypes from 'prop-types';
import '../../index.css'
import { IoLocationSharp } from "react-icons/io5"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Player = ({player,addplayerselect,handledecrement,countfun}) => {
    
    const {player_rating,image_url,market_price,country,category,batting_style,player_name}=player;


    return (
        <div className='border-2 rounded-xl p-5 max-w-[450px] overflow-hidden'>
            <div className=''>
                <img className='w-[410px] h-96 object-cover  rounded-xl' src={image_url} alt={player_name} />
                
            </div>
            <div className='flex items-center gap-3 my-3'>
                <img className='w-8' src="https://img.icons8.com/?size=100&id=rrtYnzKMTlUr&format=png&color=000000" alt="" />
                <h2 className='text-xl font-semibold '>{player_name}</h2>
                </div>
            
            <div className='flex justify-between items-center border-b-2 py-2'>
                <p className='flex items-center gap-1'><IoLocationSharp className='opacity-30 '/><span className='opacity-50 '>{country}</span></p>
                <h4 className='py-1 px-2 bg-gray-100 rounded-lg'>{category}</h4>
            </div>
            <h4 className='my-3'><span className='font-bold'>Player Rating :</span> {player_rating} (out of 10)</h4>
            <div className='flex justify-between '>
                <h3 className='font-bold'>Batting Style :</h3>
                <p className='opacity-50'>{batting_style}</p>
            </div>
            <div className='flex justify-between items-center mt-3'>
                
                <h3 className=''><span className='font-bold'>Price :</span> ${market_price}</h3>
                <button className='border-2 px-4 py-1 rounded-lg hover:bg-[#E7FE29] btn font-medium ' onClick={()=>{addplayerselect(player);handledecrement(player);countfun(player)}}>Choose Player <ToastContainer /></button>
                
            </div>
        </div>
    );
};

Player.propTypes = {
    player:PropTypes.object.isRequired,
    addplayerselect:PropTypes.object.isRequired,
    handledecrement:PropTypes.number.isRequired,
    countfun:PropTypes.number.isRequired
};

export default Player;