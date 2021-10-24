import React from 'react'
import { Header } from 'semantic-ui-react'
import LikeButton from "./LikeButton";

const HeaderExamplePage = (props) => (
  <div className="TrackHead">
    <Header className="TrackName" style={{ marginLeft:"5%",marginTop:"1%",marginBottom:"5%",letterSpacing:"2px",color:"#143e41"}} as='h1'>{props.heading}
    
    </Header>
    <LikeButton />
  </div>
)

export default HeaderExamplePage;