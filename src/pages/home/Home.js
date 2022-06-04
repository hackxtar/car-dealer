import React from "react";
import { Card, Button, Row, Col, CardGroup, Container } from "react-bootstrap";
import "./Home.css";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";
import image4 from "../../assets/img/image4.jpg";

const data = [
  {
    id: 1,
    Title: "Car1",
    Image: image1,
    Price: "100",
    Description: "This is a car",
  },
  {
    id: 2,
    Title: "Car2",
    Image: image2,
    Price: "200",
    Description: "This is a car",
  },
  {
    id: 3,
    Title: "Car3",
    Image: image3,
    Price: "300",
    Description: "This is a car",
  },
  {
    id: 4,
    Title: "Car4",
    Image: image4,
    Price: "400",
    Description: "This is a car",
  },
  {
    id: 5,
    Title: "Car5",
    Image: image1,
    Price: "500",
    Description: "This is a car",
  },
];

const Header = () => {
  return (
    <Card
      className="hero-banner align-items-sm-end text-white"
      position="top-end"
    >
      <Card.Body>
        <Card.Title className="fs-1 text-uppercase">
          Special title treatment
        </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="light" size="lg">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};
const Product_grid = () => {};
const Car_data = ({ data }) => {
  return (
    <>
      <Container className="home_grid">
        {data.map((data, idx) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img className="grid_images" variant="top" src={data.Image} />
            <Card.Body>
              <Card.Title>data.Title</Card.Title>
              <Card.Text>data.Description</Card.Text>
            </Card.Body>
            <Button variant="primary">Go somewhere</Button>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </>
  );
};

const Title = ({ title }) => {
  return (
    <>
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <svg
                class="svg-inline--fa fa-star"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                ></path>
              </svg>
            </div>
            <div class="divider-custom-line"></div>
          </div>
        </div>
      </section>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <Title title="Home" />
      <Car_data data={data} />
    </>
  );
};

export default Home;
