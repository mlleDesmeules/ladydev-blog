import { Component, Input, Inject, LOCALE_ID } from "@angular/core";
import { Author } from "@core/data/users";

@Component({
    selector    : "app-blog-post-footer",
    templateUrl : "./footer.component.html",
    styleUrls   : [ "./footer.component.scss" ],
})
export class FooterComponent {

    @Input() author: Author;
    @Input() commentCount: number;
    @Input() published: string;

    constructor(@Inject(LOCALE_ID) public locale) {}
}
