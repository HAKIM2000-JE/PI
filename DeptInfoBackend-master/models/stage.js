module.exports = (sequelize, DataTypes) => {
    const stage= sequelize.define("stage", {
        numeroStage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idCreateur: {
            type: DataTypes.INTEGER
        },
        typeStage: {
            type: DataTypes.STRING
        },
        titre: {
            type: DataTypes.STRING
        },
        entreprise: {
            type: DataTypes.STRING

        },
        promotion: {
            type: DataTypes.STRING,

        },
        lieu: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.STRING,

        },

        debut: {
            type: DataTypes.STRING,

        },

        fin: {
            type: DataTypes.STRING,

        }
    });
    return stage;
};
