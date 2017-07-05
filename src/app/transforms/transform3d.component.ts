import { Component, ViewChild, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';

import { Graphics3dComponent } from './graphics/graphics3d.component';
import { FormulaComponent } from './formula/formula.component';
import { Tasks3dComponent } from './tasks/tasks3d.component';
import { ResultsComponent } from './results/results.component';
import { CompareTransformService } from './results/compare-transform.service';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'transform3d',
  template: `
		<results #res></results>
		<tasks3d></tasks3d>
	  <section>
	  	<graphics3d class="grph"></graphics3d>
	  <section>
	  </section>
	  	<formula></formula>
	  <section>
	  </section>
	   	<controls (onClickTfm)="transform()" (onClickNxt)="next()"></controls>
		</section>
	`,
	styles: [`
		section { text-align: center; line-height: 0; }
	`],
	providers: [CompareTransformService]
})
export class Transform3dComponent implements AfterContentChecked, OnInit, AfterViewInit {
	@ViewChild(Graphics3dComponent) graphics: Graphics3dComponent;
	@ViewChild(FormulaComponent) formula: FormulaComponent;
	@ViewChild(Tasks3dComponent) tasks: Tasks3dComponent;
	@ViewChild(ControlsComponent) controls: ControlsComponent;
	@ViewChild("res") results: ResultsComponent;
	private sMx: Array<Array<number>>;

	constructor(private cTrS: CompareTransformService) {}

	ngAfterContentChecked() {
		this.formula.mxOriginal = this.graphics.mxOriginal;
		this.formula.mxChanged = this.graphics.mxChanged;
		this.formula.mxTransform = this.graphics.mxTransform;
		this.controls.invalid = this.formula.transf.form.invalid;
	}
	ngOnInit() {
		this.sMx = this.tasks.generateNewTask();
		this.results.init();
	}	
	ngAfterViewInit() {
		this.graphics.show(this.sMx);
	}	
	transform(): void {
		this.graphics.transform(this.formula.mxTransform);
		let res: boolean = this.cTrS.compare(this.formula.mxTransform, this.sMx);
		this.results.show(res);
	}
	next(): void {
		this.sMx = this.tasks.generateNewTask();
		this.graphics.show(this.sMx);
		this.results.init();
	}
}
