export class PostLink {
	public type: number;
	public link: string;

	constructor(model: any = null) {
		if (!model) {
			return;
		}

		this.type = model.type;
		this.link = model.link;
	}

}

// constants for possible link types
export const LINK_TYPE_CODE = 1;
export const LINK_TYPE_DEMO = 2;
