import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'controls',
  template: `
  	<button [disabled]="invalid" (click)="transform()">Transform</button>
  	<button (click)="next()">Next</button>
	`,
	styles: [`
		button { 
			font: normal 1rem Arial; 
			margin: 0.7em 0.3em 0 0.3em; 
			padding: 0.1em 0.6em; 
		}
	`] 
})
export class ControlsComponent {
	invalid: boolean;

	@Output() onClickTfm = new EventEmitter<void>();
	@Output() onClickNxt = new EventEmitter<void>();
	
	transform(): void {
		this.onClickTfm.emit();
	}
	next(): void {
		this.onClickNxt.emit();
	}
}
