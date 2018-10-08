import { Component, Input, Inject, LOCALE_ID } from "@angular/core";

@Component({
    selector    : "app-home-featured-post",
    templateUrl : "./featured-post.component.html",
    styleUrls   : [ "./featured-post.component.scss" ],
})
export class FeaturedPostComponent {

    @Input() public post;
    @Input() public imgSide: string;

    constructor(@Inject(LOCALE_ID) public locale) {
    }

    displayImage(side: string): boolean {
        return (this.imgSide === side);
    }
}
