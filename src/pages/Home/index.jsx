import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "../../components/TopBar"
import { Header } from '../../components/Carousel';
import { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap';
import CardProduct from '../../components/CardProduct';
import { getDetailProduct, getKeyword, getProducts, getVarian } from '../../app/api/products';
import { fetchProducts } from '../../app/features/Product/actions';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    // const [products, setProducts] = useState([]);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        // getProducts()
        //     .then(({ data }) => setProducts(data.aaData));
        dispatch(fetchProducts());
        getKeyword()
            .then(({ data }) => setDetail(data));
    }, [dispatch]);
    return (
        <div>
            {console.log(products)}
            {/* {console.log(detail)} */}
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
                        {products.data.map((product, i) => {
                            return (
                                <Col key={i} md={2}>
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