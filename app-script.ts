import { EggRoulette } from "./EggRoulette";
import { Graphics } from "./Graphics";

let main = async () => {

    let revealEggState: boolean = false;
    
    let gameLogic: EggRoulette = new EggRoulette();
    let graphics: Graphics = new Graphics(gameLogic, revealEggState);
    graphics.draw();

};

main();