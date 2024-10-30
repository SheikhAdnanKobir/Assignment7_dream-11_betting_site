import bgimg from '../../assets/bg-shadow.png'
import footlogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-[#0f002c] w-full h-[760px] mt-80 mx-auto'>
            <div className='w-4/5 p-5 rounded-xl border-2 border-white  ml-36 -mt-56 absolute'>
            <div className='w-full rounded-xl h-96 flex flex-col justify-center items-center border-2' style={{
            backgroundImage: `url(${bgimg})`,
            backgroundColor:'white',
            backgroundSize: 'cover',        
            backgroundPosition: 'center',    
            backgroundRepeat: 'no-repeat',   
            }}>
                <h1 className='text-3xl font-extrabold'>Subscribe to our Newsletter</h1>
                <p className='text-base opacity-60 mt-4'>Get the latest updates and news right in your inbox!</p>
                <div className='mt-5'>
                    <input className='border-2 w-96 pl-6 py-4 rounded-lg' type="text" placeholder='Enter your email' />
                    <button className='bg-[#E7FE29] py-4 px-6 ml-3 rounded-lg text-lg font-bold text-black'>Subscribe</button>
                </div>
        </div>
            </div>
            <div className=' h-[390px] pt-64'>
                <img className='mx-auto w-28  justify-center ' src={footlogo} alt="" />
            </div>
            <div className='pt-[30px] flex justify-between w-11/12 mx-auto text-white'>
                <div>
                    <h2 className='text-xl font-bold mb-6'> About Us</h2>
                    <p className='opacity-60'>We are a passionate team <br />
                        dedicated to providing the best <br />
                        services to our customers
                    </p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-xl font-bold mb-6'>Quick Links</h2>
                    <ol className='opacity-60 flex flex-col gap-4'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ol>
                </div>
                <div className='flex flex-col gap-5'> 
                    <h2 className='text-xl font-bold mb-1'>Subscribe</h2>
                    <p className='opacity-60'>Subscribe to our newsletter for the <br />
                        latest updates.
                    </p>
                    <div className='flex gap-0'>
                        <input className='border-2  pl-6 py-3 w- rounded-s-xl text-black hover:border-yellow-200' type="text" placeholder='Enter your email' />
                        <button className='bg-[#E7FE29] py-3 px-6  rounded-e-xl text-lg font-bold text-black'>Subscribe</button>
                    </div>
                </div>
            </div>
            <h1 className='border-b-[1px] '></h1>

            <p className='opacity-60 text-center py-10 text-white '>@2024 Your Company All Rights Reserved</p>
        </div>
    );
};

export default Footer;