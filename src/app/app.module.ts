import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { Routes, RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';

import {  AppComponent, Transform2dComponent, Transform3dComponent, 
					MatrixComponent, Graphics2dComponent, Graphics3dComponent, FormulaComponent, 
				  Tasks2dComponent, Tasks3dComponent, ResultsComponent, ControlsComponent } from './index';

const rts: Routes = [
	{ path: "transform2d", component: Transform2dComponent },
	{ path: "transform3d", component: Transform3dComponent },
	{ path: "", redirectTo: "/transform2d", pathMatch: 'full' },
	{ path: "**", redirectTo: "/transform2d", pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, Transform2dComponent, Transform3dComponent, 
    MatrixComponent, Graphics2dComponent, Graphics3dComponent, FormulaComponent, 
    Tasks2dComponent, Tasks3dComponent, ResultsComponent, ControlsComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(rts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
