'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('rooms', [{
        room_name : "Deluxe Room Suite",
        price : 400,
        category_name : "Deluxe",
        available : 5,
        main_image: "https://iili.io/JzARwhB.jpg",
        detail_image1 : "https://iili.io/JzW58WN.jpg",
        detail_image2 : "https://iili.io/JzW7BqP.jpg",
        detail_image3 : "https://iili.io/JzW7fLB.jpg",
        discount : 15,
        room_description: "The Deluxe Room Suite reflects luxury with meticulous design and a seamless blend of comfort and sophistication. The suite is adorned with classy furnishings, luxurious beds, and stylish decor, creating a subtle atmosphere. You can enjoy moments of relaxation with a spacious layout, including an inviting seating area, a well-equipped workspace, and a luxurious king-size bed, complemented by a luxurious bathroom with premium amenities and stunning views through large windows."
      },
      {
        room_name : "Deluxe Room Excutive",
        price : 200,
        category_name : "Deluxe",
        available : 5,
        main_image: "https://iili.io/JzW7EkG.jpg",
        detail_image1 : "https://iili.io/JzWadoQ.jpg",
        detail_image2 : "https://iili.io/JzWYMcF.jpg",
        detail_image3 : "https://iili.io/JzWl7us.jpg",
        room_description: "Deluxe Room Executive offers a luxurious stay experience with meticulous design and executive amenities. Featuring elegant furnishings and prioritized comfort, the room provides an exclusive ambiance and executive-level services. Guests can enjoy spacious quarters with a comfortable seating area, a luxurious king-size bed, and additional facilities catering to both business and relaxation needs."
      },
      {
        room_name : "Deluxe Room Standard",
        price : 130,
        category_name : "Deluxe",
        available : 5,
        main_image: "https://iili.io/Jz50j9t.jpg",
        detail_image1 : "https://iili.io/JzWRBjV.jpg ",
        detail_image2 : "https://iili.io/JzWAPEX.jpg",
        detail_image3 : "https://iili.io/JzWANrg.jpg",
        room_description: "Deluxe Room Standard provides a comfortable and functional accommodation with a simple yet elegant design. The room is equipped with comfortable furnishings, cozy beds, and friendly decor. With an efficient layout, guests can enjoy a balance between comfort and practical value, creating a pleasant stay experience for those who appreciate simplicity with a touch of class."
      },
      {
        room_name : "Clasic Junior Suite",
        price : 300,
        category_name : "Junior",
        available : 5,
        main_image: "https://iili.io/JzWNCtS.jpg",
        detail_image1 : "https://iili.io/JzWXrZX.jpg",
        detail_image2 : "https://iili.io/JzWe5ZB.jpg",
        detail_image3 : "https://iili.io/JzWeN6X.jpg",
        room_description: "Classic Junior Suite combines timeless elegance with modern comforts, offering a refined and nostalgic atmosphere. Featuring traditional decor and sophisticated furnishings, this suite provides a charming and comfortable retreat for guests seeking a touch of classic luxury."
      },
      {
        room_name : "Contemporary Junior Suite",
        price : 280,
        category_name : "Junior",
        available : 5,
        main_image: "https://iili.io/Jz5Ed22.jpg",
        detail_image1 : "https://iili.io/JzWXi6G.jpg",
        detail_image2 : "https://iili.io/JzWwe3b.jpg",
        detail_image3 : "https://iili.io/JzWwjn9.jpg",
        discount : 10,
        room_description: "Contemporary Junior Suite embodies a sleek and modern design aesthetic, blending cutting-edge style with comfort. With clean lines, chic decor, and the latest amenities, this suite caters to the preferences of guests who appreciate a more current and trendy ambiance during their stay."
      },
      {
        room_name : "Luxury Junior Suite",
        price : 500,
        category_name : "Junior",
        available : 5,
        main_image: "https://iili.io/Jz5ExrQ.jpg",
        detail_image1 : "https://iili.io/JzWWWqG.jpg",
        detail_image2 : "https://iili.io/JzWVucl.jpg",
        detail_image3 : "https://iili.io/JzWWIzF.jpg",
        room_description: "Luxury Junior Suite elevates the stay experience with opulent amenities and lavish touches. Designed for those seeking the pinnacle of indulgence, this suite boasts premium furnishings, luxurious bedding, and exclusive features that define a truly luxurious retreat."
      },
      {
        room_name : "Super Deluxe Room Excutive",
        price : 250,
        category_name : "Super Deluxe",
        available : 5,
        main_image: "https://iili.io/Jz5MUXe.jpg",
        detail_image1 : "https://iili.io/JzWEF87.jpg",
        detail_image2 : "https://iili.io/JzWE3aS.jpg",
        detail_image3 : "https://iili.io/JzWEque.jpg",
        room_description: "Super Deluxe Room Executive offers an elevated and executive-level stay, combining luxurious amenities with a sophisticated design. With premium furnishings and tailored services, this room is designed for guests who appreciate an extra layer of comfort and exclusivity during their stay."
      },
      {
        room_name : "Super Deluxe Room Grand",
        price : 600,
        category_name : "Super Deluxe",
        available : 5,
        main_image: "https://iili.io/Jz5WAKJ.jpg",
        detail_image1 : "https://iili.io/JzWGN5P.jpg",
        detail_image2 : "https://iili.io/JzWMrZu.jpg",
        detail_image3 : "https://iili.io/JzhHuWl.jpg",
        discount : 5,
        room_description: "Super Deluxe Room Grand takes luxury to new heights, providing a lavish and opulent experience. With grand decor, luxurious furnishings, and expansive spaces, this room is ideal for those seeking a truly indulgent and memorable stay."
      },
      {
        room_name : "Super Deluxe Room Standard",
        price : 180,
        available : 5,
        main_image: "https://iili.io/Jz5OGi7.jpg",
        category_name : "Super Deluxe",
        detail_image1 : "https://iili.io/Jzh9AcF.jpg",
        detail_image2 : "https://iili.io/JzhFAcN.jpg",
        detail_image3 : "https://iili.io/JzhHUsp.jpg",
        room_description: "Super Deluxe Room Standard offers a comfortable and well-appointed stay with a touch of luxury. Balancing practicality with refined design, this room provides guests with a superior level of comfort and convenience, making it an excellent choice for a deluxe yet accessible accommodation experience."
      },
      {
        room_name : "Standard Room Basic",
        price : 100,
        category_name : "Standard",
        available : 5,
        main_image: "https://iili.io/Jz5Glte.jpg",
        detail_image1 : "https://iili.io/JzW07UP.jpg",
        detail_image2 : "https://iili.io/JzW0uiQ.jpg",
        detail_image3 : "https://iili.io/JzW0TWx.jpg",
        room_description: "Standard Room Basic offers a straightforward and budget-friendly accommodation option, providing essential amenities for a comfortable stay. Ideal for travelers looking for a simple and cost-effective lodging experience."
      },
      {
        room_name : "Standard Room Family",
        price : 150,
        category_name : "Standard",
        available : 5,
        main_image: "https://iili.io/Jz5Mx5B.jpg",
        detail_image1 : "https://iili.io/JzW1vv1.jpg",
        detail_image2 : "https://iili.io/JzW1kYP.jpg",
        detail_image3 : "https://iili.io/JzhqIPj.jpg",
        room_description: "Standard Room Family caters to the needs of families, featuring additional space and amenities to accommodate a comfortable stay for multiple guests. With family-friendly furnishings and a welcoming atmosphere, this room is designed to ensure a pleasant stay for all members of the family."
      },
      {
        room_name : "Standard Room Comfort",
        price : 130,
        category_name : "Standard",
        available : 5,
        main_image: "https://iili.io/Jz5MVXn.jpg",
        detail_image1 : "https://iili.io/JzW0wJt.jpg",
        detail_image2 : "https://iili.io/JzW0N5X.jpg",
        detail_image3 : "https://iili.io/JzhK6rl.jpg",
        room_description: "Standard Room Comfort provides a well-rounded and cozy lodging experience, offering a balance between affordability and added comfort. With upgraded amenities and thoughtful touches, this room is suitable for guests seeking a bit more comfort during their stay without compromising on value."
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
