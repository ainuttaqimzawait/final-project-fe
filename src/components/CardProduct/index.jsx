import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Card, Form, NavDropdown } from 'react-bootstrap';
import { getVarian } from '../../app/api/products';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetailItem } from '../../app/features/DetailProduct/action';

export default function CardProduct({ item }) {
    const [varian, setVarian] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        getVarian(item.id)
            .then(({ data }) => setVarian(data))
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }, [])

    const handleClick = () => {
        let payload = {
            detailProduct: item
        }
        dispatch(getDetailItem(payload));
        navigate(`/detail/${item.id}`);
    }

    return <Card
        style={{
            width: '180px',
            height: '320px',
            margin: '0px 10px 20px 10px',
            paddingBottom: "5px"
        }}>
        <div
            style={{ cursor: "pointer" }}
            onClick={handleClick}>
            <Card.Img
                variant="top"
                src={`${item.photo}`}
                style={{ width: '180px', height: '200px' }}
            />
        </div>
        <Card.Body style={{
            display: "grid",
            placeItems: "center",
            padding: "0px"
        }}>
            <Card.Text style={{ fontSize: "13px", margin: "0px" }}>
                {item.name}
            </Card.Text>
            <Card.Text style={{
                color: 'orange',
                margin: "0px"
            }}>
                {item.currency} {item.price}
            </Card.Text>
            <Form.Select size="sm"
                style={{
                    border: "1px solid silver",
                    padding: "0px 20px 0px 5px",
                    margin: "0px", width: "auto"
                }}>
                {varian.map((e, i) => {
                    return <option key={i} href="#action/3.1">{e.varian_keyword_value} ({e.product_qty_stock})</option>
                })}
            </Form.Select>
            <Button style={{
                backgroundColor: "#843b49",
                padding: "0px 10px 0px 10px",
                height: "30px",
                fontSize: "13px",
                border: "none"
            }} >Masukkan Keranjang</Button>
        </Card.Body>
    </Card>
}