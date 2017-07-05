import { Component, ViewChild, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';

import { Graphics2dComponent } from './graphics/graphics2d.component';
import { FormulaComponent } from './formula/formula.component';
import { Tasks2dComponent } from './tasks/tasks2d.component';
import { ResultsComponent } from './results/results.component';
import { CompareTransformService } from './results/compare-transform.service';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'transform2d',
  template: `
		<results #res></results>
		<tasks2d></tasks2d>
	  <section>
	  	<graphics2d class="grph"></graphics2d>
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
export class Transform2dComponent implements AfterContentChecked, OnInit, AfterViewInit {
	@ViewChild(Graphics2dComponent) graphics: Graphics2dComponent;
	@ViewChild(FormulaComponent) formula: FormulaComponent;
	@ViewChild(Tasks2dComponent) tasks: Tasks2dComponent;
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
	private transform(): void {
		this.graphics.transform(this.formula.mxTransform);
		let res: boolean = this.cTrS.compare(this.formula.mxTransform, this.sMx);
		this.results.show(res);
	}
	private next(): void {
		this.sMx = this.tasks.generateNewTask();
		this.graphics.show(this.sMx);
		this.results.init();
	}
}
