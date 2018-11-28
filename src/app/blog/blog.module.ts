import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { PaginationModule } from "@shared/pagination/pagination.module";
import { PipesModule } from "@shared/pipes/pipes.module";
import { PostSummaryModule } from "@shared/post-summary/post-summary.module";

import { BlogRoutingModule } from "./blog-routing.module";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./post/comment/form/form.component";
import { SingleComponent } from "./post/comment/single/single.component";
import { CommentComponent } from "./post/comment/comment.component";
import { TagsComponent } from "./post/tags/tags.component";
import { FooterComponent } from "./post/footer/footer.component";
import { PostComponent } from "./post/post.component";
import { LinksComponent } from "./post/links/links.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HighlightModule.forRoot({ theme: "darkula", path: "assets/js/highlight" }),
        BlogRoutingModule,
        PaginationModule,
        PostSummaryModule,
        PipesModule,
    ],
    declarations: [
		ListComponent,
		FooterComponent,
		PostComponent,
		TagsComponent,
		CommentComponent,
		SingleComponent,
		FormComponent,
		LinksComponent,
    ],
})
export class BlogModule {
}
