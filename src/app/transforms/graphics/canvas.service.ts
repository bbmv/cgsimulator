import { ElementRef } from '@angular/core';

export class CanvasService {
  initCanvas(canvElem: ElementRef, width: number, height: number): CanvasRenderingContext2D {
	  let canvas = canvElem.nativeElement;

	  if(!canvas.getContext) return undefined;

	  canvas.width = width;
	  canvas.height = height;
	  
	  return canvas.getContext("2d");
  }
}
