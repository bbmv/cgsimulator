import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CanvasService } from "./canvas.service"
import { objVertecies, objEdges, objSettings, axesVertecies, axesEdges, 
				 axesSettings, axesPointsVertecies, axesPointsEdges, axesPointsSettings } from './data3d';

@Component({
	moduleId: module.id,
  selector: 'graphics3d',
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
export class Graphics3dComponent implements AfterViewInit {
	private objectCtx: CanvasRenderingContext2D;
	private axesCtx: CanvasRenderingContext2D;
	private sampleCtx: CanvasRenderingContext2D;

	mxOriginal: Array<Array<number>>;
	mxChanged: Array<Array<number>>;
	mxTransform: Array<Array<number>>;

 	private width: number = 420;
  private height: number = 450;
	private center = {"x": this.width/2, "y": this.height/2};
	private scale: number = 67;
	private viewVector = { 
		p1: {x:0, y:0, z:0}, 
		p2: {x:5.5, y:2.5, z:12} 
	};

	@ViewChild('container') container: ElementRef;
	@ViewChild('axes') axes: ElementRef;
	@ViewChild('sample') sample: ElementRef;
	@ViewChild('object') object: ElementRef;

	constructor(private cnvSrv: CanvasService) {
		this.mxOriginal = this.mxChanged = objVertecies;
  	this.mxTransform = (new cg3d.Transform3d).getElems();
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
		let Object3d = cg3d.Object3d;
		let Transform3d = cg3d.Transform3d;
		let Scene3d = cg3d.Scene3d;

  	this.mxTransform = (new Transform3d).getElems();

		let obj = new Object3d(objVertecies, objEdges, objSettings);
		let axes = new Object3d(axesVertecies, axesEdges, axesSettings);
		let axesPoints = new Object3d(axesPointsVertecies, axesPointsEdges, axesPointsSettings);

		this.mxChanged = obj.getElems();

		let center = this.center;
		let scale = this.scale;

		let axesScene = new Scene3d(this.axesCtx, center, scale);
		axesScene.setView( this.viewVector, false);
		axesScene.addObject(axes);
		axesScene.addObject(axesPoints);
		axesScene.draw();

		let sample = obj.getCopy();
		let tMx = new Transform3d(trans);
		sample.applyTransformation(tMx);

		let sampleScene = new Scene3d(this.sampleCtx, center, scale);
		sampleScene.setView( this.viewVector, false);
		sampleScene.addObject(sample);
		sampleScene.draw();

		let objScene = new Scene3d(this.objectCtx, center, scale);
		objScene.setView( this.viewVector, false);
		objScene.addObject(obj);
		objScene.draw();
  }

  transform(matrix: Array<Array<number>>): void {
		let Object3d = cg3d.Object3d;
		let Transform3d = cg3d.Transform3d;
		let Scene3d = cg3d.Scene3d;

		let obj = new Object3d(objVertecies, objEdges, objSettings);
		let tMx = new Transform3d(matrix);

		obj.applyTransformation(tMx);

		this.mxChanged = obj.getElems();

		let center = this.center;
		let scale = this.scale;

		let objScene = new Scene3d(this.objectCtx, center, scale);
		objScene.setView( this.viewVector, false);
		objScene.addObject(obj);
		objScene.draw();
	}
}
