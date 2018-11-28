import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { LINK_TYPE_CODE, LINK_TYPE_DEMO, PostLink } from "@core/data/posts";

@Component({
	selector   : "app-blog-post-links",
	templateUrl: "./links.component.html",
	styleUrls  : [ "./links.component.scss" ],
})
export class LinksComponent {

	private linkTypes = {
		code: LINK_TYPE_CODE,
		demo: LINK_TYPE_DEMO,
	};

	@Input()
	public links: PostLink[] = [];

	constructor(private sanitizer: DomSanitizer) { }

	/**
	 * Get Link
	 *
	 * This method will find the link with a specific type and then it
	 * will return the link itself.
	 *
	 * @param {string} name
	 *
	 * @returns {string}
	 */
	getLink(name: string): SafeUrl {
		let link: PostLink = null;

		this.links.forEach((val: PostLink) => {
			if (val.type === this.linkTypes[ name ]) {
				link = val;
			}
		});

		return this.sanitizer.bypassSecurityTrustUrl(link.link);
	}

	/**
	 * Has Link
	 *
	 * This method will verify that a link for the specified type exists
	 * in the list of available links.
	 *
	 * @param {string} name
	 *
	 * @returns {boolean}
	 */
	hasLink(name: string): boolean {
		const selectedTypes = this.links.map((val) => val[ "type" ]);

		return (selectedTypes.indexOf(this.linkTypes[ name ]) >= 0);
	}
}
