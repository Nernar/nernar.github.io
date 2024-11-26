declare namespace UI {
    interface IDrawing {
		onDraw(canvas: android.graphics.Canvas, scale: number): void;
		onSetup(scriptable: object, style: Style): void;
	}

	interface ColorDrawing {
		type: "background",
		color?: number,
		mode?: number,
		colorMode?: number;
	}

	interface DrawColor extends IDrawing {
		onSetup(scriptable: ColorDrawing, style: Style): void;
	}

	interface CustomDrawing {
		type: "custom",
		onDraw?: (canvas: android.graphics.Canvas, scale: number) => void;
	}

	interface DrawCustom extends IDrawing {
		onSetup(scriptable: CustomDrawing, style: Style): void;
	}

	interface FrameDrawing {
		type: "frame",
		bitmap?: string,
		sides?: boolean[],
		x?: number,
		y?: number,
		scale?: number,
		width?: number, height?: number,
		color?: number,
		bg?: number;
	}

	interface DrawFrame extends IDrawing {
		onSetup(scriptable: FrameDrawing, style: Style): void;
	}

	interface ImageDrawing {
		type: "bitmap",
		x?: number,
		y?: number,
		width?: number,
		height?: number,
		scale?: number,
		bitmap?: string;
	}

	interface DrawImage extends IDrawing {
		onSetup(scriptable: ImageDrawing, style: Style): void;
	}

	interface LineDrawing {
		type: "line",
		x1?: number,
		y1?: number,
		x2?: number,
		y2?: number,
		color?: number,
		width?: number;
	}

	interface DrawLine extends IDrawing {
		onSetup(scriptable: LineDrawing, style: Style): void;
	}

	interface TextDrawing {
		type: "text",
		x?: number,
		y?: number,
		text?: string,
		font?: FontDescription;
	}

	interface DrawText extends IDrawing {
		onSetup(scriptable: TextDrawing, style: Style): void;
	}

	type DrawingElements = (
		ColorDrawing
		| CustomDrawing
		| FrameDrawing
		| ImageDrawing
		| LineDrawing
		| TextDrawing
	);
	type DrawingSet = DrawingElements[];
}
