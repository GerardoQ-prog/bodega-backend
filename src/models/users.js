const { DataTypes } = require("sequelize");

const usersModel = (conexion) => {
  const model = conexion.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: { type: DataTypes.STRING(100) },
      password: { type: DataTypes.STRING(200) },
      firstname: { type: DataTypes.STRING(50) },
      lastname: { type: DataTypes.STRING(50) },
      dni: { type: DataTypes.INTEGER(8) },
      phone: { type: DataTypes.INTEGER(9) },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );
  return model;
};

module.exports = { usersModel };
