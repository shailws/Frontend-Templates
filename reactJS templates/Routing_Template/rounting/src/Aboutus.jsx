import "./style.css";

const Aboutus = (props) => {
  const details = props.data2;

  return (
    <section className="root1 mt-5 py-5 bg-light">
      <section className="aboutus container">
        {details.map((x, index) => (
          <div key={index}>
            <h1 className="heading text-center">{x.heading}</h1>
            <hr />

            <div className="about_row d-lg-flex justify-content-evenly align-items-start mt-4 gap-5">
              <div className="child1 mb-4 mb-lg-0">
                <h2 className="fs-1 fw-bold text-danger mb-3">{x.head1}</h2>
                <p>{x.para1}</p>
                <p>{x.para2}</p>
              </div>

              <div className="child2">
                <h1 className="fs-1 fw-bold text-dark mb-3">Points</h1>
                <h2 className="point">{x.point1}</h2>
                <hr />
                <h2 className="point">{x.point2}</h2>
                <hr />
                <h2 className="point">{x.point3}</h2>
              </div>
            </div>

            {/* Features Row */}
            <div className="mt-5 row goods_row">
              <div className="col-12 col-md-6 col-lg-4 p-3 text-center">
                <i className="fa-brands fa-discord fa-3x mb-3 text-danger"></i>
                <h3 className="fw-bold">EVENT CATERING</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam nisi facilis quisquam harum! Eaque imped.
                </p>
              </div>

              <div className="col-12 col-md-6 col-lg-4 p-3 text-center">
                <i className="fa-brands fa-pagelines fa-3x mb-3 text-success"></i>
                <h3 className="fw-bold">GLUTEN FREE OPTIONS</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam nisi facilis quisquam harum! Eaque imped.
                </p>
              </div>

              <div className="col-12 col-md-6 col-lg-4 p-3 text-center">
                <i className="fa-solid fa-cake-candles fa-3x mb-3 text-warning"></i>
                <h3 className="fw-bold">100% HOMEMADE</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam nisi facilis quisquam harum! Eaque imped.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Aboutus;
