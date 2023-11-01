export const Answers = () => {
    return (
        <div className="AnswerSection mx-[45%] relative">
          <div className="Artist w-20 h-10 absolute text-xl border-2 border-black rounded-lg text-center align-middle	"> Artiste </div>
          <div className="ArtistAnswer w-60 h-10 left-[100px]  absolute border-2 border-black rounded-lg  text-black text-opacity-50 text-xl ">
            <input type="text" placeholder="Sean Paul"/>
          </div>
          <div className="Title w-20 h-10 top-[63px] text-xl border-2 border-black rounded-lg absolute text-center">Titre</div>
          <div className="AnswerTitle w-60 h-10 left-[100px] top-[63px] absolute border-2  border-black rounded-lg text-black text-opacity-50 text-xl">
            <input type="text" placeholder="Temperature"/>
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