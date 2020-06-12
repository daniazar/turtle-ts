import { Point } from "./Point";

export class Turtle {
    private _position: Point;
    private _angle: number;
    private _color: number;
    private _context: CanvasRenderingContext2D;
    private _width: number;
    constructor(canvas: HTMLCanvasElement, startingPosition?: Point) {
        this._position = startingPosition;
        this._context = canvas.getContext("2d");
        if (!startingPosition) {
            //this._position = context.
        }
    }

    setPosition(position: Point) {
        this._position = position;
        this._context.moveTo(this._position.x, this._position.y);
    }

    fordward(distance) {
        const x = this._position.x + distance * Math.cos(this._angle);
        const y = this._position.y + distance * Math.sin(this._angle);
    }

    backward(distance) {
        this.fordward(-distance);
    }

    rotate(angle: number) {
        this._angle += this.radians(angle);
    }

    private radians(angle: number) {
        return angle * (Math.PI * 2 / 360);
    }
}