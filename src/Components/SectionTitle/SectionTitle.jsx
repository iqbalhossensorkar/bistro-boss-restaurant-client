

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center">
            <p className="text-yellow-600 font-mono">--- {subHeading} ---</p>
            <p className="border-y-2 text-3xl p-3 mt-3 mb-10">{heading}</p>
        </div>
    );
};

export default SectionTitle;