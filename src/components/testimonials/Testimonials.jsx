import "./testimonials.css"
import AVTR2 from "../../assets/avatar2.jpg"

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar:AVTR2,
        name: "Tike Myson",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem sequi impedit quam voluptates libero facere esse incidunt, hic, deleniti est sit sint magni distinctio nulla, nihil minus a laudantium error"
    },
    {
        avatar:AVTR2,
        name: "Mike Tyson",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem sequi impedit quam voluptates libero facere esse incidunt, hic, deleniti est sit sint magni distinctio nulla, nihil minus a laudantium error"
    },
    {
        avatar:AVTR2,
        name: "Tike Myson",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem sequi impedit quam voluptates libero facere esse incidunt, hic, deleniti est sit sint magni distinctio nulla, nihil minus a laudantium error"
    },
    {
        avatar:AVTR2,
        name: "Mike Tyson",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem sequi impedit quam voluptates libero facere esse incidunt, hic, deleniti est sit sint magni distinctio nulla, nihil minus a laudantium error"
    }
]


const Testimonials = () =>{
    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
                {
                    data.map(({avatar,name,review},index)=>{
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                    <small className="client__review">
                           {review}
                    </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials