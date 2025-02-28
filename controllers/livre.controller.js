import * as lireService from "../service/livre.service.js";

// getAll
export const getAll = async (req, res) => {
  const livres = await lireService.getAll();
  res.status(200).json({ livres });
};


