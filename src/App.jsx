import { useState } from "react";

const phrases = [
  "No",
  "¿Estás segura?",
  "¿Segura, segura?",
  "¡Piénsalo bien!",
  "¡Última oportunidad!",
  "¿Segura que no?",
  "¡Podrías arrepentirte!",
  "¡Dale otra pensada!",
  "¿Estás absolutamente segura?",
  "¡Esto podría ser un error!",
  "¡Ten corazón!",
  "¡No seas tan fría!",
  "¿Cambio de opinión?",
  "¿No lo reconsiderarías?",
  "¿Es tu respuesta final?",
  "Me estás rompiendo el corazón ;(",
  "Por favor? :( Me estás rompiendo el corazón",
  "¡Mi abuelita dijo que sí por ti!",
  "¡Los perritos estarán tristes si dices que no! 🐶🥺",
  "¡Voy a llorar en un rincón si sigues rechazándome! 😭",
  "¡Piénsalo bien, el destino nos unió por algo! 💘",
  "¡Los unicornios desaparecerán si dices que no! 🦄💔",
  "¿Acaso no tienes corazón? 💔🥲",
  "¡Acepta antes de que el botón desaparezca para siempre! 😱",
  "¿No quieres ser la protagonista de nuestra historia de amor? 😍",
  "MARRANA!"
];

const faces = [
  "🥺",
  "😭",
  "😞",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "💔",
  "🫠",
  "🧐",
];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const randomTop = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90%
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const getNoButtonText = () => {
    if (noCount >= phrases.length) {
      return;
    }

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://i.pinimg.com/236x/42/d8/7f/42d87fcb3cdf9b42ca638957bfc60668.jpg"
          />
          <h1 className="text-3xl md:text-4xl my-4 text-center text-white">
            ¡Oferta especial! Un {"("}yo{")"} de regalo por San Valentín,
            ¿aceptas?{" "}
            {faces[noCount >= faces.length ? faces.length - 1 : noCount]}
          </h1>
          <div className="flex justify-center gap-6 items-center relative w-full @h-full">
            <button
              className={` w-max bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sí{noCount >= phrases.length && "🧐"}
            </button>
            <button
              onClick={handleNoClick}
              className={`${
                noCount >= phrases.length ? "hidden" : ""
              } bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4 ${
                noCount === 0 ? "" : "absolute"
              } `}
              style={{ top: noPosition.top, left: noPosition.left }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
