const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      
    code: {
      type: DataTypes.STRING(5), // este numero es el limite de caracteres, seria hasta 5
      primaryKey: true,
      allowNull: false,
      validate: {
        isNotHenry(value){
          if(value.toLowerCase() === 'henry'){
            throw new Error('is henry')
          }
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notIn: [["Henry", "SoyHenry", "Soy Henry"]]
      }
    },
    age: {
      type: DataTypes.INTEGER,// integer es para que sea entero
      allowNull: false,

    },
    race: {
      type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'), // el race solo puede tener alguno de estos vañpres, puede ser uno, sino otro. pero solo entre esos. es limitante
      defaultValue: 'Other',
      allowNull: false,

    },
    hp: {
      type: DataTypes.FLOAT, // ffloat es agregar numeros decimales
      allowNull: false
    },
    mana: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATEONLY, //me trae solo la fecha
      defaultValue: DataTypes.NOW //si no recibe una fecha, por default va a tener la fecha de hoy
    }
  },
  {
    timestamps: false // con esto saca todos los timestamp, con esto sacamos las columnas que nos trae por  default la tabla (creadat, updateayt)
  })
}
 
