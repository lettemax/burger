module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // Giving the Burger model a burger_name of type STRING
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 30]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }

  });

  return Burger;
};