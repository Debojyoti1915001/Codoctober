import React from 'react'
import { Card } from 'semantic-ui-react'


const CardExampleImageCard = (props) => (
  <Card href={props.link}  style={{borderRadius:" 10% 10% 10% 10% !important"}} className="cardBoarder">
    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} /> */}
    
  <Card.Content style={{borderRadius:" 10% 10% 0 0 !important"}} className="cardTop">
      {/* <Card.Header>{props.heading}</Card.Header> */}
     
      <Card.Description className="cardDescriptionFont" style={{color:"#18848a"}}>
        {props.description}{props.level}
      </Card.Description>
    </Card.Content>
  

    <Card.Content extra className="cardBottom">
     
        <Card.Meta style={{color:"#18848a"}}>Level {props.level}</Card.Meta> 
    </Card.Content>
  </Card>
)

export default CardExampleImageCard;