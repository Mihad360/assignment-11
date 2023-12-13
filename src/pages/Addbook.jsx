/* eslint-disable no-unused-vars */
import { useState } from "react";
import Swal from "sweetalert2";


const Addbook = () => {

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

    const handleaddbook = e => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const read_description = form.read_description.value;
        const bookinfo = { photo, name, quantity, author, category, description, rating, read_description }

        console.log(bookinfo)
        fetch('https://assignment-11-server-iota-eight.vercel.app/allbooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookinfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Done!',
                        'Book added successfully',
                        'success'
                    )
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className=" pt-10">
                <h1 className="text-black text-3xl text-center">Add Book</h1>
                <div className="hero pt-10 pb-20 ">
                    <form onSubmit={handleaddbook} className=" bg-blue-100 rounded-lg shadow-xl p-5 md:p-12  md:w-[900px]">
                        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12">
                            <div className="flex flex-col space-y-5">
                                <input className="input input-bordered  md:w-80" type="text" name="photo" src="" alt="" placeholder="Photo URL" />
                                <input className="input input-bordered md:w-80" type="text" name="name" id="" placeholder="Book name" />
                                <input className="input input-bordered md:w-80" type="text" autoFocus name="quantity" id="" placeholder="Quantities" />
                                <input className="input input-bordered md:w-80" type="text" name="author" id="" placeholder="Author name" />
                            </div>
                            <div className="flex flex-col space-y-5">
                                <div className="relative inline-block">
                                    <input
                                        type="text"
                                        className="input input-bordered md:w-80 w-[205px]" name="category"  placeholder="Category"
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
                                <input className="input input-bordered md:w-80" type="text" name="description" id="" placeholder="Description" />
                                <input className="input input-bordered md:w-80" type="text" name="rating" id="" placeholder="Rating" />
                                <input className="input input-bordered md:w-80" type="text" name="read_description" id="" placeholder="Read description" />
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <button className="btn btn-primary px-10">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addbook;