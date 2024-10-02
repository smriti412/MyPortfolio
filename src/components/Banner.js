import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/MyProfessionalPicture.jpeg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = "I'm Smriti Pathak";
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    <span className="txt-rotate" dataPeriod="1000">
                      <span className="wrap">
                        {`Hi! `} {text}
                      </span>
                    </span>
                  </h1>
                  <p>
                    Innovative and results-driven Frontend Developer with 2+
                    years of experience in building and optimizing responsive
                    web applications using React.js, Redux, JavaScript, and
                    modern web technologies. Adept at collaborating with
                    cross-functional teams to deliver high-quality software
                    solutions that enhance user experience. Proficient in
                    developing dynamic UIs, implementing role-based access
                    control, and improving application performance through
                    efficient state management. Skilled in utilizing modern
                    frontend frameworks like Next.js, TypeScript, Tailwind CSS,
                    and SCSS for scalable, maintainable code. Experienced in
                    reducing post-deployment bugs through rigorous unit testing
                    and process improvements. A strong advocate for clean code
                    practices, component reusability, and leveraging caching
                    strategies to reduce load times. Proven ability to lead
                    small teams, mentor developers, and consistently meet
                    project deadlines.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
              }}
            >
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    style={{
                      height: "300px",
                      width: "300px",
                      border: "6px solid white",
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
