import axios from "axios";

const Endpoint = "http://localhost:3020";
interface UserData {
	name: string;
	email: string;
	password: string;
}

export const CreateUser = async ({ name, email, password }: UserData) => {
	return await axios
		.post(`${Endpoint}/api/register`, {
			name,
			email,
			password,
		})
		.then((res) => res.data);
};

export const AllProduct = async () => {
	return await axios.get(`${Endpoint}/api/products`).then((res) => res.data);
};
export const SingleProduct = async (id: any) => {
	return await axios
		.get(`${Endpoint}/api/products/${id}`)
		.then((res) => res.data);
};
