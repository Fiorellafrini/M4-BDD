const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
      name: {
         type: DataTypes.STRING, 
         allowNull: false,
         unique: 'compositeIndex', //la combinacion con mana es unico
      },
      description: {
         type: DataTypes.TEXT
      },
      mana_cost: {
         type: DataTypes.FLOAT,
         allowNull: false,
         unique: 'compositeIndex',
         validate: {
            min: 10.0,
            max: 250.0  
         }
      },
     
      // summary: {
      //    type: DataTypes.VIRTUAL, //no se guarda en la bdd, es virtual
      //    get(){
      //       return ` ${this.name} (${Math.floor(this.mana_cost)} points of name) -
      //       Description: ${this.description}` 
      //    }
      // },
   });
};

