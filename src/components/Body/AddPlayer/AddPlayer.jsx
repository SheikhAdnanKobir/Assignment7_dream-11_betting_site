import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddPlayer = ({ player,afterdelitesite}) => {
    const {batting_style,player_name,image_url}=player
    // console.log(playerr);
    // console.log(playerr);
    // console.log(playerr.player_id);
    // const notyfi=(plar)=>{
    
    const notyfi=()=>{
        toast.warn(`You was deleted ${player_name}`,{
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
        <div className="">
            <div className='flex justify-between  border-2 p-4 rounded-xl my-5 '>
                <div className='flex items-center gap-5'>
                    <div className='border-2 rounded-xl p-2'>
                        <img className='w-16 rounded-xl' src={image_url} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>{player_name}</h2>
                        <p className='opacity-50'>{batting_style}</p>
                    </div>
            </div>
                <button onClick={()=>{afterdelitesite(player);notyfi()}} className='text-3xl text-red-500' ><MdDelete/></button>
                
            </div>
            
        </div>
        
    );
};
AddPlayer.propTypes={
    player:PropTypes.object.isRequired,
    afterdelitesite:PropTypes.object.isRequired
}

export default AddPlayer;