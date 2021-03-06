import { React, useState, useEffect } from "react";
import axios from "axios";
import Key from "../config.keys";
import { Row, Col, Container } from "react-bootstrap";

import back from "../videos/back2.mp4";

const GuestLecture = () => {
  const [items, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getEvents = async () => {
      try {
        const res = await axios.get(`${Key.BASE_API}/lectures`);
        setData([...res.data.data.lectures]);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="mainbox" style={{width:"100%"}}>
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
          opacity: ".2",
        }}
      >
        <source src={back} type="video/mp4" />
      </video> */}
      <div className="mainguest" style={{width:"100%"}}>
        <h1 className="guestheading">GUEST LECTURES</h1>
      </div>
      <div>
        <Container style={{ display: "block", maxWidth: "98%" }}>
          {items.map((item, index) => (
            <Row className="guestrow" style={{ marginTop: "0" }}>
              <Col xl={3} md={6} sm={12}>
                <img src={item.imageUrl} alt="img1" className="guestimg" />
              </Col>
              <Col xl={9} md={6} sm={12}>
                <h2 className="guestname">{item.name}</h2>
                <h5>Date: {item.date}</h5>
                <h5>Time: {item.time}</h5>
                <p>{item.desc}</p>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};

export { GuestLecture };
