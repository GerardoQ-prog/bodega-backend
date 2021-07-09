const { DataTypes } = require("sequelize");

const productsModel = (conexion) => {
  const model = conexion.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING(100) },
      price: { type: DataTypes.FLOAT },
      quantity: { type: DataTypes.INTEGER },
    },
    {
      tableName: "products",
      timestamps: true,
    }
  );
  return model;
};

module.exports = { productsModel };
