import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Stars from "../components/Stars";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Read = () => {

    const [read, setRead] = useState({})
    const [loading, setLoading] = useState(true)
    const loader = useLoaderData()
    const { id } = useParams()

    const books = loader.find(book => book._id === id)

    useEffect(() => {
        setRead(books)
        setLoading(false)
    }, [])

    // const App = () => {
    //     const pdfRef = React.createRef();
      
    //     const handlePrint = ReactToPrint({
    //       content: () => pdfRef.current,
    //     });

    // console.log(read)

    return (
        <div>
            <h1 className="text-2xl text-center font-semibold text-black pb-6">Some contents description of this book</h1>
            <div>
                {
                    loading ? <div className="py-12">
                        <SkeletonTheme baseColor="#BBDEFB" highlightColor="#444">
                            <p className="mx-20">
                                <Skeleton highlightColor="gray" height={200} count={1} />
                            </p>
                        </SkeletonTheme>
                    </div> : <div className="pb-10">
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-[] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover md:h-[750px] md:w-[500px] lg:w-[700px] md:rounded-l-lg" src={read.photo} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white">Book name: {read.name}</h5>
                                <h1 className="text-lg text-black pb-3">{read.description}</h1>
                                <p className="text-lg text-black pb-3"> Written by: {read.author}</p>
                                <span className="flex items-center gap-3"><Stars stars={read.rating}></Stars><p>{read.rating}</p></span>
                                <p className="mb-3 pt-3 font-normal text-gray-700 dark:text-gray-400"><span className="text-lg font-semibold">Some content of book: </span>{read.read_description}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
            };
export default Read