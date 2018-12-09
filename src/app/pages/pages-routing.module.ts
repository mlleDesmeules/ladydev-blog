import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeResolve } from "@core/data/users";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
	{
		path     : "contact",
		component: ContactComponent,
	}, {
		path     : "about-me",
		component: AboutComponent,
		resolve  : {
			author: AboutMeResolve,
		},
	},
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
})
export class PagesRoutingModule {
}
