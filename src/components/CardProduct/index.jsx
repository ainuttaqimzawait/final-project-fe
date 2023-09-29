import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { config } from '../../config';

export default function CardProduct({ item }) {
    return <Card
        style={{
            width: '180px',
            height: '300px',
            margin: '0px 10px 20px 10px'
        }}>
        <Card.Img
            variant="top"
            src={`${item.photo}`}
            style={{ width: '180px', height: '200px' }}
        />
        <Card.Body>
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
                    {item.currency} {item.price}
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