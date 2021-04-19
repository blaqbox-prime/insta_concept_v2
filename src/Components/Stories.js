import './Stories.css';
import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, A11y]);



function Stories() {
    const [stories, setStories] = useState([]);
    useEffect(() => {
      fetch(
        "https://pixabay.com/api/?key=19602021-f5337e663fa5c4a6fd94c0a04&q=portrait&image_type=photo&per_page=10"
      )
        .then((response) => response.json())
        .then((data) => setStories(data.hits));
    }, []);
  console.log(stories);


    return (
        <div className="Stories d-flex align-items-center">
           <Swiper
       spaceBetween={15}
       slidesPerView={5}
       mousewheel={true}
       onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       >
       {stories.map((image, index) => 
             <SwiperSlide key={image.id}>
              <Avatar src={image.previewURL} className="avatar"/>
            </SwiperSlide>
        )}

       </Swiper> 
        </div>
    )
}

export default Stories
