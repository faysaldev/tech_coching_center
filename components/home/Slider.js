import React from "react";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";

const SliderBanner = () => {
  return (
    <div className="h-[500px] w-full">
      <Slider>
        <img
          className="w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover"
          src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/288667186_136352132392598_5271764989521067558_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=973b4a&_nc_ohc=V0dRCdYaXRgAX8JV44J&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-5shts3R9rlfYtyqoXQfyfJEt1ucoLDtAythOciAgQ5A&oe=62AFDC70"
          alt=""
        />
        <img
          className="w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover"
          src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/288372134_136352219059256_3561134859191241306_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=973b4a&_nc_ohc=f3axuQw8df8AX_c5vXz&_nc_ht=scontent.fdac14-1.fna&oh=00_AT8XGh9my3kpT1t_3RytFKQEdT78HMywL8wVC5I68bR57A&oe=62B0E98E"
          alt=""
        />
        <img
          className="w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover"
          src="https://i.ibb.co/x5YK6pG/IMG-20220117-000415-656.jpg"
          alt=""
        />
      </Slider>
    </div>
  );
};

export default SliderBanner;
