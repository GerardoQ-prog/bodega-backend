const { DataTypes } = require("sequelize");

const inventoriesProductsModel = (conexion) => {
  const model = conexion.define(
    "inventories-products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      inventorieId: { type: DataTypes.UUID },
      quantityCurrent: { type: DataTypes.INTEGER },
      quantityReal: { type: DataTypes.INTEGER },
    },
    {
      tableName: "inventories-products",
      timestamps: true,
    }
  );
  return model;
};

module.exports = { inventoriesProductsModel };
