import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'results',
  template: `
  	<div>
  		<span>Result: <b #results [textContent]="result"></b></span>
  		<span>Score: <b [textContent]="score"></b></span>
		</div>
	`,
	styles: [` 
		div { margin: 0.7em 0 0.4em 0; }
		b { font-weight: normal; }
		span { 
			font-size: 1rem; 
			font-weight: bold;
			width: 8em;
			display: inline-block; 
		}
	`] 
})
export class ResultsComponent {
	private result: string;
	private score: string;
	private correct: number = 0;
	private all: number = 0;
	@ViewChild('results') results: ElementRef;

	init(): void {
		this.result = "None";
		this.results.nativeElement.style.color = "#000";
		if(!this.score || this.all === 10) this.score = "0/0";
	}
	show(val: boolean): void {
		this.all += 1;

		if(this.all > 10) { 
			this.all = 0;
			this.correct = 0;
		}

		if(val) {
			this.correct += 1;
			this.result = "Correct";
			this.results.nativeElement.style.color = "#3c3";
		}
		else {
			this.result = "Incorrect";
			this.results.nativeElement.style.color = "#f00";
		}

		this.score = this.correct + "/" + this.all;
	}
}
