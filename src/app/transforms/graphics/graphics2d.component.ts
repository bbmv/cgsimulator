import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CanvasService } from "./canvas.service"
import { objVertecies, objEdges, objSettings, axesVertecies, 
				 axesEdges, axesSettings, axesPointsVertecies, 
				 axesPointsEdges, axesPointsSettings } from './data2d';

@Component({
	moduleId: module.id,
  selector: 'graphics2d',
  template: `
  	<div #container id="container">
	  	<canvas #axes></canvas>
			<canvas #sample id="sample"></canvas>
			<canvas #object></canvas>
		</div>
	`,
	styles: [`
		#container {
			position: relative;
			display: inline-block;
		}
		canvas {
			position: absolute;
			top: 0px;
			left: 0px;
		}
		#sample { opacity: 0.3; }
	`],
	providers: [CanvasService]
})
export class Graphics2dComponent implements AfterViewInit {
	private objectCtx: CanvasRenderingContext2D;
	private axesCtx: CanvasRenderingContext2D;
	private sampleCtx: CanvasRenderingContext2D;

	mxOriginal: Array<Array<number>>;
	mxChanged: Array<Array<number>>;
	mxTransform: Array<Array<number>>;

 	private width: number = 420;
  private height: number = 450;
	private center = {"x": this.width/2, "y": this.height/2};
	private scale: number = 65;

	@ViewChild('container') container: ElementRef;
	@ViewChild('axes') axes: ElementRef;
	@ViewChild('sample') sample: ElementRef;
	@ViewChild('object') object: ElementRef;

	constructor(private cnvSrv: CanvasService) {
		this.mxOriginal = this.mxChanged = objVertecies;
  	this.mxTransform = (new cg2d.Transform2d).getElems();
	}

  ngAfterViewInit() {
  	document.body.style.minWidth = this.width+"px";
  	this.container.nativeElement.style.width = this.width+"px";
	  this.container.nativeElement.style.height = this.height+"px";

		this.axesCtx = this.cnvSrv.initCanvas(this.axes, this.width, this.height);
		this.sampleCtx = this.cnvSrv.initCanvas(this.sample, this.width, this.height);
		this.objectCtx = this.cnvSrv.initCanvas(this.object, this.width, this.height);
	}

  show(trans: Array<Array<number>>): void {
		let Object2d = cg2d.Object2d;
		let Transform2d = cg2d.Transform2d;
		let Scene2d = cg2d.Scene2d;

  	this.mxTransform = (new Transform2d).getElems();

		let obj = new Object2d(objVertecies, objEdges, objSettings);
		let axes = new Object2d(axesVertecies, axesEdges, axesSettings);
		let axesPoints = new Object2d(axesPointsVertecies, axesPointsEdges, axesPointsSettings);

		this.mxChanged = obj.getElems();

		let center = this.center;
		let scale = this.scale;

		let axesScene = new Scene2d(this.axesCtx, center, scale);
		axesScene.addObject(axes);
		axesScene.addObject(axesPoints);
		axesScene.draw();

		let sample = obj.getCopy();
		let tMx = new Transform2d(trans);
		sample.applyTransformation(tMx);

		let sampleScene = new Scene2d(this.sampleCtx, center, scale);
		sampleScene.addObject(sample);
		sampleScene.draw();

		let objScene = new Scene2d(this.objectCtx, center, scale);
		objScene.addObject(obj);
		objScene.draw();
  }

  transform(matrix: Array<Array<number>>): void {
		let Object2d = cg2d.Object2d;
		let Transform2d = cg2d.Transform2d;
		let Scene2d = cg2d.Scene2d;

		let obj = new Object2d(objVertecies, objEdges, objSettings);
		let tMx = new Transform2d(matrix);

		obj.applyTransformation(tMx);

		this.mxChanged = obj.getElems();

		let center = this.center;
		let scale = this.scale;

		let objScene = new Scene2d(this.objectCtx, center, scale);
		objScene.addObject(obj);
		objScene.draw();
	}
}
