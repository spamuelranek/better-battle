import {Component} from "react"
import Game from "./Game.js"
import Test from "./useKeyPress.js";

class Main extends Component {

  render(){
    return(
      <main>
        <Game/>
        <Test/>
      </main>
    )
  }

}

export default Main;