import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../components/Carousel';
import { useEffect, useRef, useState } from "react";
import { Col, Nav, Row } from 'react-bootstrap';
import CardProduct from '../../components/CardProduct';
import { fetchProducts, setPage } from '../../app/features/Product/actions';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';


const Home = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();


    //||=====================================================================================================
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    //======================================================================================================||


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, products.categories, products.currentPage]);


    //||================================================================================================
    // if (products.data.length === 0) {
    //     setHasMore(false)
    //     console.log("oyeooeeeeeeeeeeeeeeeeee")
    // }

    const loadMore = () => {
        // if (!loading) {
        //     setPageNumber(pageNumber + 1);
        // }
        return console.log("haloooooooooooooooooooooo")
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
            if (target.isIntersecting) {
                loadMore();
                console.log("Kondisi terpenuhi, memanggil loadMore()");
            } else {
                console.log("Kondisi tidak terpenuhi, loadMore() tidak dipanggil");
            }
        }, options);
    }, [hasMore]);

    useEffect(() => {
        if (lastProductElementRef.current) {
            observer.current.observe(lastProductElementRef.current);
        }
        console.log('use2')
    }, [hasMore]);

    //==================================================================================================================================||

    return (
        <div style={{ paddingBottom: "0px" }}>
            {console.log(hasMore)}
            {console.log(products.data.length)}
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
                        {products.data.length === 0 ? <h1 style={{ marginTop: "1000px" }}>kosongsdfdfghjdfgh</h1> : products.data.map((product, i) => {
                            return (
                                <Col key={i} md={2}>
                                    <CardProduct item={product} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <div ref={lastProductElementRef} style={{ backgroundColor: "red" }}>pppp</div>
                <Nav.Link
                    onClick={() => { dispatch(setPage()) }}
                    style={{ fontSize: "13px", height: "14px" }}>
                    tombol
                </Nav.Link>
                <Footer />
            </div>
        </div>
    )
}

export default Home