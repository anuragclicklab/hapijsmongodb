var DaoManager = require('../DaoManager');
var async = require('async');
//var CONFIG = require('../../Config');
var models = require('../../Models');


var insertuser = function (data, callback) {
    //console.log("insert");
    DaoManager.setData(models.users, data, callback);
};

module.exports ={
    insertuser:insertuser
}