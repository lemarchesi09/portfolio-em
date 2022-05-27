import React from 'react'
import "./projects.css"
import Carousel from 'react-bootstrap/Carousel';
import CalcMinim from "../../assets/calc-minim.jpg"
import CalcReact from "../../assets/calc-react.jpg"
import RespWeb from "../../assets/resp-web.jpg"
import WeatherApp from "../../assets/weather-app1.jpg"



export default function Projects() {
  return (
    <div>
        <section id='projects' className='pro-carousel'>
            <h2>Projects</h2>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CalcMinim}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Calculator Minimalist</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CalcReact}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Calculator React</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={RespWeb}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Responsive Web</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={WeatherApp}
                alt="Fourth slide"
                />

                <Carousel.Caption>
                <h3>Weather App</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            {/* <div className="pro-cont">
                <div className="pro-item">
                    <a href="">
                        Calculator Minimalist
                    </a>
                </div>
                <div className="pro-item">
                    <a href="">
                        Responsive Page
                    </a>
                </div>
                <div className="pro-item">
                    <a href="">
                        Weather App
                    </a>
                </div>
                <div className="pro-item">
                    <a href="">
                        Calculator
                    </a>
                </div>
            </div> */}
        </section>
    </div>
  )
}
