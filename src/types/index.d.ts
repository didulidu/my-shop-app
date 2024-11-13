interface AdditionalInformation {
	Warranty: string;
	'In the Box': string[];
}

export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	features: string[];
	specifications: Record<string, any>;
	additionalInformation: AdditionalInformation;
}

export interface CartItem extends Product {
	quantity: number;
}
