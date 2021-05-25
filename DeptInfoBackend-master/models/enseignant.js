module.exports = (sequelize, DataTypes) => {
    const enseignant = sequelize.define("enseignant", {
        EnseignantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        EnseignantPassword: {
            type: DataTypes.STRING
        },
        nom: {
            type: DataTypes.STRING
        },
        prenom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING

        },
        specialite: {
            type: DataTypes.STRING,

        },
        grade: {
            type: DataTypes.STRING,

        },

    });
    return enseignant;
};
