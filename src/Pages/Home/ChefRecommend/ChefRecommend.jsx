import img1 from '../../../assets/menu/pizza-bg.jpg'
import img2 from '../../../assets/menu/salad-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'
const ChefRecommend = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-self-center'>
            <div className="card w-full bg-[#F3F3F3] rounded-none">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="text-center card-body">
                    <h2 className="text-xl font-bold">Caeser Salad</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 text-yellow-600 hover:text-yellow-600 hover:border-none">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#F3F3F3] rounded-none">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="text-center card-body">
                    <h2 className="text-xl font-bold">Caeser Salad</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 text-yellow-600 hover:text-yellow-600 hover:border-none">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#F3F3F3] rounded-none">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="text-center card-body">
                    <h2 className="text-xl font-bold">Caeser Salad</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 text-yellow-600 hover:text-yellow-600 hover:border-none">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;