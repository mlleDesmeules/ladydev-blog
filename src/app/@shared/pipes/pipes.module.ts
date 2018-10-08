import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { TimeAgoPipe } from "time-ago-pipe";
import { SafeHtmlPipe } from "./string/safe-html.pipe";
import { TimeAgoPipe } from "@shared/pipes/string/time-ago.pipe";

const PIPES = [
    // third party pipes
    // TimeAgoPipe,

    // custom pipes
    TimeAgoPipe,
    SafeHtmlPipe,
];

@NgModule({
    imports      : [
        CommonModule,
    ],
    declarations : [ ...PIPES ],
    exports      : [ ...PIPES ],
    providers    : [ ...PIPES ],
})
export class PipesModule {
}
