module.exports = (sequelize, DataTypes) => {
    const departement = sequelize.define("departement", {
        departementId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING
        },
        abreviation: {
            type: DataTypes.STRING

        },
        chefDepartementId: {
            type: DataTypes.INTEGER,

        },
    });
    return departement;
};
