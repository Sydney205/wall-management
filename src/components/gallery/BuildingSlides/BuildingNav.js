import React from "react";

const BuildingNav = ({ slideRoutes, setImageIndex }) => {

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
    </section>
  );
};

export default BuildingNav;
