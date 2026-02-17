import "./style.css";

const Navigation = (props) => {
    const items = props.data2;
  return (
    <>
      <section className="header    bg-success     position-fixed  top-0 left-0">

        <div className="nav d-flex justify-content-between align-items-center">

            <img src="images/illustraition/logo-dark.png" alt="logo not found" className="logo" />

            <ul className="ul d-flex justify-content-evenly align-items-center d-none d-lg-flex  ">
                <li className="list">
                    <a href="#" className="text-decoration-none  fs-5">{items[0]}</a>
                </li>
                <li className="list">
                    <a href="#"  className="text-decoration-none  fs-5">{items[1]}</a>
                </li>
                <li className="list">
                    <a href="#"  className="text-decoration-none  fs-5">{items[2]}</a>
                </li>
                <li className="list">
                    <a href="#"  className="text-decoration-none  fs-5">{items[3]}</a>
                </li>
                <li className="list">
                    <a href="#"  className="text-decoration-none  fs-5">{items[4]}</a>
                </li>
            </ul>

            <div className=" d-lg-none">
              <i  class="fa-solid fa-bars" ></i>
            </div>
          
        </div>
      </section>
    </>
  );
};
export default Navigation;
