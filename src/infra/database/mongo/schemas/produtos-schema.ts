import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	categoria: {
		type: String,
		required: true,
	},
	nota: {
		type: Number,
		required: true,
	},
	preco: {
		type: Number,
		required: true,
	},
	url_imagem: {
		type: String,
		required: true,
	},
	descricao: {
		type: String,
		required: true,
	},
	detalhes_tecnicos: {
		type: String,
		required: true,
	},
});

export { produtoSchema };
