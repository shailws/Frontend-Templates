import "./style.css"
const Services = (props) => {
    const details = props.data2;
  return(
    <> <section className="root1">
        <section className="services mt-5 ">
            {
                details.map((x)=>{
                    return(
                        <>
                            <h1 className="heading">{x.heading}</h1>
                            <hr />
                            <div className="service_row d-lg-flex justify-content-center justify-content-evenly align-items-center ">
                                <img src={x. img1} alt="....." className="img_cake img-fluid" />
                                <div className="txt_cake">
                                    <h1 className="fs-1 fw-bold text-danger">{x. head11}</h1>
                                    <h1 className="fs-1 fw-bold text-danger">{x. head22}</h1>
                                    <h3 className="fst-italic fs-2 fw-bold mt-4">{x.head2}</h3>
                                    <p className="mt-4">{x.para1}</p>
                                    <button className="btn btn-outline-danger  mt-3">{x.btn}</button>
                                </div>
                            </div>
                            {/* ///////////////////////////// */}

                            <section className="items_row row mt-5  ">

                                <div className="item1  p-3  mt-3     col-12 col-lg-4">
                                    <img src={x.img2} alt="..." className="round rounded-circle" height="150px"width="150px" />
                                    <h1 className="fw-bold mt-3">{x. sub1}</h1>
                                    <p className="mt-2">{x.txt}</p>
                                    <button className="btn btn-danger mt-3 mb-4">{x.btn2}</button>
                                </div>

                                <div className="item1  p-3 mt-3      col-12 col-lg-4">
                                    <img src={x.img3} alt="..." className="round rounded-circle" height="150px"width="150px" />
                                    <h1 className="fw-bold mt-3">{x. sub2}</h1>
                                    <p className="mt-2">{x.txt}</p>
                                    <button className="btn btn-danger mt-3 mb-4">{x.btn2}</button>
                                </div>
                            

                                <div className="item1  p-3 mt-3     col-12 col-lg-4">
                                    <img src={x.img4} alt="..." className="round rounded-circle" height="150px"width="150px" />
                                    <h1 className="fw-bold mt-3">{x. sub3}</h1>
                                    <p className="mt-2">{x.txt}</p>
                                    <button className="btn btn-danger mt-3 mb-4">{x.btn2}</button>
                                </div>
                            
                            
                            </section>
                        </>
                    )
                })
            }
        </section>
        </section>
    </>
  )
};
export default Services;
