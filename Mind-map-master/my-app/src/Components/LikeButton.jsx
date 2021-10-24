import React from "react";
// import Heart from "react-animated-heart";


class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
      this.setState({ liked: !this.state.liked});
    }
    render() {
      let buttonText = this.state.liked? 'Unlike': 'Like';
      return (
        <button onClick={this.handleClick} className="like">
          <i className="fa fa-heart"></i>&nbsp;
          {buttonText}</button>
       );
    }
  }



//  function LikeButton(){
//   const [isClick, setClick] = useState(false);
//   return (
//     <div className="lke">
//       <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
//     </div>
//   );
// }


export default LikeButton;