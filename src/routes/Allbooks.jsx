import { Link, useLoaderData } from "react-router-dom";
import Stars from "../components/Stars";
import { useState, useEffect } from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Allbooks = () => {

    const [set, bookSet] = useState(true)
    const [loading, setLoading] = useState(true)
    const loader = useLoaderData()
    // console.log(loader)

    useEffect(() => {
        setLoading(false)
    }, [])

    const filter = set ? loader : loader.filter(item => item.quantity > 0)

    return (
        <div>
            <h1 className="text-center text-2xl text-black font-semibold pb-5 flex  justify-evenly"><span>All of our books</span>
                <button onClick={() => bookSet(false)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Filter
                    </span>
                </button>
            </h1>
            <div>
                {
                    loading ? <div className="py-12">
                        <SkeletonTheme baseColor="#BBDEFB" highlightColor="#444">
                            <p className="mx-20 flex items-center justify-between">
                                <Skeleton highlightColor="gray" height={200} width={200} circle={50} count={1} />
                                <Skeleton highlightColor="gray" height={200} width={200} circle={50} count={1} />
                                <Skeleton highlightColor="gray" height={100} width={100} circle={50} count={1} />
                            </p>
                            <p className="mx-20 flex justify-between items-center">
                                <Skeleton highlightColor="gray" height={150} width={300} count={2} />
                                <Skeleton highlightColor="gray" height={150} width={300} count={2} />
                                <Skeleton highlightColor="gray" height={150} width={300} count={2} />
                            </p>
                        </SkeletonTheme>
                    </div> : <div className="flex justify-center px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                filter.map(load => <div key={load._id}>
                                    <div>
                                        <div className="card w- bg-base-100 shadow-xl">
                                            <figure><img className="w-full h-72" src={load.photo} alt="Books" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-titl text-2xl text-blue-600 font-bold">
                                                    {load.name}

                                                </h2>
                                                <p className="text-lg font-medium">Writen by: {load.author}</p>
                                                <p>Category: {load.category}</p>
                                                <div className="card-actions justify-between items-center">
                                                    <div className="flex items-center gap-3"><Stars stars={load.rating}></Stars><p>{load.rating}</p></div>
                                                    <div className="">
                                                        <Link to={`/update/${load._id}`}>
                                                            <button className="btn btn-primary">Update</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Allbooks;