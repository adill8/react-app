const productDetail = [
    {
      id: 1,
      name: 'Syltherine',
      description: `The Syltherine is a sleek and modern cafe chair crafted with precision.
  It offers both comfort and contemporary aesthetics.
  Perfect for cozy coffee corners or modern dining spaces.
  Built with high-quality wood and durable cushions.
  Its compact design fits well in smaller rooms.
  A stylish choice that enhances any interior setup.`,
      salePrice: 'Rp 2.500.000',
      image: '/images/Table.png',
    },
    {
      id: 2,
      name: 'Leviosa',
      description: `Leviosa combines elegance with function for your everyday seating.
  Its lightweight structure makes it easy to move and rearrange.
  The chair is made with a soft fabric that is comfortable for long hours.
  Minimalist in design but big on impact in any room.
  A versatile piece that complements various decor styles.
  Ideal for cafes, study rooms, and living spaces.`,
      salePrice: 'Rp 2.500.000',
      image: '/images/Chair.png',
    },
    {
      id: 3,
      name: 'Lolito',
      description: `Lolito is a luxury sofa designed to offer maximum comfort.
  Its wide seating area and plush cushions create a cozy experience.
  Perfect for movie nights, family gatherings, or lazy weekends.
  Wrapped in premium-quality upholstery with detailed stitching.
  Sturdy wooden frame ensures long-lasting durability.
  The perfect blend of style and relaxation for any living room.`,
      salePrice: 'Rp 7.000.000',
      image: '/images/Royal-sofa.png',
    },
    {
      id: 4,
      name: 'Respira',
      description: `Respira offers a refreshing take on outdoor furniture.
  Includes a compact table and comfortable stools.
  Made with weather-resistant materials for long-term use.
  Ideal for gardens, balconies, or patios.
  Easy to clean and maintain for outdoor convenience.
  Combines natural beauty with practical design.`,
      salePrice: 'Rp 500.000',
      image: 'https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 5,
      name: 'Grifo',
      description: `Grifo is a stylish night lamp that sets the mood just right.
  Its soft glow adds warmth and calmness to your room.
  Crafted from high-quality materials with a modern finish.
  Compact size fits well on bedside tables or desks.
  Energy-efficient LED ensures long-lasting use.
  Perfect for reading, relaxing, or working late hours.`,
      salePrice: 'Rp 1.500.000',
      image: '/images/Lamp.png',
    },
    {
      id: 6,
      name: 'Mugoo',
      description: `Mugoo is a modern sofa designed for small and stylish spaces.
  Its firm yet comfy cushioning supports your posture perfectly.
  Features a trendy L-shape layout, ideal for corner placement.
  Soft fabric finish and sleek legs create a polished look.
  Easy to clean, making it family and pet-friendly.
  An excellent choice for apartments and compact lounges.`,
      salePrice: 'Rp 150.000',
      image: '/images/L-shape sofa.png',
    },
    {
      id: 7,
      name: 'Lolito',
      description: `This version of the Lolito brings luxury and space together.
  Spacious enough for a family of four to relax together.
  The double-layered cushioning ensures extra softness.
  High-end fabric with a velvet touch gives a royal feel.
  Ideal for large living rooms with modern interiors.
  A masterpiece of comfort, elegance, and utility.`,
      salePrice: 'Rp 7.000.000',
      image: 'https://images.unsplash.com/photo-1655149555309-2c8be470d09e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4cnklMjBiaWclMjBzb2ZhfGVufDB8fDB8fHww',
    },
    {
      id: 8,
      name: 'Sofa',
      description: `This outdoor sofa is the perfect companion for breezy evenings.
  Made with weather-proof cushions and sturdy metal frame.
  Its neutral tones blend well with garden or patio decor.
  Wide seating area makes it comfortable for long use.
  Quick-dry material makes it low-maintenance and practical.
  Designed for both relaxation and entertaining guests.`,
      salePrice: 'Rp 500.000',
      image: '/images/Sofa.jpg',
    },
    {
      id: 9,
      name: 'Syltherine',
      description: `A repeat of the elegant Syltherine chair with the same premium features.
  Ideal for matching sets in dining areas or cafes.
  Classic design with a modern twist for flexible use.
  Smooth surface and balanced legs provide a stable seat.
  Easily pairs with wood or glass tables.
  An affordable upgrade to your room's ambiance.`,
      salePrice: 'Rp 2.500.000',
      image: '/images/Table.png',
    },
    {
      id: 10,
      name: 'Leviosa',
      description: `This repeat Leviosa offers the same light and elegant comfort.
  Its solid back support promotes a healthy posture.
  The wooden legs give a rustic yet refined charm.
  Can be used as an accent chair in bedrooms too.
  Very lightweight for moving around your space.
  An ideal pick for minimalistic lovers.`,
      salePrice: 'Rp 2.500.000',
      image: '/images/Chair.png',
    },
    {
      id: 11,
      name: 'Mugoo',
      description: `Repeat of the Mugoo stylish sofa for those wanting a pair.
  Its modern look elevates any corner it’s placed in.
  Built for comfort as well as visual appeal.
  A favorite for renters and first-time buyers.
  Strong construction at an affordable price.
  Easily customizable with throw pillows or covers.`,
      salePrice: 'Rp 150.000',
      image: '/images/L-shape sofa.png',
    },
    {
      id: 12,
      name: 'Lolito',
      description: `Yet another version of the premium Lolito luxury sofa.
  Consistent craftsmanship with beautiful finish.
  Big enough for stretching out after a long day.
  Looks stunning with dark wooden flooring.
  A centerpiece sofa that speaks sophistication.
  The ultimate comfort zone for every home.`,
      salePrice: 'Rp 7.000.000',
      image: 'https://images.unsplash.com/photo-1655149555309-2c8be470d09e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4cnklMjBiaWclMjBzb2ZhfGVufDB8fDB8fHww',
    },
    {
      id: 13,
      name: 'Sofa',
      description: `Repeat of the outdoor Sofa, perfect for open-air lounging.
  Comfortable even during long sitting sessions.
  A sleek look for your patio or terrace.
  Easy to match with coffee tables and ottomans.
  A go-to choice for evening get-togethers.
  Value for money with long-lasting build.`,
      salePrice: 'Rp 500.000',
      image: '/images/Sofa.jpg',
    },
  ];
  export default productDetail;