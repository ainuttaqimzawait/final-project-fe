import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export const Header = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: "white",
            width: "100vw"
        }}>
            <Carousel
                style={{
                    width: "1190px",
                    marginTop: "145px",
                    marginBottom: "25px",
                    borderRadius: "10px"
                }}>
                <Carousel.Item
                    style={{
                        height: "267px",
                        width: "1190px"
                    }}>
                    <img
                        src="images (1).jpeg"
                        alt="#"
                        style={{
                            height: "267px",
                            width: "1190px",
                            borderRadius: "20px"
                        }} />
                </Carousel.Item>
                <Carousel.Item
                    style={{
                        height: "267px",
                        width: "796px"
                    }}>
                    <img
                        src="images.jpeg"
                        alt="#"
                        style={{
                            height: "267px",
                            width: "1190px",
                            borderRadius: "20px"
                        }} />
                </Carousel.Item>
                <Carousel.Item
                    style={{
                        height: "267px",
                        width: "796px",
                        borderRadius: "20px"
                    }}>
                    <img
                        src="anime-original-girl-hijab-hd-wallpaper-preview.jpg"
                        alt="#"
                        style={{
                            height: "267px",
                            width: "1190px",
                            borderRadius: "20px"
                        }} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}