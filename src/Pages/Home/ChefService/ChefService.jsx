import ChefImg from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='w-10/12 mx-auto mb-20'>
            <div style={{ backgroundImage: `url("${ChefImg}")` }} className='bg-fixed text-center flex justify-center p-10 lg:p-20'>
                <div className="p-4 lg:px-44 lg:py-20 bg-base-100 shadow-xl">
                    <div className="">
                        <h3 className='uppercase text-4xl font-serif bg-white mb-5'>bistro boss</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ChefService;