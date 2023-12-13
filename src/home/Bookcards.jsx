import { useEffect, useState } from "react";
import Bookcard from "./Bookcard";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Bookcards = () => {

    const [bookcards, setBookcards] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://assignment-11-server-iota-eight.vercel.app/bookcards')
            .then(res => res.json())
            .then(data => {
                setBookcards(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="dark:bg-black dark:text-white">
            <h1 className="text-3xl text-black font-semibold text-center py-8 dark:text-white">Our Books category</h1>
            <div>
                {
                    loading ? <div className="py-12">
                        <SkeletonTheme baseColor="#BBDEFB" highlightColor="#444">
                            <p className="mx-52">
                                <Skeleton highlightColor="gray" height={100} count={2} />
                            </p>
                        </SkeletonTheme>
                    </div> : <div className="flex justify-center py-12 px-5 lg:px-0 pb-16">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {
                                bookcards.map(bookcard => <Bookcard key={bookcard.id} bookcard={bookcard}></Bookcard>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Bookcards;