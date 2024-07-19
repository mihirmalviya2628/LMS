import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://png.pngtree.com/background/20230424/original/pngtree-large-library-filled-with-books-picture-image_2458791.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> Saul Bellow ―</h3>
                        <p>“People can lose their lives in libraries. They ought to be warned.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
            src="https://wallpapercave.com/wp/ijo8KeK.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Sarah J. Maas ― </h3>
                        <p>“Libraries were full of ideas—perhaps the most dangerous and powerful of all weapons.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3> Gail Honeyman ―</h3>
                        <p>“In principle and reality, libraries are life-enhancing palaces of wonder.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
