const { DataTypes } = require("sequelize");

const salesModel = (conexion) => {
  const model = conexion.define(
    "sales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      dateSale: { type: DataTypes.STRING(100) },
      saleId: { type: DataTypes.INTEGER },
      priceUnit: { type: DataTypes.FLOAT },
      quantity: { type: DataTypes.INTEGER },
      priceTotal: { type: DataTypes.FLOAT },
      shopId: { type: DataTypes.INTEGER },
    },
    {
      tableName: "sales",
      timestamps: true,
    }
  );
  return model;
};

module.exports = { salesModel };
