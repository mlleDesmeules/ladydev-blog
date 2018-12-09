import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Author } from "@core/data/users";

@Component({
	selector   : "app-about",
	templateUrl: "./about.component.html",
	styleUrls  : [ "./about.component.scss" ],
})
export class AboutComponent implements OnInit {

	public author: Author;

	@ViewChild("metadataTranslation") metadataTranslation: TemplateRef<any>;

	constructor(private title: Title,
				private meta: Meta,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.author = this.route.snapshot.data[ "author" ];

		this.setMetadata();
	}

	/**
	 * Set metadata for this page
	 */
	private setMetadata() {
		const nodes = this.metadataTranslation.createEmbeddedView({}).rootNodes;

		this.title.setTitle(nodes[ 0 ].innerText);
		this.meta.updateTag({ name: "description", content: nodes[ 1 ].innerText }, "name='description'");
	}
}
