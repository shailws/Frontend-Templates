const Our_story = (props) => {
  const details2 = props.data3;
  return (
    <>
      <section className="Our_story ">
        {details2.map((x) => {
          return (
            <>
              <div className=" info1   ">
                <h1>{x.head1}</h1>
                <p>{x.para1}</p>
                <p>{x.para2}</p>
                <div>
                  <button className="btn btn-outline-danger">{x.btn1}</button>
                </div>
              </div>

              <img src={x.img1} alt="......" className="img1" />

              <img src={x.img2} alt="......" className="img2" />
            </>
          );
        })}
      </section>
    </>
  );
};
export default Our_story;
