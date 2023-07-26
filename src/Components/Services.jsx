import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: 'CORPORATE EVENTS',
      description: 'Elevate Your Business Horizons  Crafting Professional Events that Inspire Success and Forge Lasting Connections',
      imageUrl: './src/assets/services/corporate.svg',
    },
    {
      title: 'CORPORATE EVENTS',
      description: 'Elevate Your Business Horizons  Crafting Professional Events that Inspire Success and Forge Lasting Connections',
      imageUrl: './src/assets/services/corporate.svg',
    },
    {
      title: 'CORPORATE EVENTS',
      description: 'Elevate Your Business Horizons  Crafting Professional Events that Inspire Success and Forge Lasting Connections',
      imageUrl: './src/assets/services/corporate.svg',
    },
    {
      title: 'CORPORATE EVENTS',
      description: 'Elevate Your Business Horizons  Crafting Professional Events that Inspire Success and Forge Lasting Connections',
      imageUrl: './src/assets/services/corporate.svg',
    },
    {
      title: 'CORPORATE EVENTS',
      description: 'Elevate Your Business Horizons  Crafting Professional Events that Inspire Success and Forge Lasting Connections',
      imageUrl: './src/assets/services/corporate.svg',
    },
    {
      title: 'CORPORATE EVENTS',
      description: 'Elevate Your Business Horizons  Crafting Professional Events that Inspire Success and Forge Lasting Connections',
      imageUrl: './src/assets/services/corporate.svg',
    },
  ];

  return (
    <section className="services bg-black py-10 mt-20 sm:py-10 md:py-12 lg:py-16">
      <div className="services-header text-center">
        <p className="text-gray-400 font-bold text-xl sm:text-2xl md:text-2xl tracking-[10px] pb-10 animate-pulse">Explore T.H.E.</p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-extrabold my-4 relative">
          OUR{' '}
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-purple-500">
            SERVICES
          </span>
        </h1>
      </div>

      <div className="services-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto mt-16 ">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="services-card bg-white shadow-lg rounded-3xl p-6"
          >
            <div className="p-6 bg-gray-50 rounded-[12px] w-20 h-20 flex items-center justify-center border-black border-[1px] mx-auto mb-4">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="p-4 text-center mt-6">
              <h3 className="text-black text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 h-20 overflow-hidden">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
