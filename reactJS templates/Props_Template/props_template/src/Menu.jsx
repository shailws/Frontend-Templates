import "./style.css";
const Menu = (props) => {
    const details3 =props.data4;
  return(
    <>
        <section className="menus1 ">
            {
                details3.map((x)=>{
                    return(
                        <>
                            <h1 className="heading">{x.heading}</h1>
                            <div className="row_product">

                                <div className="product1_row   flex-directon-column ">

                                    <div className="sub p-1 d-flex  ">
                                    <div className=" p-1">
                                        <img src={x.img1} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish1}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                                    </div>

                                    <div className="sub p-1 d-flex ">
                                    <div className=" p-1">
                                        <img src={x.img2} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish2}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                                    </div>



                                    <div className="sub p-1 d-flex   ">
                                    <div className="p-1">
                                        <img src={x.img3} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish3}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                                    </div>



                                    <div className="sub p-1 d-flex  ">
                                    <div className=" p-1">
                                        <img src={x.img4} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish4}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                                    </div>



                                </div>




                                <div className="product2_row">

                                <div className="sub p-1 d-flex  ">
                                    <div className=" p-1">
                                        <img src={x.img5} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish5}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                               </div>

                               <div className="sub p-1 d-flex ">
                                    <div className=" p-1">
                                        <img src={x.img6} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish6}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                                    </div>

                                    <div className="sub p-1 d-flex  ">
                                    <div className=" p-1">
                                        <img src={x.img7} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish7}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                                    </div>


                                    <div className="sub p-1 d-flex ">
                                    <div className=" p-1">
                                        <img src={x.img8} alt="...." width="80px" height="80px" className="rounded-circle  mt-2"/>
                                    </div>

                                    <div className="txt1">
                                        <span style={{'font-size':'24px',
                                            'font-weight':"500"
                                        }}>{x.dish8}   </span>

                                        <span style={{'font-size':'20px',
                                            'font-weight':"500", 
                                            "color":"orange"
                                        }} >{x.money}</span>

                                        {/* <hr /> */}

                                        <p>{x.para11}</p>
                                    </div>
                                    </div>

                             </div>

                            </div>
                        </>
                    )
                })
            }

        </section>
    </>
  );
};
export default Menu;
