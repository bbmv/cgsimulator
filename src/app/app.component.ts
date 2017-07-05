import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
	moduleId: module.id,
  selector: 'app-root',
  template: `
	  <section>
		  <nav>
		  	<ul>
					<div id="bottom-line"></div>
		  		<li routerLink="transform2d" routerLinkActive="active">2D-Transformations</li>
		  		<li routerLink="transform3d" routerLinkActive="active">3D-Transformations</li>
				</ul>
			</nav>
	  	<router-outlet></router-outlet>
		</section>
	`,
	styles: [`
		section { max-width: 600px; font: normal 1rem Arial; padding: .5em; }
		#bottom-line { 
			position: absolute; 
			z-index: 0; 
			border-bottom: 1px solid #ddd; 
			width: 100%; 
			height: 95%;
		}
		ul { list-style: none; overflow: hidden; position: relative;  }
		li { 
			float: left; 
			position: relative;
			z-index: 2;
			font-size: 1.2rem;
			padding: .3em .7em;
			cursor: pointer;
			outline: none;
		}
		.active { color: #00f; border-bottom: 3px solid #00f; }
		li:hover { background-color: #eee; }
	`]
})
export class AppComponent {
}
