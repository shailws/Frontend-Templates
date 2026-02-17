// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navigation";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Blogs from "./Blogs";
import Contact from "./Contact";
function App() {
  // const [count, setCount] = useState(0)
  const Navy = [
    {
      img1: "/images/illustraition/logo.png",
    },
  ];
  const Homy = [
    {
      head1: "We make cakes for",
      head2: "YOUR EVENT",
      para1:
        "Not metus ali quam eros egentliqam erat voiutpal phasellus ac sodales fells loremi ipsuel iorens..",
      btn: "CONTACT US",
    },
  ];

  const About1 = [
    {
      heading: "About Us",
      head1: "Baking Delicious cakes since 1990",
      point1: "Social Responsability",
      point2: "Mission Statement",
      point3: "Value Added Services",
      para1:
        "Placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget,Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam non Doloreiur qui commolu ptatemp dolupta orem retibusam andigen Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam non metus.",
      para2:
        "Placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget,Fusce mollis imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis.",
    },
  ];
  const service1 = [
    {
      heading: "Our Services",
      head11: "You can't buy happiness",
      head22: "but you can buy CAKE",
      head2: "And that's kind of the same thing!",
      para1:
        "Placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget,Fusce mollis imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi.",
      btn: "CONTACT US TODAY",
      img1: "/images/illustraition/servicesmain.png",
      img2: "/images/illustraition/service1.jpg",
      img3: "/images/illustraition/service2.jpg",
      img4: "/images/illustraition/service3.jpg",
      sub1: "WEDDINGS",
      sub2: "CORPORATE EVENTS",
      sub3: "BIRTHDAYS",
      txt: " Dicta sapiente nobis maiores  nobis quam quaerat! Voluptate, quae tenetur eos magni eius ullam error aspernatur fugiat.",
      btn2: "MORE",
    },
  ];
  const Blogsss = [
    {
      heading: "Latest Blog Posts",
      img1: "/images/illustraition/menu2.jpg",
      img2: "/images/illustraition/blog1.jpg",
      img3: "/images/illustraition/menu1.jpg",
      head1: "Cakepops Racipe",
      head2: "Homemade Pies",
      head3: "Birthday Cakes",
      para1:
        "Lorem, ipsum dolor sit amet . Placeat, voluptatibus earum maxime perferendis possimus ullam neque veritatis aliquid",
      btn1: "READ MORE",
      heading1: "Our Gallery",
      img11: "/images/illustraition/gallery2.jpg",
      img12: "/images/illustraition/gallery9.jpg",
      img13: "/images/illustraition/gallery5.jpg",
      img14: "/images/illustraition/gallery6.jpg",
      img15: "/images/illustraition/gallery7.jpg",
      img16: "/images/illustraition/gallery8.jpg",
    },
  ];
  const contact1 = [
    {
      heading: "Contact Us",
      sub_head: "Get in touch with us",
      para1:
        "Consectetur adipiscing elit Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia.",
      btn1: "SEND MESSAGE",
      img1: "/images/illustraition/contact_bg.png",
      img2: "/images/illustraition/logo.png",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar data1={Navy} />
        <Routes>
          <Route path="/" element={<Home data={Homy} />}></Route>
          <Route path="/About" element={<Aboutus data2={About1} />}></Route>
          <Route
            path="Services"
            element={<Services data2={service1} />}
          ></Route>
          <Route path="/Blogs" element={<Blogs data2={Blogsss} />}></Route>
          <Route path="/Contact" element={<Contact data2={contact1} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
