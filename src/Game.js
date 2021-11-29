import {Component} from "react"
import BoardTile from "./BoardTile.js"
import Player from "./Player.js"

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      boardSize:0,
      board:[]
    }
  }

  collectInput = (e) => {
    e.preventDefault();
    let size =e.target.size.value
    this.setState({boardSize:size})
    let board = [];
    for(let i = 0; i <size; i++){
      let tempArray = [];
      for(let j = 0; j<size; j++){
        tempArray.push(0);
      }
      board.push(tempArray);
    }
    board[size-1][0] = 1;
    console.log(board);
    this.setState({board:board});
  }

  movementPlayer = (oldX,oldY,newX,newY) => {
    let board = this.state.board
    board[oldX][oldY]= 0
    board[newX][newY]= 1
    this.setState({board:board})
  }

  checkMovement = (newX,newY) => {
    return this.state.board[newX][newY] ? true:false;
  }

  render(){
    return(
      <>
        <form onSubmit={this.collectInput} >
        <label>Size of Board</label>
        <input name="size" type= "number"></input>
        <button type="submit" >Hello Press me</button>
        </form> 
        {this.state.board.length > 0 ? this.state.board.map(element => element.map(piece => piece === 0 ?<BoardTile/> : <Player boardSize = {this.state.boardSize} movementPlayer = {this.movementPlayer} checkMovement = {this.checkMovement} />)):false}
      </>
    )
  }
}

export default Game;