import { IoCall } from "react-icons/io5";
import SectionTitle from "../SectionTitle/SectionTitle";
import { HiClock, HiLocationMarker } from "react-icons/hi";

const OurLocation = () => {
    return (
        <div>
            <SectionTitle subHeading="Visit Us" heading="Our Location"></SectionTitle>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#e7e7e7] text-gray-800 text-center gap-2 mb-20">
                <div>
                    <div className=" bg-[#D1A054] text-center p-5"><IoCall size={26} className="mx-auto text-white"></IoCall></div>
                    <p className="text-xl font-semibold mt-20">PHONE</p>
                    <p className="mb-20">+38 (012) 34 56 789</p>
                </div>
                <div>
                    <div className="bg-[#D1A054] text-center p-5"><HiLocationMarker size={26} className="mx-auto text-white"></HiLocationMarker></div>
                    <p className="text-xl font-semibold mt-20">ADDRESS</p>
                    <p className="mb-20">+38 (012) </p>
                </div>
                <div>
                    <div className="bg-[#D1A054] text-center p-5"><HiClock size={26} className="mx-auto text-white"></HiClock></div>
                    <p className="text-xl font-semibold mt-20">WORKING HOUR</p>
                    <p className="">Mon - Fri: 08:00 - 22:00</p>
                    <p className="mb-20">Mon - Fri: 08:00 - 22:00</p>
                </div>
            </section>
        </div>
    );
};

export default OurLocation;