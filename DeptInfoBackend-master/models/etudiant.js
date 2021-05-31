module.exports = (sequelize, DataTypes) => {
    const etudiant = sequelize.define("etudiant", {
        etudiantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        matricule: {
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
        EtudiantPassword: {
            type: DataTypes.STRING
        },
        genie: {
            type: DataTypes.STRING,

        },

    });
    return etudiant;
};
