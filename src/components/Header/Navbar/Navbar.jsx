import { prototype } from "postcss/lib/input";
import navImg from "../../../assets/logo.png"
import { TbCoinFilled } from "react-icons/tb";
const Navbar = ({count}) => {
    // console.log(count);
    
    
    return (
        <div className=' flex items-center justify-between py-2 z-10 rounded-lg -mt-24 fixed bg-[#fffffff3] mx-10 w-[94%]'>
            <div>
                <img src={navImg} alt="" />
            </div>
            <div className='flex justify-center items-center gap-9'>
                <p className="opacity-60">Home</p>
                <p className="opacity-60">Fixture</p>
                <p className="opacity-60">Teams</p>
                <p className="opacity-60">Schedules</p>
                <p className='border-2 w-52 py-1 rounded-lg' >
                    <span className="font-semibold flex items-center justify-end gap-2">{count} Coin <TbCoinFilled className="text-yellow-500 mr-3 text-3xl" /></span></p>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    count:prototype.number
};

export default Navbar;