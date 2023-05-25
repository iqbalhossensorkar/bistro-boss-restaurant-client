import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menu from "../../Shared/Menu/Menu";
import useMenu from "../../../customHooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")
    return (
        <div className="mb-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5">
                {
                    popular.map(item => <Menu key={item._id} item={item}></Menu>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 ">view full menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;