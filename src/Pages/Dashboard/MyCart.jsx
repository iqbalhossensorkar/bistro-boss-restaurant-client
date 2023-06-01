import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import useCart from '../../customHooks/useCart';
import MyCartTable from '../../Components/MyCartTable/MyCartTable';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const totalSum = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }
    return (
        <div className='mt-10'>
            <Helmet>
                <title>My Cart - Bistro Boss</title>
            </Helmet>
            <div><SectionTitle subHeading="My Cart" heading="WANNA ADD MORE"></SectionTitle></div>
            <div className='mx-4 md:mx-28 mb-20'>
                <div className='flex justify-between items-center mb-5 gap-7'>
                    <h1 className='md:text-2xl font-serif font-black uppercase'>Total orders: {cart.length}</h1>
                    <h1 className='md:text-2xl font-serif font-black uppercase'>total price: ${totalSum}</h1>
                    <button className="btn btn-md bg-[#D1A054] border-none hover:bg-[#927c5a]">Pay</button>
                </div>
                <MyCartTable handleDelete={handleDelete}></MyCartTable>
            </div>
        </div>
    );
};

export default MyCart;