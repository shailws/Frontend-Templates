const Reservaton = (props) => {
  const details5 = props.data6;
  return (
    <>
      <section className="reservation ">
        {
            details5.map((x)=>{
                return(
                    <>
                        <h1 className="heading">{x.heading}</h1>

                        <p className="para1">{x.para1}</p>

                        <form className=" form mt-5 d-md-flex"> 

                            <div className="row1 mt-3">
                                <label className="form-label">Your Name</label>
                                <br></br>
                                <input type="text" placeholder="First name" className="form-control" />
                                <br />
                                <label className="form-label">Your Email</label>
                                <br />
                                <input type="email" placeholder="Your Email" className="form-control" />
                                <br />
                                <label className="form-label">Phone no:</label>
                                <br />
                                <input type="number" placeholder="Phone no" className="form-control"  />
                                
                            </div>

                            <div className="row2 mt-3">
                            
                                <label className="form-label">Person:</label>
                                <br />
                                <input type="number" placeholder="Person" className="form-control" />
                                <br />
                                <label className="form-label">Date:</label>
                                <br />
                                <input type="date" className="form-control" />
                                <br />
                                <label className="form-label">Time:</label>
                                <br />
                                <input type="time" className="form-control" />
                            </div>

                        </form>
                        <button className="btn btn-outline-danger w-75 mt-5" >{x.btn}</button>
                    </>
                )
            })
        }

      </section>
    </>
  );
};
export default Reservaton;
