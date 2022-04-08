import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from "react-slick/lib/slider";
import { Sugerencia } from "../../data/PeliImageData";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "purple", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "purple", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 8,
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Sugerencias = () => {
  return (
    <div style={{ margin: "30px" }} className="carousel">
      <Slider {...carouselProperties}>
        {Sugerencia.map((item) => (
          <MovieCard item={item} />
        ))}
      </Slider>
    </div>
  );
};

const MovieCard = ({ item }) => {
  console.log(item);
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="card__multi-image"
        src={item}
        alt="movie"
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};
export default Sugerencias;
