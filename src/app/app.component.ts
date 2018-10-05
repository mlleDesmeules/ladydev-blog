import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector    : "app-root",
    templateUrl : "./app.component.html",
    styleUrls   : [ "./app.component.scss" ],
})
export class AppComponent {

    constructor(private router: Router) {
        this.registerRouteChange();
    }

    private registerRouteChange() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                (<any>window).ga("set", "page", event.urlAfterRedirects);
                (<any>window).ga("send", "pageview");
            }
        });
    }
}
