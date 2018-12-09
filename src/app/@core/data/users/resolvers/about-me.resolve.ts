import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";

import { Author } from "@core/data/users/author.model";
import { AuthorService } from "@core/data/users/author.service";

@Injectable({
	providedIn: "root",
})
export class AboutMeResolve implements Resolve<Author> {

	constructor(private _router: Router, private service: AuthorService) {
	}

	resolve(route: ActivatedRouteSnapshot) {
		return this.service.findOne().toPromise()
			.then((result: Author) => result);
	}
}
