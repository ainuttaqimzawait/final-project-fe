import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { config } from '../../config';

export default function CardProduct({ item }) {
    return <Card
        style={{
            width: '18rem',
            height: '24rem',
            marginBottom: '20px'
        }}>
        <Card.Img
            variant="top"
            src={`${item.photo}`}
            style={{ width: '18rem', height: '190px' }}
        />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                {item.name}
            </Card.Text>
            <footer style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                width: '18rem',
                bottom: '0px',
                marginBottom: '0px'
            }}>
                <Card.Text style={{
                    color: 'orange',
                    marginTop: '10px'
                }}>
                    Rp. { }
                </Card.Text>
                {/* <Button variant='none' style={{
                    marginRight: '20px',
                    marginBottom: '10px'
                }}
                    onClick={() => onAddToCart()}>
                    <img style={{ height: '2rem', width: '2rem' }} src="keranjang-belanja.png" alt="" />
                </Button> */}
            </footer>
        </Card.Body>
    </Card>
}