import "./style.css";
const Page = (props) => {
  const details4 = props.data5;
  return (
    <>
      <section className="pages">
        {details4.map((x) => {
          return (
            <>
              <h1 className="heading">{x.heading}</h1>

              <div className="page_row">

               <div className="one">
                 <img src={x. img1} alt="....."  className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t1}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>


               <div className="one">
                 <img src={x. img2} alt="....."  className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t2}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>


               
               <div className="one">
                 <img src={x. img3} alt="....."  className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t3}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>


               
               <div className="one">
                 <img src={x. img4} alt="....."  className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t4}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>
                  

              
              
               <div className="one">
                 <img src={x. img5} alt="....."  className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t5}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>



               
               <div className="one">
                 <img src={x. img6} alt="....."  className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t6}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>



               
               <div className="one">
                 <img src={x. img7} alt="....." className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t7}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>
                


                
               <div className="one">
                 <img src={x. img8} alt="....." className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t8}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>



               
               <div className="one">
                 <img src={x. img9} alt="....."  className="page_img" />

                 <div className="txt p-2 mt-3">
                    <h3>{x.t9}</h3>
                    <p >{x. para1}</p>
                    <hr />
                    <div className="d-flex justify-content-around ">
                        <img src={x.  prof_img} alt="....." width="40px" height="40px" className="rounded-circle" />
                        <p>{x.name}</p>
                        <i class="fa-sharp-duotone fa-solid fa-calendar-days"></i>
                        <p>{x. date}</p>
                    </div>
                 </div>
               </div>


              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default Page;
