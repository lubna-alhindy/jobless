const Sequelize = require('sequelize');

const EducationalDetails = require('../Public Details/Educational Details');
const AdditionalDetails  = require('../Public Details/Additional Details');
const BasicDetails       = require('../Public Details/Basic Details');
const sequelize          = require('../db');

// ----------------------------------- //

const User = sequelize.define('users' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    // ---------------------------- //

    date_of_account_creation: {
        type: Sequelize.DATE,
        allowNull: false
    },
    
    // ---------------------------- //

    basic_details_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    additional_details_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    educational_details_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    registration_token:{
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true
    }
} , {
    timestamps: false,
});

User.belongsTo(EducationalDetails, {foreignKey: 'educational_details_id' ,targetKey: 'id' });
User.belongsTo(AdditionalDetails, {foreignKey: 'additional_details_id' ,targetKey: 'id' });
User.belongsTo(BasicDetails, {foreignKey: 'basic_details_id' ,targetKey: 'id'});
EducationalDetails.hasOne(User ,{foreignKey: 'educational_details_id'});
AdditionalDetails.hasOne(User ,{foreignKey: 'additional_details_id'});
BasicDetails.hasOne(User ,{foreignKey: 'basic_details_id'});

module.exports = User;