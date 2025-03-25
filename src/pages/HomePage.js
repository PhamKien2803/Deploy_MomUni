import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import SubscriptionForm from "../components/SubcriptionForm";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroBannerFrame from "./../components/HeroBanner";


import styled from "styled-components";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const StyledCard = styled.div`
  .card__inner {
    position: relative;
    width: 100%;
    height: 250px;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;
  }

  &:hover .card__inner {
    transform: rotateX(180deg);
  }

  .card__front,
  .card__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card__front {
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__back {
    background: white;
    transform: rotateX(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }

  .card__title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .card__description {
    font-size: 14px;
    color: #777;
  }

  
`;


const HomePage = () => {
  const [featured, setFeatured] = useState(null);
  const [subFeatured, setSubFeatured] = useState([]);
  const [articles, setArticles] = useState([]);
  const [caroselts, setCaroselts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featuredRes, subFeaturedRes, articlesRes, caroselts] =
          await Promise.all([
            axios.get("/featured"),
            axios.get("/subFeatured"),
            axios.get("/articles"),
            axios.get("/caroselts"),
          ]);

        setFeatured(featuredRes.data);
        setSubFeatured(subFeaturedRes.data);
        setArticles(articlesRes.data);
        setCaroselts(caroselts.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!featured) return <p>Loading...</p>;

  const settings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
  };

  return (
    <div className="homepage">
      <HeroBannerFrame />

      {/* Featured Section */}
      <div className="featured-section">
        <div className="featured-article">
          <img src={featured?.image} alt={featured.title} />
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
        </div>
        <div className="sub-featured-articles">
          <Slider {...settings}>
            {subFeatured.map((item, index) => (
              <div key={index} className="sub-featured-article">
                <img src={item?.image} alt={item?.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-section">
        <Carousel>
          {caroselts.map((caroselts, index) => (
            <Carousel.Item key={index}>
              <motion.img
                className="d-block w-100"
                src={caroselts?.image}
                alt={caroselts?.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <Carousel.Caption>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {caroselts?.title}
                </motion.h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Article Grid */}
      <Container className="py-4">
        <Row className="g-4">
          {articles.map((article, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
              >
                <StyledCard>
                  <div className="card__inner">
                    <div className="card__front">
                      <img src={article.image} alt={article.title} />
                    </div>
                    <div className="card__back">
                      <h5 className="card__title">{article.title}</h5>
                      <p className="card__description">{article.description}</p>
                    </div>
                  </div>
                </StyledCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Subscription Section */}
      <div className="subscription-flexcontainer">
        <SubscriptionForm />
        <img src="/assets/jungle1.jpg" alt="Subscribe" />
      </div>
    </div>
  );
};

export default HomePage;
