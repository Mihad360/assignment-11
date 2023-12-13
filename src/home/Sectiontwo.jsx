
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

const Sectiontwo = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return (
        <div className="dark:bg-black dark:text-white">
            <div className="py-8 ">
                <h1 className="text-3xl font-semibold text-black text-center pb-12">Customer reviews</h1>
                <div className="image text-white py-40 flex flex-col lg:flex-row justify-center items-center gap-6 dark:bg-black dark:text-white">
                    <div data-aos='fade-right' className="card card-side shadow-xl flex-col md:flex-row md:p-10  bg-white w-64 md:w-[600px] dark:bg-black dark:text-white">
                        <figure><img className="w-32 rounded-full" src="https://i.ibb.co/SJNKxtT/Klaas-Kelseyx260x260-3.jpg" alt="Movie" /></figure>
                        <div className="card-body text-black dark:text-white">
                            <h2 className="card-title ">Asley samsy</h2>
                            <p className="md:w-64 text-justify">I have just borrowed the science category book from you and they are very nice in customization.I always buyed books from here and i really like the science books.So for your great service i would like to give it 5 stars rating.Thank you!!</p>
                            <div className="card-actions justify-end flex items-center">
                                <div className="text-xl font-medium">5.0</div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                            <h1 className="text-end text-xl font-semibold">#The Stories</h1>
                        </div>
                    </div>

                    <div data-aos='fade-left' className="card card-side bg-base-100 shadow-xl flex-col md:flex-row md:p-10 w-64 md:w-[600px] dark:bg-black dark:text-white">
                        <figure><img className="w-32 rounded-full" src="https://i.ibb.co/72PmF9Z/images.jpg" alt="Movie" /></figure>
                        <div className="card-body text-black dark:text-white">
                            <h2 className="card-title">Jason parker</h2>
                            <p className="md:w-64 text-justify">Recently i have borrowed the history category books from you and i really like the book and its presentation.i would like to thanks the writter and also you for the service and i rating that 5 stars.Thank you for your customization also..</p>
                            <div className="card-actions justify-end flex items-center">
                            <div className="text-xl font-medium">5.0</div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                            <h1 className="text-end text-xl font-semibold">#History</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectiontwo;