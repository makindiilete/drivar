import plant from "../assets/images/plants.png";
import animalOil from "../assets/images/animal-oil.png";
import equipment from "../assets/images/equipment.png";
import waste from "../assets/images/agric-waste.png";
import animalProduct from "../assets/images/animal-products.png";
import fruit from "../assets/images/fresh-fruits.png";
import vegetables from "../assets/images/vegetables.png";
import nuts from "../assets/images/nuts.png";
import rice from "../assets/images/rice.png";
import garri from "../assets/images/garri.png";
import potato from "../assets/images/potato.png";
import beans from "../assets/images/beans.png";
import eggs from "../assets/images/eggs.png";
import coffee from "../assets/images/coffee.png";
import onions from "../assets/images/onions.png";
import strawberry from "../assets/images/strawberry.png";

export const categories = [
  {
    id: 0,
    name: "Plant,Seeds& Bulbs",
    image: plant,
  },
  {
    id: 1,
    name: "Animal Oil",
    image: animalOil,
  },
  {
    id: 2,
    name: "Agricultural Equipment",
    image: equipment,
  },
  {
    id: 3,
    name: "Agricultural Waste",
    image: waste,
  },
  {
    id: 4,
    name: "Animal Products",
    image: animalProduct,
  },
  {
    id: 5,
    name: "Fresh Fruits",
    image: fruit,
  },
  {
    id: 6,
    name: "Fresh Vegetables",
    image: vegetables,
  },
  {
    id: 7,
    name: "Nuts and Kernels",
    image: nuts,
  },
  {
    id: 8,
    name: "Fresh Fruits",
    image: fruit,
  },
  {
    id: 9,
    name: "Plant, Seeds & Bulbs",
    image: plant,
  },
];

export const topProducts = [
  {
    name: "Rice",
    image: rice,
    company: "Afrisales Products",
    price: "N3,040.70 - N11,800.23",
    minimum: "50 Bags",
  },
  {
    name: "Garri",
    image: garri,
    company: "Adekunle Farms",
    price: "N23,270.65 - N89,301.45",
    minimum: "50 Bags",
  },
  {
    name: "Sweet Potato",
    image: potato,
    company: "Oluwaseun Stores",
    price: "N12,790.26 - N51,140.03",
    minimum: "50 Bags",
  },
  {
    name: "Beans",
    image: beans,
    company: "Khedi Farm",
    price: "N9,970.51 - N41,202.50",
    minimum: "50 Bags",
  },
  {
    name: "Eggs",
    image: eggs,
    company: "Afrisales Products",
    price: "N940.30 - N3050.70",
    minimum: "50 Crates",
  },
  {
    name: "Coffee Beans",
    image: coffee,
    company: "Yusuf Produce",
    price: "N93,000.00 - N100,000.00",
    minimum: "50 Bags",
  },
  {
    name: "Onions",
    image: onions,
    company: "Orezi Stores",
    price: "N44,860.90 - N87,090.13",
    minimum: "50 Bags",
  },
  {
    name: "Strawberry",
    image: strawberry,
    company: "Afrisales Products",
    price: "N1,380.20 - N3,880.29",
    minimum: "50 Bags",
  },
];

export const cartProducts = [
  {
    id: 1,
    name: "Rice",
    image: rice,
    company: "Afrisales Products",
    price: "N3,040.70 - N11,800.23",
    minimum: "50 Bags",
    quantity: 1,
  },
  {
    id: 2,
    name: "Garri",
    image: garri,
    company: "Adekunle Farms",
    price: "N23,270.65 - N89,301.45",
    minimum: "50 Bags",
    quantity: 5,
  },
  {
    id: 3,
    name: "Sweet Potato",
    image: potato,
    company: "Oluwaseun Stores",
    price: "N12,790.26 - N51,140.03",
    minimum: "50 Bags",
    quantity: 3,
  },
];
