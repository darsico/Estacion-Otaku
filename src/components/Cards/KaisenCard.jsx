import { useEffect, useState } from "react";

const Kaisen = () => {
  const [kaisen, setKaisen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Kaisen")
      .then((response) => {
        return response.json();
      })
      .then((kaisen) => {
        setKaisen(kaisen);
      });
  }, []);

  const handleImg = (e) => {
    console.log(e.target.currentSrc);
  };
  return (
    <section className="card-cards-container">
      <div className="card-logo">
        <figure className="card-logo__image-container">
          <img className="card-log__image" src="https://i.postimg.cc/fR8H9RYJ/image-151.png"></img>
        </figure>
      </div>
      <div className="card-cards">
        {kaisen.map((element, index) => (
          <figure key={index} className="card-cards__image-container">
            <img src={element.img} alt="img" className="card-cards__image" onClick={handleImg} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Kaisen;
