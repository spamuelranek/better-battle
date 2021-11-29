import {Component} from "react"


class Player extends Component{
  constructor(props){
    super(props);
    this.state = {
      power: 5,
      id: 1,
      color: "red",
      zindex: 1,
      location: [0,this.props.boardSize]
    }
  }

  // movePlayer = () => {

  // }

  render(){
    return(
      <div>Im a player</div>
    )
  }

}

export default Player;