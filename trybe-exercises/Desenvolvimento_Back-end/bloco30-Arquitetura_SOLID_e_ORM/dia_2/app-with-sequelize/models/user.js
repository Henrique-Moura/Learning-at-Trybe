const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  }, {
    freezeTableName: true // deixa o Model e o migration com o mesmo nome
  });

  return User;
};

module.exports = User;
