type Customer = {
	id: string;
	name?: string;
	email?: string;
	phone?: string;
	complete?: boolean;
	created?: number;
	changes?: ArrayLike<any>;
	customer_id?: string
}

export { Customer }