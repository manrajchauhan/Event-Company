import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCardSlider = () => {
  const eventsData = [
    {
      title: 'The Rapid Romance',
      rating: 4.5,
      participants: '40/60',
      status: 'In Progress',
      imageUrl: './src/assets/the.svg',
    },
    {
      title: 'Birthday Event',
      rating: 4.5,
      participants: '30/40',
      status: 'Completed',
      imageUrl: './src/assets/the.svg',
    },
    {
      title: 'Corporate Event',
      rating: 4.7,
      participants: '25/40',
      status: 'Upcoming',
      imageUrl: './src/assets/the.svg',
    },
    {
      title: 'Stand-Up Comedy',
      rating: 4.5,
      participants: '35/50',
      status: 'Upcoming',
      imageUrl: './src/assets/the.svg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 sm:py-10 md:py-12 lg:py-16">
      <div className="Events-header text-center mb-8">
        <h1 className="text-white text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-extrabold relative">
          OUR LIVE{' '}
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-violet-600 to-amber-400">
            EVENTS
          </span>
        </h1>
      </div>

      <Slider {...settings} className="overflow-hidden border-y border-white pb-10 bg-white">
        {eventsData.map((event, index) => (
          <div key={index} className="mx-2 px-5 mt-10">
            <div className="event-card bg-black from-purple-400 border-[4px] rounded-[16px] p-4 py flex">
              <div className="flex-grow">
                <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-violet-600 to-amber-400 text-xl font-extrabold mb-2 uppercase">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-400 mb-2">Rating: {event.rating}</p>
                <p className="text-sm text-gray-400 mb-2">Participants: {event.participants}</p>
                <p className="text-sm text-gray-400 mb-4">Status: {event.status}</p>
                <button className="bg-white text-black font-semibold px-3 py-1 rounded-lg hover:bg-violet-600 hover:text-white">
                  Buy Ticket
                </button>
              </div>
              <div className="flex-none w-20 h-20 rounded-lg overflow-hidden ml-4">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCardSlider;
