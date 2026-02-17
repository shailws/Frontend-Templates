import "./style.css";
const Home = (props) => {
  const details = props.data;
  return (
    <>
      <section className="home d-flex justify-content-center align-items-center">
        <div className="sum_home ">
          {details.map((x) => {
            return (
              <>
                <h3>{x.head1}</h3>
                <h1>{x.head2}</h1>
                <p>{x.para1}</p>
                <button className="btn btn-danger  mt-3">{x.btn}</button>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
