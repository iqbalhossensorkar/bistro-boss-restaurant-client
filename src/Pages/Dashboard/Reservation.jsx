import BookTable from "../../Components/ReservationCompo/BookTable";
import OurLocation from "../../Components/ReservationCompo/OurLocation";

const Reservation = () => {
    return (
        <div className="m-5">
            <BookTable></BookTable>
            <OurLocation></OurLocation>
        </div>
    );
};

export default Reservation;