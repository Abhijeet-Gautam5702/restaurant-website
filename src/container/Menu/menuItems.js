import { images } from "../../assets/images";

const menuItems = [
  {
    id: 1,
    name: "Chicken Fiesta",
    price: "50",
    rating: 4.5,
    label: "best seller",
    isVeg: false,
    img: images.gallery1,
    desc:"Juicy chicken cooked to perfection with our secret blend of spices, served with a side of crispy fries. Indulge in the mouth-watering flavor of our best-selling dish, perfect for any occasion.",
    tags: ["lunch", "non-veg", "drinks", "all"],
  },
  {
    id: 2,
    name: "Veg Fiesta",
    price: "30",
    rating: 3.8,
    label: "new arrival",
    isVeg: true,
    img: images.gallery2,
    desc:"A medley of fresh vegetables and exotic spices, grilled to perfection and served with a side of garlic naan. Experience the ultimate vegetarian delight, bursting with flavor and nutrition.",
    tags: ["lunch", "dinner", "veg", "all"],
  },
  {
    id: 3,
    name: "Townhouse ",
    price: "30",
    rating: 2.8,
    label: "",
    isVeg: true,
    img: images.gallery3,
    desc:" A classic favorite, our Townhouse sandwich features crispy bread, fresh veggies, and your choice of protein. Satisfy your hunger with this hearty and delicious sandwich, perfect for day.",
    tags: ["dinner", "veg", "drinks", "all"],
  },
  {
    id: 4,
    name: "Grilled Feast",
    price: "30",
    rating: 4.9,
    label: "best seller",
    isVeg: true,
    img: images.gallery4,
    desc:"Savor the flavors of our grilled feast, featuring marinated chicken and fresh veggies, served on a bed of rice. Treat your taste buds to this delightful meal.",
    tags: ["lunch", "dinner", "veg", "all"],
  },
];

export default menuItems;
