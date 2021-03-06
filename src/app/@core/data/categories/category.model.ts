import { CategoryCount } from "./category-count.model";

export class Category {
    public id: number;
    public name: string;
    public slug: string;

    public postCount = 0;

    constructor(model: any = null) {
        if (!model) {
            return;
        }

        this.id   = model.id;
        this.name = model.name;
        this.slug = model.slug;
    }

    public getUrl(): string {
        return "/blog/" + this.slug;
    }

    setPostCount(counts: CategoryCount[]) {
        counts.forEach((el) => {
            if (el.id === this.id) {
                this.postCount = el.count;
            }
        });
    }
}
