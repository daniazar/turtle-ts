import { Turtle } from "./Turtle";

export class Figure {
    private _turtle: Turtle;

    constructor(turtle: Turtle) {
        this._turtle = turtle;
    }

    drawArrow = function () {
        this._turtle.forward(50);
        this._turtle.left(150);
        this._turtle.forward(7);
        this._turtle.backward(7);
        this._turtle.right(150);
        this._turtle.right(150);
        this._turtle.forward(7);
        this._turtle.backward(7);
        this._turtle.left(150);
    };


    hexagon = function (length) {
        var i;
        for (i = 1; i <= 6; i++) {
            this._turtle.forward(length);
            this._turtle.left(60);

        }
    };


    drawStar = function () {
        var i;
        for (i = 0; i < 18; i++) {
            this._turtle.left(100);
            this._turtle.forward(80);
        }
    };

    square = function (length) {
        var i;
        for (i = 1; i <= 4; i++) {
            this._turtle.forward(length);
            this._turtle.left(90);

        }
    };

    arrowed = function (count, angle) {
        var i;
        for (i = 1; i <= count; i++) {
            console.log(i);
            this._turtle.drawArrow();
            this._turtle.left(angle);
        }
    };


}