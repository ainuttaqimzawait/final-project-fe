import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVarian } from "../../app/api/products";
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import "./style.css";
import { useSelector } from "react-redux";

const Detail = () => {
    const { id } = useParams();
    const detailItem = useSelector(state => state.detailItem);
    const [varian, setVarian] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedSwipper, setSelectedSwipper] = useState(null);
    useEffect(() => {
        getVarian(id)
            .then(({ data }) => setVarian(data))
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }, []);

    const handleButtonClick = (itemId) => {
        const selectedItem = varian.find((item) => item.product_id === itemId);
        setSelectedItem(selectedItem);
    };

    const photosProduct = [
        detailItem.data.photo,
        detailItem.data.photos[0],
        detailItem.data.photos[1]];

    const handleSwipperClick = (i) => {
        const selectedSwipper = photosProduct[i]
        setSelectedSwipper(selectedSwipper);
    }
    return (
        <div style={{
            width: "100vw",
            paddingTop: "105px",
            display: "flex"
        }}>
            <div style={{
                width: "300px",
                margin: "0px 20px 0px 20px"
            }}>
                {
                    selectedSwipper ?
                        <Card.Img variant="top"
                            src={selectedSwipper}
                            style={{
                                width: "350px",
                                height: "425px",
                                marginBottom: "20px"
                            }} />
                        :
                        <Card.Img variant="top"
                            src={detailItem.data.photo}
                            style={{
                                width: "350px",
                                height: "425px",
                                marginBottom: "20px"
                            }} />
                }
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    style={{ width: "250px" }}
                >
                    {
                        photosProduct.map((e, i) => {
                            return <SwiperSlide
                                key={i}
                                style={{
                                    width: "80px",
                                    height: "100px",
                                    cursor: "pointer"
                                }}
                                onClick={() => handleSwipperClick(i)}>
                                <Image src={e} style={{ width: "80px", height: "100px" }} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            <ListGroup className="list-group-flush"
                style={{
                    width: "600px",
                    margin: "0px 20px 0px 20px"
                }}>
                {selectedItem ? (
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <h3>{selectedItem.product_name}</h3>
                            <h1>{detailItem.data.currency} {detailItem.data.price}</h1>
                            <div>Stock: {selectedItem.product_qty_stock}</div>
                        </ListGroup.Item>
                        <ListGroup.Item>{selectedItem.product_description}</ListGroup.Item>
                    </ListGroup>
                )
                    :
                    (
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <h3>{detailItem.data.name}</h3>
                                <h1>{detailItem.data.currency} {detailItem.data.price}</h1>
                                <div>Stock: {detailItem.data.stock}</div>
                            </ListGroup.Item>
                            <ListGroup.Item>{detailItem.data.description}</ListGroup.Item>
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
        </div>
    )
}

export default Detail




