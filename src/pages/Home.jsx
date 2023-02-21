import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import Clock from '../components/UI/Clock';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import '../styles/home.css';
import counterImg from '../assets/images/counter-timer-img.png';
function Home() {
  //React State
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'Chairs'
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'Sofas'
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <>
      <Helmet title={'Home'}>
        <section className='hero__section'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='hero__content'>
                  <p className='hero__subtitle'>Trending Products in 2023</p>
                  <h2>Make Your Interior Minimalistic & Modern</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugit quam, porro culpa, perferendis ea recusandae
                    voluptatibus fugiat molestias ipsa dolore corrupti odio
                    similique natus voluptatem? Molestiae voluptas dolores
                    inventore repudiandae!
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
                    <Link to='/shop'>SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className='hero__img'>
                  <img src={heroImg} alt='hero-img' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services />
        <secton className='trending__products'>
          <Container>
            <Row>
              <Col className='text-center' lg='12'>
                <h2 className='section__title'>Trending Products</h2>
              </Col>
              <ProductList data={trendingProducts} />
            </Row>
          </Container>
        </secton>
        <section className='best__sales'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section__title'>Best Sales</h2>
              </Col>
              <ProductList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>
        <section className='timer__count'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='clock__top-content'>
                  <h4>Limited Time Offer</h4>
                  <h3>Quality Armchair</h3>
                </div>
                <Clock />
                <button className='buy__btn'>
                  <Link to='/shop'>Visit Store</Link>
                </button>
              </Col>
              <Col lg='6' md='6' className='text-end'>
                <img src={counterImg} alt='counter-img' />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
}

export default Home;
