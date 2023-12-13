
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

const Sectionone = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return (
        <div className=" dark:bg-black dark:text-white">
            <h1 className="text-center text-3xl font-semibold text-black dark:text-white">Announcement</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 py-10" data-aos='fade-up'>
                <div className="space-y-7">
                    <h1 className="text-blue-600 font-bold text-2xl pl-5 lg:pl-0">⚫ All the Gold Stars by <br /> Rainesford Stauffer</h1>
                    <img className="rounded-lg px-5 md:px-0  md:pl-5 lg:pl-0" src="https://i.ibb.co/87K97dv/all-the-gold-stars-book-excerpt.webp" alt="" />
                </div>
                <div className="md:w-[600px] px-5">
                    <h1 className="text-xl font-medium pb-3">The next new arrival book with discount offer at <span className="text-blue-600 font-medium">25% between 10th-17th november</span></h1>
                    <p className="text-justify">The newest book from journalist and author Rainesford Stauffer focuses on the psychology around ambition. From getting gold stars on our homework in grade school, to attending the “right” college, to putting in extra hours at work, Stauffer evaluates how the cultural, personal and societal pressures around ambition have led to a nationwide burnout epidemic. She combines her personal narrative with interviews with students, parents, workers, psychologists and labor organizers to show the common pressures everyone is facing and the consequences that follow. By asking hard questions, she encourages readers to evaluate our own relationships with ambition so that we can reach our goals in a healthier way. </p>
                </div>
            </div>
        </div>
    );
};

export default Sectionone;