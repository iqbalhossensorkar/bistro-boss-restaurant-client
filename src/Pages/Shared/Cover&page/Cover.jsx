import { Parallax } from 'react-parallax';

const Cover = ({ height, img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -1, max: 3 }}
            bgImage={img}
            bgImageAlt="the cover"
            strength={-200}
        >
            <div className={`hero ${height}`} style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-black bg-opacity-40 px-10 py-6 lg:px-96 lg:py-24">
                        <h1 className="mb-5 text-2xl lg:text-6xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 font-serif text-xl lg:text-2xl uppercase">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;