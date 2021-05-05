module.exports = (sequelize, DataTypes) => {
    const commentaire = sequelize.define("commentaire", {
        numerocommentaire: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idCreateur: {
            type: DataTypes.INTEGER
        },
        idDocument: {
            type: DataTypes.INTEGER
        },
       
        
        text: {
            type: DataTypes.STRING,

        }
    });
    return commentaire;
};
