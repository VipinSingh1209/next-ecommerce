'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsStarFill } from "react-icons/bs";
import { BsChatQuote } from "react-icons/bs";

const testimonials = [
  {
    name: "Amit Sharma",
    review: "I had an excellent experience with this service. The team was professional and delivered everything on time. The quality of work exceeded my expectations, and I would definitely recommend them to others.",
    rating: 5
  },
  {
    name: "Priya Verma",
    review: "The website they built for us looks fantastic. The design is clean, modern, and user-friendly. They were responsive to feedback and made sure every detail matched our brand perfectly.",
    rating: 5
  },
  {
    name: "Rohit Mehta",
    review: "I appreciate the dedication and communication throughout the project. Even though we had some last-minute changes, the team handled them smoothly. The final result was more than what we hoped for.",
    rating: 4
  },
  {
    name: "Sneha Patel",
    review: "Working with this team was a pleasure from start to finish. They understood our requirements clearly and provided creative solutions. The after-launch support was also very helpful.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    review: "The overall experience was great. The project was completed within the given timeline, and the functionality works seamlessly. I’m really happy with the attention to detail.",
    rating: 4
  },
  {
    name: "Neha Gupta",
    review: "They really take the time to understand your goals before starting work. The communication was consistent and clear throughout the process. I highly recommend their services to anyone looking for quality work.",
    rating: 5
  },
  {
    name: "Arjun Nair",
    review: "One of the best teams I’ve worked with! They were professional, patient, and always available to answer questions. The end product turned out exactly as I envisioned it.",
    rating: 5
  },
  {
    name: "Kiran Joshi",
    review: "The team delivered a beautiful and fully functional site. What impressed me most was their attention to small details and the quick response to all my queries. Great job overall!",
    rating: 4
  },
  {
    name: "Riya Das",
    review: "I’m really satisfied with the final outcome. The UI looks appealing, and the site performs smoothly. They went above and beyond to make sure everything was perfect before delivery.",
    rating: 5
  },
  {
    name: "Manish Kumar",
    review: "Very professional and reliable team. They helped us every step of the way, from concept to launch. I’m already planning to work with them again on our next project.",
    rating: 5
  }
];


const Testimonial = () => {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,    
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,  
                      dots: true,
                     infinite: true, 
                }
            },
              {
                breakpoint: 768,
                settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,  
                      dots: false,
                     
                }
            },
        ]

    }
   return (
    <div className='lg:px-32 px-4 sm:pt-20 pt-5 pb-10' >
        <h2 className='text-center sm:text-4xl mb-5 font-semibold' >Customer Review</h2>
        <Slider {...settings} >
          {testimonials.map((item, index) => (
            <div key={index} className='p-5 ' >
                <div className='border rounded-lg p-5 h-90 ' >
                    <BsChatQuote size={30} className='mb-3' />
                <p className='mb-5' >{item.review}</p>
                <h4 className='font-semibold' >{item.name}</h4>
                <div className='flex mt-1' >
                    {Array.from({length: item.rating}).map((_, i)=>(
                        <BsStarFill key={`star${i}`} className='text-yellow-400 ' size={20}/>
                    ))}
                </div>
                </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default Testimonial