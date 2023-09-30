import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Trailer.css";
import YouTube from "react-youtube";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 675 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 675, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderVideoUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
];
const Trailer = () => {
  var opts = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function _onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  var isVideo = false;

  const handleClick = () => {
    isVideo = true;
    opts.height = window.innerHeight;
    opts.width = window.innerWidth;
    console.log(isVideo);
  };
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderVideoUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index} onClick={handleClick}>
              <div className="min-w-[23rem] flex flex-row items-start justify-start gap-[1.5rem]">
                <div className="relative w-[13rem] h-[18rem]">
                  <img src={imageUrl.url} alt="movie" />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      {isVideo && (
        <div>
          <YouTube
            videoId={"BdLgWOpvGd4"} // defaults -> ''
            //id={""}                       // defaults -> ''
            //className={string}                // defaults -> ''
            //iframeClassName={string}          // defaults -> ''
            //style={object}                    // defaults -> {}
            //title={string}                    // defaults -> ''
            //loading={string}                  // defaults -> undefined
            opts={opts} // defaults -> {}
            onReady={_onReady} // defaults -> noop
            //onPlay={func}                     // defaults -> noop
            //onPause={func}                    // defaults -> noop
            //onEnd={func}                      // defaults -> noop
            //onError={func}                    // defaults -> noop
            //onStateChange={func}              // defaults -> noop
            //onPlaybackRateChange={func}       // defaults -> noop
            //onPlaybackQualityChange={func}    // defaults -> noop
          />
        </div>
      )}
    </div>
  );
};
export default Trailer;
