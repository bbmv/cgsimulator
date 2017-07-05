// от min до max включительно
export class RandomService {
	random(min: number, max: number): number {
		return Math.floor(Math.random() * (max + 1 - min)) + min;
	}
}
