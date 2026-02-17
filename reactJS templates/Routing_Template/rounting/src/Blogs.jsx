import "./style.css";
const Blogs = (props) => {
  const details = props.data2;
  return (
    <>
      <section className="blogs mt-5 ">
        {details.map((x) => {
          return (
            <>
              <h1 className="heading">{x.heading}</h1>
              <hr />
              <div className="blog_row row m-3">
                <div className="blog1 p-3 col-12 col-sm-6 col-lg-4  mt-3">
                  <div className="img11">
                    <img src={x.img1} alt="...." className="img-fluid" />
                  </div>
                  <h2 className="text-danger fs-1 fw-bold mt-3">{x.head1}</h2>
                  <p>{x.para1}</p>
                  <button className="btn btn-danger mt-4 mb-3">{x.btn1}</button>
                </div>

                <div className="blog1  p-3 col-12 col-sm-6 col-lg-4 mt-3">
                  <div className="img11">
                    <img src={x.img2} alt="...." className="img-fluid" />
                  </div>
                  <h2 className="text-danger fs-1 fw-bold mt-3">{x.head2}</h2>
                  <p>{x.para1}</p>
                  <button className="btn btn-danger mt-4 mb-3">{x.btn1}</button>
                </div>

                <div className="blog1 p-3 col-12 col-sm-6 col-lg-4 mt-3">
                  <div className="img11">
                    <img src={x.img3} alt="...." className="img-fluid" />
                  </div>
                  <h2 className="text-danger fs-1 fw-bold mt-3">{x.head3}</h2>
                  <p>{x.para1}</p>
                  <button className="btn btn-danger mt-4 mb-3">{x.btn1}</button>
                </div>
              </div>

              {/* ///////////////////////// */}

              <div className="gallery ">
                <h1 className="heading">{x.heading1}</h1>
                <hr />

                <div className="gallery_row row m-3 mt-5 ">
                  <img
                    src={x.img11}
                    alt="...."
                    className="galy img-fluid p-3  col-12 col-md-6 col-lg-4 mt-3"
                  />
                  <img
                    src={x.img12}
                    alt="...."
                    className="galy img-fluid p-3  col-12 col-md-6 col-lg-4 mt-3"
                  />
                  <img
                    src={x.img13}
                    alt="...."
                    className="galy img-fluid p-3  col-12 col-md-6 col-lg-4 mt-3"
                  />
                  <img
                    src={x.img14}
                    alt="...."
                    className="galy img-fluid p-3  col-12 col-md-6 col-lg-4 mt-3"
                  />
                  <img
                    src={x.img15}
                    alt="...."
                    className="galy img-fluid p-3  col-12 col-md-6 col-lg-4 mt-3"
                  />
                  <img
                    src={x.img16}
                    alt="...."
                    className="galy img-fluid p-3  col-12 col-md-6 col-lg-4 mt-3"
                  />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default Blogs;
