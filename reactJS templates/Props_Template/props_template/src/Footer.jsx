const Footer = (props) => {
  const details6 = props.data7;
  return (
    <>
      <section className="footer">
        {
            details6.map((x)=>{
                return(
                    <>
                        <section className="parent d-md-flex justify-content-evenly aling-items-center  ">
                            <div className="first mt-5">
                                <h1 className="fs-1 text-light">{x.h1}</h1>
                                <p className="fs-6 text-light">{x.p1}</p>
                                <p className="fs-6 text-light">{x.p2}</p>
                            </div>

                            <div className="first mt-5 ">
                                <h1 className="fs-1 text-light">{x.h2}</h1>
                                <p className="fs-6 text-light">{x.p11}</p>
                                <p className="fs-6 text-light">{x.p22}</p>
                            </div>


                            <div className="first mt-5 ">
                                <h1 className="fs-1 text-light">{x.h3}</h1>
                                <p className="fs-6 text-light">{x.p111}</p>
                                <p className="fs-6 text-light">{x.p222}</p>
                            </div>
                        </section>

                        
                            <img src={x.img1} alt="..."  className="mt-5"/>
                            <p className="fs-5 text-light mt-4">{x.para}</p>
       

                        <div className="combination mt-4">
                        <div className="icons   d-flex justify-content-evenly ">

                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-solid fa-envelope"></i>
                       </div>
                      </div>

                      <hr  className="text-light mt-5"/>
                      <p className="fs-5 text-light">{x.last}</p>
                    </>
                )
            })
        }
      </section>
    </>
  );
};
export default Footer;
