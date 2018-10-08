import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PipesModule } from "@shared/pipes/pipes.module";
import { PostSummaryComponent } from "@shared/post-summary/post-summary.component";

@NgModule({
    imports      : [
        CommonModule,
        RouterModule,
        PipesModule,
    ],
    declarations : [ PostSummaryComponent ],
    exports      : [ PostSummaryComponent ],
})
export class PostSummaryModule {
}
