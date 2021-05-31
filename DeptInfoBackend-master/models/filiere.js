module.exports = (sequelize, DataTypes) => {
    const departement = sequelize.define("filiere", {
        filiereId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        departementId: {
            type: DataTypes.INTEGER,
        },
        nom: {
            type: DataTypes.STRING
        },
        abreviation: {
            type: DataTypes.STRING

        },
        chefFiliereId: {
            type: DataTypes.INTEGER,
        },
    });
    return departement;
};
