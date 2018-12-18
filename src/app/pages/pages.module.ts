import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "@shared/pipes/pipes.module";
import { LaddaModule } from "angular2-ladda";

import { PagesRoutingModule } from "./pages-routing.module";

import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@NgModule({
	imports     : [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		PagesRoutingModule,

		PipesModule,
		LaddaModule,
	],
	declarations: [
		AboutComponent,
		ContactComponent,
		PrivacyPolicyComponent,
	],
})
export class PagesModule {
}
