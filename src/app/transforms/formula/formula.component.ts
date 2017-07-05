import { Component, ViewChild } from '@angular/core';
import { MatrixComponent } from "./matrix/matrix.component"

@Component({
	moduleId: module.id,
  selector: 'formula',
  template: `
  	<div id="formula">
	  	<matrix class="object" [elements]="mxOriginal" [editable]=false></matrix>
	  	<div class="sign">x</div>
	  	<matrix #transf [elements]="mxTransform" [editable]=true></matrix>
	  	<div class="sign">=</div>
	  	<matrix class="object" [elements]="mxChanged" [editable]=false></matrix>
  	</div>
	`,
	styles: [`
		.sign {
			font-size: 1.1rem;
			padding: 0 2px;
		  display: inline-block;
		  vertical-align: middle;
		}
		#formula {
			margin: 0;
		  display: inline-block; text-align:left;
		}
		@media screen and (max-width: 460px) {
			.object, .sign { display: none; }
		}
	`] 
})
export class FormulaComponent {
	@ViewChild("transf") transf: MatrixComponent;

	mxOriginal: Array<Array<number>>;
	mxTransform: Array<Array<number>>;
	mxChanged: Array<Array<number>>;
}
