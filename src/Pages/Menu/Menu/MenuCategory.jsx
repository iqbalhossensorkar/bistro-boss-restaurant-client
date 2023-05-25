import { Link } from "react-router-dom";
import Menu from "../../Shared/Menu/Menu";
import Cover from "../../Shared/Cover&page/Cover";

const MenuCategory = ({item, title, img}) => {
    return (
        <div className="mb-20">
            {title && <Cover height={"h-96 lg:h-[500px]"} subtitle={"WOULD YOU LIKE TO TRY A DISH?"} img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5 mt-10">
                {
                    item.map(item => <Menu key={item._id} item={item}></Menu>)
                }
            </div>
            <div className="text-center">
                <Link to={`/shop/${title}`}><button className="btn btn-outline border-0 border-b-4">view full menu</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;