import db from "../models/index.js";

const { Livre } = db;

// CRUD

// GetAll
export const getAll = async () => {
  return await Livre.findAll();
};

// // Get One
// export const getOne = async (id) => {
//   return await Livre.findByPk(id);
// };


// // Create
// export const create = async (livre) => {
//     return await Livre.create(livre);
//   };

// Update

// Delete
