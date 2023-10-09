import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../components/Carousel';
import { useEffect, useRef, useState } from "react";
import { Col, Nav, Row, Spinner } from 'react-bootstrap';
import CardProduct from '../../components/CardProduct';
import { fetchProducts, setPage } from '../../app/features/Product/actions';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [hasMore, setHasMore] = useState(false);
    const observer = useRef();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [products.categories, products.currentPage, products.search_name]);

    const loadMore = () => {
        return dispatch(setPage())
    };

    const lastProductElementRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-50px 0px 0px 0px',
            threshold: 0.1,
        };
        observer.current = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && hasMore) {
                loadMore();
            }
        }, options);
    }, [hasMore]);

    useEffect(() => {
        if (lastProductElementRef.current) {
            observer.current.observe(lastProductElementRef.current);
        }
    }, [hasMore]);


    return (
        <div style={{ paddingBottom: "0px" }}>
            <div
                style={{
                    width: '100w',
                    display: "grid",
                    placeItems: "center",
                    marginTop: '0px',
                    backgroundColor: '#f5f7f6'
                }}>
                <Header />
                <div
                    className="cardContainer"
                    style={{
                        display: "flex",
                        width: '100vw',
                        justifyContent: 'center'
                    }}>
                    <Row style={{ width: "1190px" }}>
                        {products.status === 'success' && products.data.length === 0 ?
                            <div style={{
                                height: "50vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "50px"
                            }}>Tidak Ada Product</div>
                            :
                            products.data.map((product, i) => {
                                return (
                                    <Col key={i} md={2}>
                                        <CardProduct item={product} />
                                    </Col>
                                )
                            })}

                        {products.data.length > 16 ?
                            <Col style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "50px"
                            }}>
                                <Nav.Link
                                    onClick={() => { setHasMore(true) }}
                                    style={{
                                        display: "grid",
                                        placeItems: "center",
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                        height: "14px",
                                        margin: "30px 0px 90px 0px",
                                        color: "orange"
                                    }}>
                                    <div>Show More</div>
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </Nav.Link>
                            </Col>
                            :
                            null}

                        {products.status === 'proccess' ?
                            <div style={{
                                height: "50px",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Spinner animation="border" role="status" >
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                            :
                            null}
                    </Row>
                </div>

                <div ref={lastProductElementRef} style={{
                    backgroundColor: "black",
                    height: "1px",
                    width: "100vw"
                }}></div>
                <Footer />
            </div>
        </div>
    )
}

export default Home