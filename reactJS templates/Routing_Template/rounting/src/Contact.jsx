const Contact = (props) => {
  const details = props.data2;
  return (
    <>
      <section className="contact mt-5">
        {details.map((x) => {
          return (
            <>
              <h1 className="heading">{x.heading}</h1>
              <hr />
              <div className="contact_row d-lg-flex justify-content-center align-items-center  mt-5 ">
                <div className="one mt-3">
                  <h2 className=" fw-bold">{x.sub_head}</h2>
                  <p className="mt-4">{x.para1}</p>
                  <div className="icons mt-4">
                    <i class="fa-solid fa-location-dot"></i>
                    <span> :Imaginary cake City 2002</span>
                    <br />
                    <i class="fa-solid fa-phone"> </i>
                    <span> :+00 (0) 1234 5678</span>
                    <br />
                    <i class="fa-solid fa-envelope"></i>
                    <span> :email@company.com</span>
                  </div>

                  <form action="#" className="mt-4 p-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                    <br />
                    <input
                      type="email"
                      placeholder="Email ID"
                      className="form-control"
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                    />
                    <br />
                    <textarea
                      placeholder="Enter your message "
                      className="form-control"
                    ></textarea>
                    <br />
                    <button className="mt-3 btn btn-danger">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>

                <div className="two mt-3 d-none d-lg-flex ">
                  <img src={x.img1} alt="----" className="img-fluid" />
                </div>
              </div>

              {/* //////////////// */}
              <div className="row ">
                <div className="footer col-12 mt-5">
                  <img src={x.img2} alt="------" className="mt-5" />
                  <hr />
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="icon_row d-flex justify-content-center justify-content-evenly align-items-center  mt-4">
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-linkedin"></i>
                      <i class="fa-brands fa-youtube"></i>
                      <i class="fa-brands fa-instagram"></i>
                    </div>
                  </div>

                  <div className=" mt-4 d-lg-flex justify-content-center justify-content-evenly align-items-center">
                    <div className="info1">
                      <h3 className="fs-bold text-light">About us</h3>
                      <p className="text-light">
                        Donut tiramisu caramels pastry Candy canes croissant
                        muffin marshmallow cake.
                      </p>
                    </div>

                    <div className="info2">
                      <h3 className="fs-bold text-light">Opening Hours:</h3>
                      <p className="text-light">
                        Monday to Friday: ---- 7 a.m. to 7 p.m.
                      </p>
                      <hr className="container" />
                      <p className="text-light">
                        Weekends / Holidays:----{" "}
                        <span className="btn btn-danger">Colosed</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <h4 className="text-light fw-bold mt-5">
                    Copyright © 2016 - Designed by Ingrid Kuhn
                  </h4>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default Contact;
