const express = require("express");
const router = express.Router();

require('../../db/conn');
const HTMLTOPIC = require('../../Admin/Models/htmlModel');
const CSSTOPIC = require('../../Admin/Models/cssModel');
const JAVASCRIPTTOPIC = require('../../Admin/Models/JavascriptModel');
const BOOTSSTRAPTOPIC = require('../../Admin/Models/BootStrapModel');
const PHPTOPIC = require('../../Admin/Models/PhpModel');
const PYTHONTOPIC = require('../../Admin/Models/PythonModel');

router.get('/gethtmlcontent', async (req, res) => {

        let findHtmlTitle = await HTMLTOPIC.find();
        res.send(findHtmlTitle)
})
router.get('/getcsscontent', async (req, res) => {

        let findCssTitle = await CSSTOPIC.find();
        res.send(findCssTitle) 
})
router.get('/getjavascriptcontent', async (req, res) => {

        let findJavascriptTitle = await JAVASCRIPTTOPIC.find();
        res.send(findJavascriptTitle)
})
router.get('/getbootsstrapcontent', async (req, res) => {

        let findbootsstrapTitle = await BOOTSSTRAPTOPIC.find();
        res.send(findbootsstrapTitle)
})
router.get('/getphpcontent', async (req, res) => {

        let findphpTitle = await PHPTOPIC.find();
        res.send(findphpTitle)
})
router.get('/getpythoncontent', async (req, res) => {

        let findPythonTitle = await PYTHONTOPIC.find();
        res.send(findPythonTitle)
})

module.exports = router;