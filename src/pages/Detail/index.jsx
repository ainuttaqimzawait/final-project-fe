import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct, getVarian } from "../../app/api/products";
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { config } from "../../config";
import "./style.css";

const Detail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [varian, setVarian] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        getDetailProduct(id)
            .then(({ data }) => setDetail(data))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        getVarian(id)
            .then(({ data }) => setVarian(data))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    const handleButtonClick = (itemId) => {
        const selectedItem = varian.find((item) => item.product_id === itemId);
        setSelectedItem(selectedItem);
    };
    return (
        <div style={{ width: "100vw", paddingTop: "105px", display: "flex" }}>
            <div style={{ width: "300px", margin: "0px 20px 0px 20px" }}>
                <Card.Img variant="top" src={varian} style={{ width: "300px", height: "450px", marginBottom: "20px" }} />
                {varian.map((e) => {
                    return <div>
                        {/* <Image src={`${config.url}/img/user/hijja/product/${e.product_img}`} style={{ width: "70px", height: "100px" }}></Image> */}
                        {console.log(`${config.url}/img/user/hijja/product/${e.photos}`)}
                    </div>
                })}
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    style={{ width: "250px" }}
                >
                    <SwiperSlide style={{ backgroundColor: "green", width: "70px", height: "100px" }}>Slide 4</SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "silver", width: "70px", height: "100px" }}>Slide 5</SwiperSlide>
                </Swiper>
            </div>
            <ListGroup className="list-group-flush" style={{ width: "600px", margin: "0px 20px 0px 20px" }}>
                {selectedItem ? (
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <h3>{detail.product_name}</h3>
                            <h1>Rp. {detail.product_price}</h1>
                            <div>Stock: {selectedItem.product_qty_stock}</div>
                        </ListGroup.Item>
                        <ListGroup.Item>{selectedItem.product_description}</ListGroup.Item>
                    </ListGroup>
                ) : (
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <h3>{detail.product_name}</h3>
                            <h1>Rp. {detail.product_price}</h1>
                            <div>Stock: {detail.product_qty_stock}</div>
                        </ListGroup.Item>
                        <ListGroup.Item>{detail.product_description}</ListGroup.Item>
                    </ListGroup>
                )}
                <ListGroup.Item className="detail-ukuran">
                    <p>Ukuran</p>
                    {varian.map((e) => {
                        return <Button className="detail-ukuran-button" onClick={() => handleButtonClick(e.product_id)}>
                            {e.varian_keyword_value}
                        </Button>
                    })}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button style={{
                        margin: "0px 10px 0px 10px",
                        height: "50px",
                        width: "160px",
                        fontSize: "13px",
                        backgroundColor: "#edf3e4",
                        color: "#843b49",
                        borderRadius: "2px",
                        border: "1px solid #843b49"
                    }}>
                        Masukkan Keranjang
                    </Button>
                    <Button style={{
                        margin: "0px 10px 0px 10px",
                        height: "50px",
                        width: "160px",
                        fontSize: "13px",
                        backgroundColor: "#843b49",
                        border: "none",
                        borderRadius: "2px"
                    }}>
                        Beli Sekarang
                    </Button>
                </ListGroup.Item>
            </ListGroup>
            {console.log(detail)}
            {console.log(varian)}
        </div>
    )
}

export default Detail




