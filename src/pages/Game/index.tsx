// Pagina para elaboração do jogo
import Square from '../Components/squares/square';
import SquareMiddle from '../Components/squares/square-middle';
import TriangleRight from '../Components/triangles/triangle-right';
import TriangleUp from '../Components/triangles/triangle-up';
import TriangleLeft from '../Components/triangles/triangle-left';
import TriangleDown from '../Components/triangles/triangle-down';
import { useEffect, useState } from 'react';
import { useApi } from '../../services/api';
import { Cases } from './cases';

interface PlayersTypes {
  id: string;
  color: string;
  pieces: PiecesTypes[];
}

interface PiecesTypes {
  id: number;
  playerID: string;
  position: number | null;
  src: string;
  final: boolean;
  canEntryFinal: boolean;
}

export const Game = () => {
  const { room, playerID, dice } = useApi();
  const [players, setPlayers] = useState<PlayersTypes[]>([]);
  const [cont, setCont] = useState(0);
  //   {
  //     color: null,
  //     id: 1,
  //     pieces: [
  //       { id: 1, playerId: playerID, position: 0, src: Mario, finish: false },
  //       { id: 1, playerId: '', position: 0, src: Luigi, finish: false },
  //     ],
  //   },
  //   {
  //     color: null,
  //     id: 2,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 3,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 4,
  //     pieces: [
  //       { id: 1, playerId: playerID, position: 0, src: Mario, finish: false },
  //     ],
  //   },
  //   {
  //     color: null,
  //     id: 5,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 6,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 7,
  //     pieces: [
  //       { id: 1, playerId: playerID, position: 0, src: Mario, finish: false },
  //     ],
  //   },
  //   {
  //     color: null,
  //     id: 8,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 9,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 10,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 11,
  //     pieces: [
  //       { id: 1, playerId: playerID, position: 0, src: Mario, finish: false },
  //     ],
  //   },
  //   {
  //     color: null,
  //     id: 12,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 13,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 14,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 15,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 16,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 17,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 18,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 19,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 20,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 21,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 22,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 23,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 24,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 25,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 26,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 27,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 28,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 29,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 30,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 31,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 32,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 33,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 34,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 35,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 36,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 37,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 38,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 39,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 40,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 41,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 42,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 43,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 44,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 45,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 46,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 47,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 48,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 49,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 50,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 51,
  //     pieces: [],
  //   },
  //   {
  //     color: null,
  //     id: 52,
  //     pieces: [],
  //   },
  // ]);

  return (
    <div className=" bg-slate-900 min-h-full  w-full flex justify-center items-center gap-[100px] h-screen ">
      <button
        className="bg-white"
        onClick={() => {
          if (room?.turnsPlayer.id === playerID)
            if (dice) {
              dice(Math.floor(Math.random() * 6 + 1));
            }
        }}
      >
        Jogar Dado
      </button>
      {!room ? null : (
        <div className="w-[600px] h-[600px] cursor-pointer bg-slate-50">
          <div className="w-full h-2/5 flex">
            <div className="w-2/5 h-full flex justify-center items-center border  bg-[#F84020]">
              <Cases player={room.players[0]} playerIndex={0} />
            </div>
            <div className="w-1/5 h-full">
              <Square id={1} color="#D9D9D9" />
              <Square id={2} color="#D9D9D9" />
              <Square id={3} color="#D9D9D9" />
              <Square id={52} color="#D9D9D9" />
              {/*  */}
              <Square color="#6F37AF" />
              {/*  */}
              <Square id={4} color="#6F37AF" />
              <Square id={51} color="#D9D9D9" />
              {/*  */}
              <Square color="#6F37AF" />
              {/*  */}
              <Square id={5} color="#D9D9D9" />
              <Square id={50} color="#D9D9D9" />
              {/*  */}
              <Square color="#6F37AF" />
              {/*  */}
              <Square id={6} color="#D9D9D9" />
              <Square id={49} color="#D9D9D9" />
              {/*  */}
              <Square color="#6F37AF" />
              {/*  */}
              <Square id={7} color="#D9D9D9" />
              <Square id={48} color="#D9D9D9" />
              {/*  */}
              <Square color="#6F37AF" />
              {/*  */}
              <Square id={8} color="#D9D9D9" />
            </div>
            <div className="w-2/5 h-full flex justify-center items-center bg-[#6F37AF]">
              <Cases player={room.players[1]} playerIndex={1} />
            </div>
          </div>
          <div className="w-full h-1/5 flex">
            <div className="w-2/5 h-full">
              <SquareMiddle id={42} color="#D9D9D9" />
              <SquareMiddle id={43} color="#F84020" />
              <SquareMiddle id={44} color="#D9D9D9" />
              <SquareMiddle id={45} color="#D9D9D9" />
              <SquareMiddle id={46} color="#D9D9D9" />
              <SquareMiddle id={47} color="#D9D9D9" />
              <SquareMiddle id={41} color="#D9D9D9" />
              {/*  */}
              <SquareMiddle color="#F84020" />
              <SquareMiddle color="#F84020" />
              <SquareMiddle color="#F84020" />
              <SquareMiddle color="#F84020" />
              <SquareMiddle color="#F84020" />
              {/*  */}
              <SquareMiddle id={40} color="#D9D9D9" />
              <SquareMiddle id={39} color="#D9D9D9" />
              <SquareMiddle id={38} color="#D9D9D9" />
              <SquareMiddle id={37} color="#D9D9D9" />
              <SquareMiddle id={36} color="#D9D9D9" />
              <SquareMiddle id={35} color="#D9D9D9" />
            </div>
            <div className="w-1/5 h-full">
              <div className="w-full h-full relative">
                <TriangleRight />
                <TriangleUp />
                <TriangleLeft />
                <TriangleDown />
              </div>
            </div>
            <div className="w-2/5 h-full">
              <SquareMiddle id={9} color="#D9D9D9" />
              <SquareMiddle id={10} color="#D9D9D9" />
              <SquareMiddle id={11} color="#D9D9D9" />
              <SquareMiddle id={12} color="#D9D9D9" />
              <SquareMiddle id={13} color="#D9D9D9" />
              <SquareMiddle id={14} color="#D9D9D9" />
              {/*  */}
              <SquareMiddle color="#FEB019" />
              <SquareMiddle color="#FEB019" />
              <SquareMiddle color="#FEB019" />
              <SquareMiddle color="#FEB019" />
              <SquareMiddle color="#FEB019" />
              {/*  */}
              <SquareMiddle id={15} color="#D9D9D9" />
              <SquareMiddle id={21} color="#D9D9D9" />
              <SquareMiddle id={20} color="#D9D9D9" />
              <SquareMiddle id={19} color="#D9D9D9" />
              <SquareMiddle id={18} color="#D9D9D9" />
              <SquareMiddle id={17} color="#FEB019" />
              <SquareMiddle id={16} color="#D9D9D9" />
            </div>
          </div>
          <div className="w-full h-2/5 flex">
            <div className="w-2/5 h-full flex justify-center items-center bg-[#00A800]">
              <Cases player={room.players[3]} playerIndex={3} />
            </div>
            <div className="w-1/5 h-full">
              <Square id={34} color="#D9D9D9" />
              {/*  */}
              <Square color="#00A800" />
              {/*  */}
              <Square id={22} color="#D9D9D9" />
              <Square id={33} color="#D9D9D9" />
              {/*  */}
              <Square color="#00A800" />
              {/*  */}
              <Square id={23} color="#D9D9D9" />
              <Square id={32} color="#D9D9D9" />
              {/*  */}
              <Square color="#00A800" />
              {/*  */}
              <Square id={24} color="#D9D9D9" />
              <Square id={31} color="#D9D9D9" />
              {/*  */}
              <Square color="#00A800" />
              {/*  */}
              <Square id={25} color="#D9D9D9" />
              <Square id={30} color="#00A800" />
              {/*  */}
              <Square color="#00A800" />
              {/*  */}
              <Square id={26} color="#D9D9D9" />
              <Square id={29} color="#D9D9D9" />
              <Square id={28} color="#D9D9D9" />
              <Square id={27} color="#D9D9D9" />
            </div>
            <div className="w-2/5 h-full flex justify-center items-center bg-[#FEB019]">
              <Cases player={room.players[2]} playerIndex={2} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
