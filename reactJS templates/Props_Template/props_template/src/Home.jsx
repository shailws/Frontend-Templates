const Home = (props) => {
  const details1 = props.data1;
  return (
    <>
      <section className="home   d-flex align-items-center justify-content-center ">
     {
        details1.map((x) => {
          return (
            <>
            <div className="booking  ">
                 <h1 className="text-light">{x.one}</h1>

                <p className="text-light">{x. two}</p>

                <button type="button" className=" btn btn-danger">{x. three}</button>

            </div> 
            </>
          );
        })

     }
      </section>
    </>
  );
};
export default Home;
