/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Swal from "sweetalert2";
import moment from 'moment';
import { Authcontext } from "../authcontext/Authprovider";

const Details = () => {

    const currentDate = moment().format('D/MM/YYYY');
    const [findbook, setFindbook] = useState({})
    const [loading, setLoading] = useState(true)
    const loader = useLoaderData()
    const { id } = useParams()
    const { user } = useContext(Authcontext)
    // const [selectedDate, setSelectedDate] = useState('');

    // const handleDateChange = (event) => {
    //     setSelectedDate(event.target.value);
    // };

    const books = loader.find(book => book._id === id)

    useEffect(() => {
        setFindbook(books)
        setLoading(false)
    }, [])
    // console.log(findbook)
    const { name, photo, author, _id, description, read_description, quantity, category } = books

    const handleadd = (event) => {
        event.preventDefault()

    const { name, photo, author, _id, description, read_description, quantity, category } = books;

        fetch('https://assignment-11-server-iota-eight.vercel.app/addbooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(books)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Done!',
                        'Your borrowed book added successfully',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            {
                loading ? <div className="py-12">
                    <SkeletonTheme baseColor="#BBDEFB" highlightColor="#444">
                        <p className="mx-52">
                            <Skeleton highlightColor="gray" height={200} count={1} />
                        </p>
                    </SkeletonTheme>
                </div> : <div className="pb-12">
                    <h1 className="text-center text-3xl text-black font-semibold py-6">The {findbook.category} Book</h1>
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl md:w-[750px] bg-clip-border mx-auto ">
                        <div className="relative mt-4 overflow-hidden text-gray-700 bg-white  bg-clip-border">
                            <img
                                src={findbook.photo}
                                className="object-cover md:h-[600px] w-full rounded-xl px-5 md:px-0"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-2">
                                <p className="block font-bold  antialiased text-2xl leading-relaxed text-blue-500">
                                    {findbook.name}({findbook.category})
                                </p>
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    Writer: {findbook.author}
                                </p>
                            </div>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                {findbook.description}
                            </p>
                        </div>
                        <div className="p-6 pt-0 flex items-center justify-between">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Borrow</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <form onSubmit={handleadd}>
                                        <img className="w-40 mx-auto" src="https://i.ibb.co/QfW1H7R/undraw-Bookshelves-re-lxoy-1.png" alt="" />
                                        <div>
                                            <h1 className="text-center text-xl font-medium text-black">Would you like to borrow this book?</h1>
                                            <div className="text-center pt-5">
                                            <input className="btn btn-primary" type="submit" value="Submit" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </dialog>
                            <Link to={`/read/${findbook._id}`}>
                                <button
                                    className="py-3 px-6  align-middle text-xs font-bold uppercase transition-all btn btn-primary"
                                >
                                    Read
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Details;