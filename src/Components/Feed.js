import { List, ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Scrollbar,
  A11y,
} from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Scrollbar, A11y]);

function Feed() {
  // Mock Avatars
  const [avatars, setAvatars] = useState([]);
  const [posts, setPosts] = useState([]);

  // mock posts
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=19602021-f5337e663fa5c4a6fd94c0a04&q=people&image_type=photo&per_page=20"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.hits));
  }, []);
  console.log(posts);

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=19602021-f5337e663fa5c4a6fd94c0a04&q=portrait&image_type=photo&per_page=20"
    )
      .then((response) => response.json())
      .then((data) => setAvatars(data.hits));
  }, []);
  console.log(avatars);

  return (
    <div>
      <h2 className="title">Feed</h2>
      <div className="post-list">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          freeMode={true}
          freeModeSticky={false}
          mousewheel={true}
          direction={"vertical"}
          height={'auto'}
        >
          
            {avatars.map((avatar, index) => (
              <SwiperSlide key={index}>
                <Post
                  userAvatar={avatar.previewURL}
                  post={posts[index].largeImageURL}
                />
              </SwiperSlide>
            ))}
        
        </Swiper>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
}

export default Feed;
