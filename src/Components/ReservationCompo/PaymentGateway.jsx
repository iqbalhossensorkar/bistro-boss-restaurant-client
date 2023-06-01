// import { BsCreditCard2FrontFill } from "react-icons/bs";

const PaymentGateway = () => {
    return (
        <div className="bg-white flex flex-col pt-10 px-5  lg:pt-56 justify-center items-center">
            <h1 className="uppercase font-semibold text-2xl mb-10">Payment</h1>
            <form>
                <div className="flex gap-3 justify-center w-full items-center">
                    <div className="form-control w-full">
                        <input type="number" placeholder="Card Number" className="input input-bordered w-full bg-transparent" />
                    </div>
                    <div className="form-control w-full">
                        <input type="number" placeholder="MM/YY/CVC" className="input input-bordered w-full bg-transparent" />
                    </div>
                </div>
                <div className="text-center mt-10">
                <input type="submit" value="Pay" className="w-3/5 bg-[#570DF8] py-3 rounded-lg font-bold text-white cursor-pointer active:scale-95 transition hover:bg-[#561bd5]"/>
                </div>
            </form>
        </div>
    );
};

export default PaymentGateway;