// compare two transformation matrics
export class CompareTransformService {
	compare(mx1: Array<Array<number>>, mx2: Array<Array<number>>): boolean {
    let rows: number = mx1.length;
    let cols: number = mx1[0].length;

    for(let i:number=0; i<rows; i+=1) {
      for(let j:number=0, el1, el2; j<cols; j+=1) {
      	el1 = Math.round(mx1[i][j]*10)/10;
      	el2 = Math.round(mx2[i][j]*10)/10;
      	if(el1!==el2) return false;
      }
    }
		return true;
	}
}