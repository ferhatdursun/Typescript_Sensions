
abstract class Point {
    constructor(
        public x: number,
        public y: number){ 

    }
}


class Player extends Point {
    constructor() {
        super(10, 10);
    }
}

const player = new Player();

player.x = 30 

console.log(player.x);


