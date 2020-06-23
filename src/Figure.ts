import { Point } from "./Point";
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

    circle(radius, extent, steps) {
        if (!extent) {
            extent = 360;
        }
        extent = extent * (Math.PI * 180);

        if (!steps) {
            steps = Math.round(Math.abs(radius * extent * 8)) | 0;
            steps = Math.max(steps, 4);
        }
        const cx = this._turtle.position.x + radius * Math.cos(this._turtle.angle() + Math.PI / 2);
        const cy = this._turtle.position.y + radius * Math.sin(this._turtle.angle() + Math.PI / 2);
        const a1 = Math.atan2(this._turtle.position.y - cy, this._turtle.position.x - cx);
        const a2 = radius >= 0 ? a1 + extent : a1 - extent;
        for (let i = 0; i < steps; i++) {
            const p = i / (steps - 1);
            const a = a1 + (a2 - a1) * p;
            const x = cx + Math.abs(radius) * Math.cos(a);
            const y = cy + Math.abs(radius) * Math.sin(a);
            this._turtle.setPosition(new Point(x, y));
        }
    }



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