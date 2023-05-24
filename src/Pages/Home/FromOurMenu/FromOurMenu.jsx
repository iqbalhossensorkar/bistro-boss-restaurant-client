import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import feature from '../../../assets/home/featured.jpg'
const FromOurMenu = () => {
    return (
        <div className='container mx-auto mb-20'>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("${feature}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div className=''>
                        <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
                        <div className='md:flex justify-between items-center md:w-10/12 mx-auto gap-10 p-5'>
                            <img src={feature} alt="" className='md:w-1/2'/>
                            <div className='mt-5'>
                                <h1 className="text-xl font-sans">March 20, 2023</h1>
                                <h1 className="mb-5 text-2xl font-sans">WHERE CAN I GET SOME?</h1>
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <button className="btn btn-outline border-0 border-b-4 border-white text-white hover:bg-white hover:text-yellow-600 hover:border-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FromOurMenu;