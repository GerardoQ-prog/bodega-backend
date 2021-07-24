const { DataTypes } = require("sequelize");

const inventoriesModel = (conexion) => {
  const model = conexion.define(
    "inventories",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      inventorieId: { type: DataTypes.UUID, unique: true, allowNull: false },
      status: { type: DataTypes.INTEGER },
    },
    {
      tableName: "inventories",
      timestamps: true,
    }
  );
  return model;
};

module.exports = { inventoriesModel };
