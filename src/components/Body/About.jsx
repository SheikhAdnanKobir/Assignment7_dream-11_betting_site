
const About = ({handelPage,playerr}) => {
    // console.log(obje);
    const handelbtn=(id)=>{
        console.log(id);
        
        
        document.getElementById("content").classList.remove("colorHandel")
        document.getElementById("adding").classList.remove("colorHandel")
        document.getElementById("content").classList.add("hoverColor")
        document.getElementById("adding").classList.add("hoverColor")

        document.getElementById(id).classList.add("colorHandel")
        document.getElementById(id).classList.remove("hoverColor")
    }
    
    return (
        <div className="flex justify-end items-center mt-16 mb-10 sticky top-[88px]  z-20">
            <div className="flex bg-white rounded-xl">
                <button  id="content" className="border-s-2 border-y-2 w-36 h-12  rounded-s-xl colorHandel "
                    onClick={()=>{
                         handelbtn("content");
                         handelPage("main"); 
                        }}
                >Available</button>
                <button id="adding" className=" border-e-2 border-y-2 w-36 h-12  rounded-e-xl hoverColor"
                    onClick={()=>{  handelbtn("adding");handelPage("add");}}
                >Selected ({playerr.length})</button>
            </div>
        </div>
        
    ); 
};

export default About;
