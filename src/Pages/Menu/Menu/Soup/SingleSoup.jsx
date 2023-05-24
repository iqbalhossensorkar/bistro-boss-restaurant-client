

const SingleSoup = ({soup}) => {
    const { image, name, price, recipe } = soup;
    return (
        <div className="flex mb-10 items-center">
            <div className="flex items-start">
                <img src={image} alt="" className="mr-10 rounded-se-full rounded-ee-full rounded-es-full w-28 h-28" />
                <div>
                    <p className="uppercase font-serif text-lg mb-5">{name} ------------------</p>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-600 text-lg">${price}</p>
            </div>
        </div>
    );
};

export default SingleSoup;