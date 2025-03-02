import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({cards}) {

    const acceptanceAlert=()=>{
        alert("accepted the invitation")
    }
    return ( 
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{cards.CardTitle}</Card.Title>
          <Card.Text>
            {cards.CardText}
          </Card.Text>
          <Button variant="primary" onClick={acceptanceAlert}>{cards.CardOperation}</Button>
        </Card.Body>
      </Card>
      </>
    )
}

export default Cards;