/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

const Bookcard = ({ bookcard }) => {

    // eslint-disable-next-line no-unused-vars
    const { name, id, category, image } = bookcard;

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

    return (
        <div className="">
            <div className="card md:card-side shadow-xl pt-8 flex-col md:flex-row" data-aos = "fade-right">
                <figure><img className="h-72 w-80" src={image} alt="Book" /></figure>
                <div className="card-body bg-blue-200 dark:bg-black">
                    <h2 className="card-title text-xl">{name}</h2>
                    <p className="text-2xl uppercase font-bold text-blue-600">{category}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/categorybooks/${id}`}>
                        <button className="btn btn-primary">All books</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookcard;