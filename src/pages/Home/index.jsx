import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "../../components/TopBar"
import { Header } from '../../components/Carousel';
import { useEffect, useState } from "react";
import axios from "axios";
import getProducts from "../../app/api/products";
import { config } from "../../config";
import { Col, Row } from 'react-bootstrap';
import CardProduct from '../../components/CardProduct';
// import axiosInstance from "../../config";
// import getProducts from "../../app/api/product";
// import CardProduct from '../../components/CardProduct';
// import { Row } from 'react-bootstrap';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(({ data }) => setProducts(data.aaData));
    }, []);
    return (
        <div>
            {/* {console.log(products)} */}
            <TopBar />
            <div
                style={{
                    width: '100w',
                    display: "grid",
                    placeItems: "center",
                    marginTop: '0px',
                    backgroundColor: '#f5f7f6'
                }}>
                <Header />
                <div style={{ marginLeft: "-50vw" }}>

                </div>
                <div
                    className="cardContainer"
                    style={{
                        display: "flex",
                        width: '100vw',
                        justifyContent: 'center'
                    }}>
                    <Row style={{ width: "1190px" }}>
                        {products.map((product, i) => {
                            return (
                                <Col key={i} md={3}>
                                    <CardProduct item={product} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home