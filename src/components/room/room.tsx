import { Navbar } from "../header"
import { Scoreboard } from "../scoreboard"
import { Game } from "../game"
import { Answers } from "../answers"

export const Room = () => {
  return (
      <div className="Room">
        <Navbar />
        <Game />
        <Answers />
        <Scoreboard />
      </div>
  )
}