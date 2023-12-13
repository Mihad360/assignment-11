/* eslint-disable no-unused-vars */
import axios from "axios";
import {useState} from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const loader = useLoaderData()
    const {_id} = loader;

    const [options, setOptions] = useState([
        'stories', 'science', 'poetry', 'history'
    ])
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleInputClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    const handleupdate = e => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const updateinfo = {photo, name, author, category, rating }

        fetch(`http://localhost:5000/allbooks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateinfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Done!',
                        'Updated successfully',
                        'success'
                    )
                    // form.reset();
                }
            })
    }

    return (
        <div>
            <div className=" pt-10">
                <h1 className="text-black text-3xl text-center">Update Book</h1>
                <div className="hero pt-10 pb-20 ">
                    <form onSubmit={handleupdate} className=" bg-blue-100 rounded-lg shadow-xl p-5 md:p-12 w-[250px] md:w-[900px]">
                        <div className="flex flex-col md:flex-row justify-center md:gap-12 gap-5">
                            <div className="flex flex-col space-y-5">
                                <input className="input input-bordered md:w-80" type="text" name="photo" src="" alt="" placeholder="Photo URL" defaultValue={loader.photo} />
                                <input className="input input-bordered md:w-80" type="text" name="name" id="" placeholder="Book name" defaultValue={loader.name} />
                                <input className="input input-bordered md:w-80" type="text" name="author" id="" placeholder="Author name" defaultValue={loader.author} />
                            </div>
                            <div className="flex flex-col space-y-5">
                            <div className="relative inline-block">
                                <input
                                    type="text"
                                    className="input input-bordered md:w-80 w-[205px]" name="category" defaultValue={loader.category} placeholder="Category"
                                    value={selectedOption}
                                    onClick={handleInputClick}
                                    readOnly autoFocus
                                />

                                {showOptions && (
                                    <ul className="absolute z-10 border p-2 mt-1 bg-white dark:bg-black dark:text-white">
                                        {options.map((option, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleOptionClick(option)}
                                                className="cursor-pointer hover:bg-gray-200 p-1"
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                                <input className="input input-bordered md:w-80" type="text" name="rating" id="" placeholder="Rating" defaultValue={loader.rating} />
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <button className="btn btn-primary px-10">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;