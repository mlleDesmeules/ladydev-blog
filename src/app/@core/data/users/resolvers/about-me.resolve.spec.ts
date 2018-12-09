import { inject, TestBed } from "@angular/core/testing";

import { AboutMeResolve } from "./about-me.resolve";

describe("AboutMeResolve", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ AboutMeResolve ],
		});
	});

	it("should be created", inject([ AboutMeResolve ], (service: AboutMeResolve) => {
		expect(service).toBeTruthy();
	}));
});
