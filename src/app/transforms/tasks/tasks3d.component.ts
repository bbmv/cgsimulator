import { Component } from '@angular/core';
import { RandomService } from "./random.service"

@Component({
	moduleId: module.id,
  selector: 'tasks3d',
  template: `<div>{{message}}</div>`,
	styles: [`div { font-family: Times; }`],
	providers: [RandomService]
})
export class Tasks3dComponent {
	private message: string;
	constructor(private randS: RandomService) {}

	generateNewTask(): Array<Array<number>> {
		let random = this.randS.random;
		let tMx = new cg3d.Transform3d;
		let message: string = "Change the transformation matrix to produce ";
		let endMessage: string = ". As a result, the transformed object should match the sample object (a semitransparent figure).";
		let t1: number, t2: number, t3: number;
		let countAxes: number = random(1, 2);
		let nameAxes: string[] = ["x", "y", "z"];
		let na: string;
		let c: number;
		switch(random(0, 5))
		{
			case 0: message = message + "a perspective with the vanishing point at";
				for(let i=0; i<countAxes; i++)
				{
					c = random(1, nameAxes.length) - 1;
					na = nameAxes[c];
					nameAxes.splice(c,1);
					t1 = random(3, 7); t1 *= Math.pow(-1, random(1, 2));
					message = message + " " + na + " = " + t1;
					tMx.perspective(na, 1/t1);
				}
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
			case 3: message = message + "a reflection through the";
				for(let i=0; i<countAxes; i++)
				{
					c = random(1, nameAxes.length) - 1;
					na = nameAxes[c];
					nameAxes.splice(c,1);
					t1 = -1;
					message = message + " plane " + na + " = 0 ";
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
				na = nameAxes[c];
				t1 = random(1,18); t1 *= 10*Math.pow(-1, random(1,2));
				message = message + " " + na + "-axis " + " by an angle " + t1 + " degrees";
				tMx.rotate(na, t1);
			break;  
		}
		this.message = message + endMessage;
		return tMx.getElems();
	}
}
