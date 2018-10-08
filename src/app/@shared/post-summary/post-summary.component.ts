import { Component, Input, LOCALE_ID, Inject } from "@angular/core";
import { Post } from "@core/data/posts";

@Component({
    selector    : "app-post-summary",
    templateUrl : "./post-summary.component.html",
    styleUrls   : [ "./post-summary.component.scss" ],
})
export class PostSummaryComponent {

    @Input() post: Post = new Post();
    @Input() format     = "full";

    constructor(@Inject(LOCALE_ID) public locale) {
    }

    /**
     * If the post ID is null, then the post object is empty and should be considered as "loading"
     * @return {boolean}
     */
    public isLoading(): boolean {
        return (this.post.id === null);
    }

    public showAuthor() {
        return (this.format === "full");
    }
}
