import { Component } from '@angular/core';
import { RandomService } from "./random.service"

@Component({
	moduleId: module.id,
  selector: 'tasks2d',
  template: `<div>{{message}}</div>`,
	styles: [`div { font-family: Times; }`],
	providers: [RandomService]
})
export class Tasks2dComponent {
	message: string;
	constructor(private randS: RandomService) {}

	generateNewTask(): Array<Array<number>> {
		let random = this.randS.random;
		let tMx = new cg2d.Transform2d;
		let message: string = "Change the transformation matrix to produce ";
		let endMessage: string = ". As a result, the transformed object should match the sample object (a semitransparent figure).";
		let t1: number, t2: number;
		let countAxes: number = 1;
		let nameAxes: string[] = ["x", "y"];
		let na: string;
		let c: number;
		switch(random(0, 5))
		{
			case 0: message = message + "a shearing in the"; 
				c = random(1, nameAxes.length) - 1;
				na = nameAxes[c];
				nameAxes.splice(c,1);
				t1 = random(1,2); t1 *= Math.pow(-1, random(1,2));
				message = message + " " + na + "-direction "  + " by " + t1;
				tMx.shear(na, t1);
			break;
			case 1: message = message + "a translation in the";
				for(let i=0; i<countAxes; i++)
				{
					c = random(1, nameAxes.length) - 1;
					na = nameAxes[c];
					nameAxes.splice(c,1);
					t1 = random(1,2); t1 *= Math.pow(-1, random(1,2));
					message = message + " " + na + "-direction "  + " by " + t1;
					tMx.move(na, t1);
				}
			break;  
			case 2: message = message + "a local scaling in the";
				for(let i=0; i<countAxes; i++)
				{
					c = random(1, nameAxes.length) - 1;
					na = nameAxes[c];
					nameAxes.splice(c,1);
					t1 = random(2,3);
					message = message + " " + na + "-direction "  + " by " + t1;
					tMx.scale(na, t1);
				}
			break;  
			case 3: message = message + "a reflection about the";
				for(let i=0; i<countAxes; i++)
				{
					c = random(1, nameAxes.length) - 1;
					na = nameAxes[c];
					nameAxes.splice(c,1);
					t1 = -1;
					message = message + " " + na + "-axis ";
					if(na=="x") na="y"; else na="x";
					tMx.scale(na, t1);
				}
			break;  
			case 4: message = message + "an overall scaling by ";
				t1 = random(2,3);
				message = message + t1;
				tMx.scale("s", 1/t1);
			break;
			case 5: message = message + "a rotation about the";
				c = random(1, nameAxes.length) - 1;
				t1 = random(1,18); t1 *= 10*Math.pow(-1, random(1,2));
				message = message + " origin " + " by an angle " + t1 + " degrees";
				tMx.rotate(t1);
			break;  
		}
		this.message = message + endMessage;
		return tMx.getElems();
	}
}
