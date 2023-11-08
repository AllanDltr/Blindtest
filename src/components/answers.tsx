import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const Answers = () => {
    return (
        <div className="AnswerSection mx-[45%] relative">
          <Badge className="Artist w-20 h-10 absolute text-xl border-black rounded-lg"> Artiste </Badge>
          <div className="ArtistAnswer w-60 h-10 left-[100px] absolute">
            <Input type="text" placeholder="Sean Paul"/>
          </div>
          <Badge className="Title w-20 h-10 top-[63px] text-xl border-black rounded-lg absolute">Titre</Badge>
          <div className="AnswerTitle w-60 h-10 left-[100px] top-[63px] absolute">
            <Input type="text" placeholder="Temperature"/>
          </div>
        </div>
    );
};

// The idea here is to have a section where the player can write his answer.
// The answer is composed of the artist and the title of the song.
// The player can write his answer in the input field.

// When he clicks on the "Valider" button, the answer is checked and if it's correct, he wins a point.
// If he doesn't have the correct answer, his score stays the same.
// When the answer is checked, the input field is disabled.