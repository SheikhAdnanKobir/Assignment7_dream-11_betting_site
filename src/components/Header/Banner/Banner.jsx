import bgImg from '../../../assets/bg-shadow.png'
import Bannerimg from '../../../assets/banner-main.png'
import { prototype } from 'postcss/lib/previous-map';

const Banner = ({handleIncrement}) => {
    
    return (
        <div className='bgImg flex flex-col justify-center items-center rounded-2xl mt-24 w-11/12 mx-auto' style={{
            backgroundImage: `url(${bgImg})`,
            backgroundColor:'black',
            backgroundSize: 'cover',        
            backgroundPosition: 'center',    
            backgroundRepeat: 'no-repeat',   
        }}>
           <div className='mt-20'>
            <img src={Bannerimg} alt="" />
           </div>
           <h1 className='text-white text-4xl font-extrabold my-5'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
           <h4 className='text-white text-2xl opacity-70 my-2'>Beyond Boundaries Beyond Limits</h4>
           <div className='rounded-xl border-2 border-[#E7FE29] p-2 mt-5 mb-20'>
            <button className='bg-[#E7FE29] font-extrabold px-6 py-3 rounded-xl  ' onClick={handleIncrement}>
                Claim Free Credit</button>
            </div>
    
           
        </div>
    );
};

Banner.propTypes = {
    handleIncrement:prototype.number
};

export default Banner;