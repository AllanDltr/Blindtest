export const Answers = () => {
    return (
        <div className="AnswerSection mx-[45%] relative">
          <div className="Artist w-20 h-10 absolute text-xl border-2 border-black rounded-lg text-center align-middle	">Artiste</div>
          <div className="ArtistAnswer w-60 h-10 left-[100px]  absolute border-2 border-black rounded-lg  text-black text-opacity-50 text-xl ">Réponse ...</div>
          <div className="Title w-20 h-10 top-[63px] text-xl border-2 border-black rounded-lg absolute text-center">Titre</div>
          <div className="AnswerTitle w-60 h-10 left-[100px] top-[63px] absolute border-2  border-black rounded-lg text-black text-opacity-50 text-xl">Réponse ...</div>
        </div>
    );
};