import { Point } from "./Point";

export class Turtle {
    private _position: Point;
    private _angle: number;
    private _color: string;
    private _context: CanvasRenderingContext2D;
    private _width: number;
    private _penDown: boolean;

    constructor(context: CanvasRenderingContext2D, startingPosition?: Point) {
        this._position = startingPosition;
        this._context = context;
        if (!startingPosition) {
            //this._position = context.
        }
    }

    logPenStatus() {
        console.log('x=' + this._position.x + "; y=" + this._position.y + '; angle = ' + this._angle + '; penDown = ' + this._penDown);
    };

    setPosition(position: Point) {
        this._position = position;
        this._context.moveTo(this._position.x, this._position.y);
    }

    forward(distance) {
        const x = this._position.x + distance * Math.cos(this._angle);
        const y = this._position.y + distance * Math.sin(this._angle);
        if (this._penDown) {
            //this.logPenStatus();
            this._context.beginPath();
            this._context.lineWidth = this._width;
            this._context.strokeStyle = this._color;
            this._context.moveTo(this._position.x, this._position.y);
            this._context.lineTo(x, y);
            this._context.stroke();
        } else {
            this._context.moveTo(x, y);
        }
        this._position.x = x;
        this._position.y = y;
    }

    backward(distance) {
        this.forward(-distance);
    }

    left(angleInDegrees: number) {
        this._angle += angleInDegrees * Math.PI / 180.0;
        return this;
    };

    right(angleInDegrees: number) {
        this.left(-angleInDegrees);
    }

    private radians(angle: number) {
        return angle * (Math.PI / 180);
    }

    angle(): number {
        // degrees are often more convenient for the display
        return this._angle * 180.0 / Math.PI;
    }

    setColor(color: string) {
        this._color = color;
    }

    setWidth(width: number) {
        this._width = width;
    }

    penUp() {
        this._penDown = false;
    }

    penDown() {
        this._penDown = true;
    }

    public get position(): Point {
        return this._position;
    }
    public set position(value: Point) {
        this._position = value;
    }

}