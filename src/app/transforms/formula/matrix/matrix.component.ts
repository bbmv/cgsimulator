import { Component, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'matrix',                       
  template: `
	 	<form #form="ngForm">
	  	<table #tab>
	  		<tr *ngFor="let row of elements; let i=index; trackBy: trackByIndex">
	  			<td *ngFor="let el of row; let j=index; trackBy: trackByIndex">
						<input *ngIf="!editable" [value]=round(el) readonly style="background-color: #fff;" [name]=name(i,j) maxlength="4">
						<input *ngIf="editable" [(ngModel)]="elements[i][j]" [name]=name(i,j) maxlength="4" pattern="[0-9\.\-]+" required>
					</td>
				</tr>
			</table>
		</form>
	`,
	styles: [`
		input {
			text-align: center;
			border-width:0px;
			width: 30px;
			background-color: #eee;
		}
		input:invalid { color: #f00; }
		table {
			border-left: 1px solid #000;
			border-right: 1px solid #000;
			line-height: .3em;
		}
		form { display: inline-block; vertical-align: middle; }
	`] 
})
export class MatrixComponent { 
	@Input() elements: Array<Array<number>>;
	@Input() editable: boolean;

	@ViewChild("form") form: NgForm;

	private name(i: number, j: number): string { return i+"-"+j; }

	private round(el: number): number { 
		let strEl: string = el.toString(); 
		if(strEl.length > 4) el = Math.round(el*100) / 100;
		return el; 
	}

  trackByIndex(index: number, value: number): number {
    return index;
  }
} 
