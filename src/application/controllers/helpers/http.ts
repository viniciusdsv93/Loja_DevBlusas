import { HttpResponse } from "../protocols/http";

export const badRequest = (error: Error): HttpResponse => {
	return {
		statusCode: 400,
		body: error,
	};
};

export const ok = (data: any): HttpResponse => {
	console.log({ data });

	return {
		statusCode: 200,
		body: data,
	};
};

export const created = (data: any): HttpResponse => {
	return {
		statusCode: 201,
		body: data,
	};
};

export const notFound = (id: string): HttpResponse => {
	return {
		statusCode: 404,
		body: {
			message: `Não foi localizado nenhum produto com o id ${id}`,
		},
	};
};
