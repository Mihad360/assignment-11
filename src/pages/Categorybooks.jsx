import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Stars from "../components/Stars";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Categorybooks = () => {

    const [getbooks, setGetbooks] = useState([])
    const [loading, setLoading] = useState(true)
    const loader = useLoaderData()
    const { id } = useParams()
    // const { photo, name, quantity, author, category, description, rating } = getbooks
    // console.log(loader)

    useEffect(() => {
        fetch('https://assignment-11-server-iota-eight.vercel.app/bookcards')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const findbook = data.find(cat => parseFloat(cat.id) === parseFloat(id))
                // console.log(findbook)
                const filterbooks = loader.filter(load => load.category === findbook.category)

                setGetbooks(filterbooks)
                // console.log(filterbooks)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading ? <div className="py-12">
                    <SkeletonTheme baseColor="#BBDEFB" highlightColor="#444">
                        <p className="mx-52">
                            <Skeleton highlightColor="gray" height={100} count={2} />
                        </p>
                    </SkeletonTheme>
                </div> : <div className="flex justify-center pb-12 px-4">
                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-12">
                        {
                            getbooks.map(books => <div key={books._id}>
                                <div>
                                    <h1 className="text-center text-3xl font-semibold py-8">The {books.category} book</h1>
                                    <div className="card card-compact md:w-[500px] bg-base-100 shadow-xl">
                                        <figure><img className="w-full h-[300px]" src={books.photo} alt={books.name} /></figure>
                                        <div className="card-body text-black">
                                            <h2 className="card-title text-2xl font-bold">{books.name} <br /> <h1 className="text-blue-600  font-bold">({books.category})</h1></h2>
                                            <p className="text-lg font-medium">Written by: {books.author}</p>
                                            <p className="flex items-center gap-3"><Stars stars={books.rating}></Stars><p>{books.rating}</p></p>
                                            <div className="card-actions justify-end">
                                                <Link to={`/details/${books._id}`}>
                                                    <button className="btn btn-primary">Details</button></Link>
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
    );
};

export default Categorybooks;