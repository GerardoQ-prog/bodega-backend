const { DataTypes } = require("sequelize");

const categoriesModel = (conexion) => {
  const model = conexion.define(
    "categories",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING(100) },
    },
    {
      tableName: "categories",
      timestamps: true,
    }
  );
  return model;
};

module.exports = { categoriesModel };
