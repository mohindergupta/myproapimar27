'use strict';

//var userSchema = require('../../../mypro/models/user');
//var bankSchema = require('../../../mypro/models/bankinfo');
var loginID ='';
var querytype = '';

// block chain const from here      
const fs = require('fs');
var queryuser = require('../../query');

exports.queryUser = async function(req, res) {
    loginID = req.params.loginID;
    querytype = 'user';
    var qresult = {};
    var qresult = await queryuser.qresult(loginID, querytype);
    res.json(qresult);
    var qresult = {};
};

exports.queryBank = async function(req, res) {
    loginID = req.params.loginID;
    querytype = 'bank';
    var qresult = {};
    var qresult = await queryuser.qresult(loginID, querytype);
    res.json(qresult);
    var qresult = {};
};