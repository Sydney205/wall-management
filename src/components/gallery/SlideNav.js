import React from "react";

const SlideNav = ({ slideRoutes, setImageIndex }) => {

  return (
    <section className="slide-nav">
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[0]}`}
        alt="gal2"
        onClick={() => setImageIndex(0)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[1]}`}
        alt="gal1"
        onClick={() => setImageIndex(1)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[2]}`}
        alt="gal1"
        onClick={() => setImageIndex(2)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[3]}`}
        alt="gal1"
        onClick={() => setImageIndex(3)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[4]}`}
        alt="gal1"
        onClick={() => setImageIndex(4)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[5]}`}
        alt="gal1"
        onClick={() => setImageIndex(5)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[6]}`}
        alt="gal7"
        onClick={() => setImageIndex(6)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[7]}`}
        alt="gal6"
        onClick={() => setImageIndex(7)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[8]}`}
        alt="gal8"
        onClick={() => setImageIndex(8)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[9]}`}
        alt="gal1"
        onClick={() => setImageIndex(9)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[10]}`}
        alt="gal10"
        onClick={() => setImageIndex(10)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[11]}`}
        alt="gal3"
        onClick={() => setImageIndex(11)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[12]}`}
        alt="gal5"
        onClick={() => setImageIndex(12)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[13]}`}
        alt="gal1"
        onClick={() => setImageIndex(13)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[14]}`}
        alt="gal1"
        onClick={() => setImageIndex(14)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[15]}`}
        alt="gal1"
        onClick={() => setImageIndex(15)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[16]}`}
        alt="gal4"
        onClick={() => setImageIndex(16)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[17]}`}
        alt="gal11"
        onClick={() => setImageIndex(17)}
      />{" "}
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[18]}`}
        alt="gal1"
        onClick={() => setImageIndex(18)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[19]}`}
        alt="gal1"
        onClick={() => setImageIndex(19)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[20]}`}
        alt="gal1"
        onClick={() => setImageIndex(20)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[21]}`}
        alt="gal1"
        onClick={() => setImageIndex(21)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[22]}`}
        alt="gal1"
        onClick={() => setImageIndex(22)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[23]}`}
        alt="gal1"
        onClick={() => setImageIndex(23)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[24]}`}
        alt="gal1"
        onClick={() => setImageIndex(24)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[25]}`}
        alt="gal1"
        onClick={() => setImageIndex(25)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[26]}`}
        alt="gal1"
        onClick={() => setImageIndex(26)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[27]}`}
        alt="gal1"
        onClick={() => setImageIndex(27)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[28]}`}
        alt="gal1"
        onClick={() => setImageIndex(28)}
      />
      <img
        src={process.env.PUBLIC_URL + `${slideRoutes[29]}`}
        alt="gal1"
        onClick={() => setImageIndex(29)}
      />
    </section>
  );
};

export default SlideNav;
