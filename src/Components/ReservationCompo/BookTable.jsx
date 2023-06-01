// import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";


const BookTable = () => {
    return (
        <div>
            <SectionTitle subHeading="Reservation" heading="BOOK A TABLE"></SectionTitle>
            <div>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Date*</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered w-full bg-transparent" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Time*</span>
                            </label>
                            <input type="time" name="time" className="input input-bordered w-full bg-transparent" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label font-bold">
                                <span className="label-text">Guest*</span>
                            </label>
                            <select className="select select-bordered bg-transparent">
                                <option disabled selected>Pick one</option>
                                <option>1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person</option>
                                <option>5 Person</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Name*</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-transparent" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Phone*</span>
                            </label>
                            <input type="number" placeholder="Phone Number" className="input input-bordered w-full bg-transparent" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Email*</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full bg-transparent" required />
                        </div>
                    </div>
                    <div className="text-center mt-8 mb-12">
                        {/* <Link to='dashboard/paymentGateway'> */}
                            <input className="bg-gradient-to-r from-[#835D23] to-[#B48130] px-6 py-3 font-bold text-white hover:bg-gradient-to-r hover:from-[#694a1b] hover:to-[#d09639] active:scale-95 transition cursor-pointer" type="submit" value="Book A Table" />
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookTable;