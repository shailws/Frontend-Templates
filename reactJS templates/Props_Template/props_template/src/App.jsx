// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Footer from "./Footer";
import Reservaton from "./Reservation";
import Page from "./Pages";
import Menu from "./Menu";
import Our_story from "./Our_story";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  // const [count, setCount] = useState(0)

  const nav = ["HOME", "OUR STORY", "MENUS", "PAGES", "RESERVATION"];

  const homy = [
    {
      one: "Amazing Food, Fresh Products & Wine",
      two: "My veggie-packed take on a deli-style pasta salad! I swap spiralized summer squash for half the noodles and a creamy tahini dressing.",
      three: "Book A Table",
    },
  ];

  const story = [
    {
      head1: "Our Story",
      para1:
        "Our buzzy food-hall style concept is inspired by international dining styles, especially in Asia. Explore the following fast-action food stations as busy chefs perform.",
      para2:
        "Enjoy a verdant Garden to Glass experience. It’s in the view, it’s reflected in the design, and it infuses many drinks. In fact, all our delicious fresh ingredients are sustainably picked from our Jemima’s Kitchen Garden. Our flourishing range of cocktails, spirits, beers and wines are all made with integrity and offer something for every guest.",
      btn1: "Read More->",
      img1: "/images/illustraition/m1.jpg",
      img2: "/images/illustraition/m2.jpg",
    },
  ];

  const menuee = [
    {
      heading: "Our Menus",
      para11: "A reader will be distracted by the readable",
      money: "$25.00",

      dish1: "Black bean ",
      dish2: "Onion Pizza",
      dish3: "Chicken b..",
      dish4: "Veg Pizza",
      dish5: "Cordon Bleu",
      dish6: "Boerewors",
      dish7: "Tarte Tatin",
      dish8: "Green Tea",

      img1: "/images/illustraition/1.jpg",
      img2: "/images/illustraition/2.jpg",
      img3: "/images/illustraition/3.jpg",
      img4: "/images/illustraition/4.jpg",
      img5: "/images/illustraition/5.jpg",
      img6: "/images/illustraition/6.jpg",
      img7: "/images/illustraition/7.jpg",
      img8: "/images/illustraition/8.jpg",
    },
  ];

  const pagess = [
    {
      heading: "Our Pages",

      img1: "/images/illustraition/111.jpg",
      img2: "/images/illustraition/222.jpg",
      img3: "/images/illustraition/333.jpg",
      img4: "/images/illustraition/444.jpg",
      img5: "/images/illustraition/555.jpg",
      img6: "/images/illustraition/666.jpg",
      img7: "/images/illustraition/777.jpg",
      img8: "/images/illustraition/888.jpg",
      img9: "/images/illustraition/111.jpg",

      t1: "Giant Multi-Stuffed Soft Pretzel",
      t2: "Romantic Breakfast for Two",
      t3: "Macchiato Pumpkin Soup",
      t4: "Tiny Apple Pies with Cinnamon",
      t5: "Cinnamon Buns for Two",
      t6: "Slow Cooker Coconut Curry",
      t7: "Perfect for a Birthday Party",
      t8: "5 Recipes Almost Too Cute To Eat",
      t9: "Vegetarian Breakfast for You",

      para1: "Ut enim ad minim veniamquis nostrud exercitation ullamco",

      name: "Calvin Carlo",
      date: "April 10, 2024",

      prof_img: "/images/illustraition/01.jpg",
    },
  ];

  const reserv = [
    {
      heading: "Reservation",
      para1:
        "We make it a priority to offer flexible services to accomodate your needs",
      btn: "Book a table",
    },
  ];

  const foot = [
    {
      h1: "Open Hours",
      h2: "Reservation",
      h3: "Address",

      p1: "Monday - Friday: 10:00AM - 11:00PM",
      p2: "Saturday - Sunday: 9:00AM - 1:00PM",

      p11: "+152 534-468-854",
      p22: "contact@example.com",

      p111: "C/54 Northwest Freeway,",
      p222: "Suite 558, USA 485,",

      img1: "/images/illustraition/white-icon.png",
      para: "Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs",

      last: "© 2024 Veganfry. Design with  by Shreethemes.",
    },
  ];
  return (
    <>
      <Home data1={homy} />
      <Navigation data2={nav} />
      <Our_story data3={story} />
      <Menu data4={menuee} />
      <Page data5={pagess} />
      <Reservaton data6={reserv} />
      <Footer data7={foot} />
    </>
  );
}

export default App;
