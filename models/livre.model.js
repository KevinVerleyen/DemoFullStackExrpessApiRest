import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Livre extends Model {
    static associate(models) {}
  }

  Livre.init(
    {
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      auteur: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      annee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Livre",
      tableName: "Livres",
      timestamps: true,
    }
  );

  return Livre;
};
