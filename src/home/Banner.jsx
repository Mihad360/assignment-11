/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
            <div>
                <div className='container dark:bg-black' data-aos = 'fade-up'>
                <h1 className='text-3xl text-center font-bold text-blue-600 md:pb-8'>Welcome to Our Library</h1>
                <Swiper effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={4}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }
                    }
                    pagination={{el:'.swiper-pagination',clickable: true}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container'
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/YcHcQ2y/images.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/HBSDcvp/download-3.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/RNwwRXQ/download-2.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/CbMLk5y/download-4.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/s3vyb1T/download-5.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/L0PXMsx/61-CXvkfd-Xl-L-AC-UF1000-1000-QL80.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vdKmX9M/81-Yza7-Xmfj-L-AC-UF1000-1000-QL80.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/6NqwxLb/download-2.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/bRbs1R8/download.jpg" alt="slide_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://i.ibb.co/0n6gcZD/40779082.png" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/6tT16mX/download-1.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/GJ15W0d/Guns-Germs-And-Steel-by-Jared-Diamond.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/n03Sj42/48855.jpg" alt="slide_image" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://i.ibb.co/q07Z9XT/35606560.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5Fvh1ZZ/9781324093008-300.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/8PkYydm/download.jpg" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/p4vVvRs/91-BAWa-F5-Ui-L-AC-UF1000-1000-QL80.jpg" alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline">
                            </ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline">
                            </ion-icon>
                        </div>
                        <div className="swiper-pagination "></div>
                    </div>
                   

                </Swiper>
                
            </div>
            </div>
    );
};

export default Banner;