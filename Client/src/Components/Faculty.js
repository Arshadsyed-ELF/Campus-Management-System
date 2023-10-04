import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kalam from "../Assets/Faculty/kalam.jpg"
import murty from "../Assets/Faculty/murty.jpg"
import james from "../Assets/Faculty/James.jpg"
import brendan from "../Assets/Faculty/BrendanEich.jpg"


const Faculty = () => {
  return (
    <div >
        <section id='faculty'>

           <h1> Faculty</h1>
           <div id='cards'>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={kalam} />
      <Card.Body>
        <Card.Title>Abdul kalam</Card.Title>
        <Card.Text>
         <strong>ISRO Scientist</strong>
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={murty} />
      <Card.Body>
        <Card.Title>Narayana Murty
        </Card.Title>
        <Card.Text>
            <strong>  Infosys Founder</strong>
        </Card.Text>
    
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={james} />
      <Card.Body>
        <Card.Title>James Gosling</Card.Title>
        <Card.Text>
        <strong>Java Founder</strong>
        
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={brendan}  style={{height:"200px"}}/>
      <Card.Body>
        <Card.Title>Brendan Eich</Card.Title>
        <Card.Text>
        <strong>Java Script Founder</strong>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

         </section>
    </div>
  )
}

export default Faculty