import { Scene } from "phaser";

export class Preload extends Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        this.load.setPath("assets");
        // this.load.image("example", "example.svg");

        this.load.image("toskaMopo", "toskaMopo.png");
    }

    create() {
        this.scene.start("GameScene");
    }
}

