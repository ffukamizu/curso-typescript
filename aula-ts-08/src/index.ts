import { Game } from '../protocols/game.protocol';
const game: Game = {
    id: 1,
    platform: {
        id: 1,
        name: 'Playstation',
    },
    title: 'The Last Of Us',
    publisher: 'Naughty Dog',
    launch: '2013-06-14',
};

const games: Game[] = [game];

function play(game: Game) {
    console.log(game);
}

play(game);
