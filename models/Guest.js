/*jshint esversion: 6*/

module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("Guest", {
    name: DataTypes.STRING,
    number: DataTypes.BIGINT,
    will_attend: DataTypes.BOOLEAN,
    accompanying_guests: DataTypes.INTEGER,
    can_drink: DataTypes.BOOLEAN,
    diet_restriction: DataTypes.STRING

  }, {
    classMethods: {
      associate: function(models) {
        // GuestList.belongsTo(models.User);
      }
    }
  });

  return Guest;
};