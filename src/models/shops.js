const { DataTypes } = require("sequelize");

const shopsModel = (conexion) => {
  const model = conexion.define(
    "shops",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING(100) },
      address: { type: DataTypes.STRING(100) },
      ruc: { type: DataTypes.STRING(11) },
    },
    {
      tableName: "shops",
      timestamps: true,
    }
  );
  return model;
};

module.exports = { shopsModel };
