const express = require("express");
const router = express.Router();

require('../../db/conn')

const HTMLTOPIC = require('../Models/htmlModel');
const CSSTOPIC = require('../Models/cssModel');
const JAVASCRIPTTOPIC = require('../Models/JavascriptModel');
const BOOTSTRAPTOPIC = require('../Models/BootStrapModel');
const PHPTOPIC = require('../Models/PhpModel');
const PYTHONTOPIC = require('../Models/PythonModel');
const uploadMiddleware = require("../../middleware/multermiddleware");



router.post('/imagevedio', (req, res, next) => {
    let img = [];
    const counter = req.header('counter1');
    const counter2 = req.header('counter2'); 
    for (let c = 0; c <= (counter + counter2); c++) {

        img.push({ name: `myFile${c}` })
        img.push({ name: `video${c}` })
    }

    uploadMiddleware.fields(img)
        (req, res, function (error) {
            if (error) {

                return res.status(400).json({ error: "successfully not add image  !", success: 'false' });

            } else {

                return res.status(400).json({ error: "successfully add image  !", success: 'true' });
            }
        })

    next();
}, async (req, res) => {


})

router.post('/htmlstore', async (req, res) => {

    try {
        const { descCode, imageCode, vedioCode } = req.body;
        const { title, topic, keyword } = req.body.topics;
        const cheacktitle = await HTMLTOPIC.findOne({ title });
        if (cheacktitle) {
            success = false;
            return res.status(400).json({ error: "Allready title exist  !", success })
        } else {
             
            const descCodeArrray = []; 
            const counter = req.header('counter');
            for (let c = 0; c <= counter; c++) {
                const d = `description${c}`;
                const c1 = `code${c}`;
                let item = { ['description']: descCode[d],['code']: descCode[c1]}
                descCodeArrray.push(item);
            }
            const imgdescArrray = []; 
            const counter1 = req.header('counter1');
            for (let c = 0; c <= counter1; c++) {
                const i = `myFile${c}`;
                const i1 = `imageDescription${c}`;
                let item = { ['image']: imageCode[i],['imagedesc']: imageCode[i1]}
                imgdescArrray.push(item); 
            }
            const vediodescArrray = []; 
            const counter2 = req.header('counter2');
            for (let c = 0; c <= counter2; c++) {
                const d = `video${c}`;
                const c1 = `videoDescription${c}`;
                let item = { ['vedio']: vedioCode[d],['vediodesc']: vedioCode[c1]}
                vediodescArrray.push(item);
            }

            const additem = await HTMLTOPIC({
                title: title,
                topic: topic,
                desccode: descCodeArrray,
                imgdesc: imgdescArrray,
                vediodesc: vediodescArrray,
                keyword: keyword

            })
            const store = await additem.save();
            if (store) {
                success = true;
                return res.status(200).json({ error: "add item process successfully submit  !", success })

            } else {
                success = false;
                return res.status(400).json({ error: "add  item  not success fully1  !", success })
            }
        }

    } catch (error) {
        success = false;

        return res.status(400).json({ error: "add item not success fully2 !", success });
    }
})

router.post('/cssstore', async (req, res) => {

    try {
        const { descCode, imageCode, vedioCode } = req.body;
        const { title, topic, keyword } = req.body.topics;

        const cheacktitle = await CSSTOPIC.findOne({ title });
        if (cheacktitle) {
            success = false;
            return res.status(400).json({ error: "Allready title exist  !", success })
        } else {

            const descCodeArrray = []; 
            const counter = req.header('counter');
            for (let c = 0; c <= counter; c++) {
                const d = `description${c}`;
                const c1 = `code${c}`;
                let item = { ['description']: descCode[d],['code']: descCode[c1]}
                descCodeArrray.push(item);
            }
            const imgdescArrray = []; 
            const counter1 = req.header('counter1');
            for (let c = 0; c <= counter1; c++) {
                const i = `myFile${c}`;
                const i1 = `imageDescription${c}`;
                let item = { ['image']: imageCode[i],['imagedesc']: imageCode[i1]}
                imgdescArrray.push(item); 
            }
            const vediodescArrray = []; 
            const counter2 = req.header('counter2');
            for (let c = 0; c <= counter2; c++) {
                const d = `video${c}`;
                const c1 = `videoDescription${c}`;
                let item = { ['vedio']: vedioCode[d],['vediodesc']: vedioCode[c1]}
                vediodescArrray.push(item);
            }

            const additem = await CSSTOPIC({
                title: title,
                topic: topic,
                desccode: descCodeArrray,
                imgdesc: imgdescArrray,
                vediodesc: vediodescArrray,
                keyword: keyword

            })
            const store = await additem.save();
            if (store) {
                success = true;
                return res.status(200).json({ error: "add item process successfully submit  !", success })

            } else {
                success = false;
                return res.status(400).json({ error: "add  item  not success fully1  !", success })
            }
        }

    } catch (error) {
        success = false;

        return res.status(400).json({ error: "add item not success fully2 !", success });
    }
})
router.post('/javascriptlstore', async (req, res) => {

    try {
        const { descCode, imageCode, vedioCode } = req.body;
        const { title, topic, keyword } = req.body.topics;

        const cheacktitle = await JAVASCRIPTTOPIC.findOne({ title });
        if (cheacktitle) {
            success = false;
            return res.status(400).json({ error: "Allready title exist  !", success })
        } else {

            const descCodeArrray = []; 
            const counter = req.header('counter');
            for (let c = 0; c <= counter; c++) {
                const d = `description${c}`;
                const c1 = `code${c}`;
                let item = { ['description']: descCode[d],['code']: descCode[c1]}
                descCodeArrray.push(item);
            }
            const imgdescArrray = []; 
            const counter1 = req.header('counter1');
            for (let c = 0; c <= counter1; c++) {
                const i = `myFile${c}`;
                const i1 = `imageDescription${c}`;
                let item = { ['image']: imageCode[i],['imagedesc']: imageCode[i1]}
                imgdescArrray.push(item); 
            }
            const vediodescArrray = []; 
            const counter2 = req.header('counter2');
            for (let c = 0; c <= counter2; c++) {
                const d = `video${c}`;
                const c1 = `videoDescription${c}`;
                let item = { ['vedio']: vedioCode[d],['vediodesc']: vedioCode[c1]}
                vediodescArrray.push(item);
            }

            const additem = await JAVASCRIPTTOPIC({
                title: title,
                topic: topic,
                desccode: descCodeArrray,
                imgdesc: imgdescArrray,
                vediodesc: vediodescArrray,
                keyword: keyword

            })
            const store = await additem.save();
            if (store) {
                success = true;
                return res.status(200).json({ error: "add item process successfully submit  !", success })

            } else {
                success = false;
                return res.status(400).json({ error: "add  item  not success fully1  !", success })
            }
        }

    } catch (error) {
        success = false;

        return res.status(400).json({ error: "add item not success fully2 !", success });
    }
})
router.post('/bootsstrapstore', async (req, res) => {

    try {
        const { descCode, imageCode, vedioCode } = req.body;
        const { title, topic, keyword } = req.body.topics;

        const cheacktitle = await BOOTSTRAPTOPIC.findOne({ title });
        if (cheacktitle) {
            success = false;
            return res.status(400).json({ error: "Allready title exist  !", success })
        } else {

            const descCodeArrray = []; 
            const counter = req.header('counter');
            for (let c = 0; c <= counter; c++) {
                const d = `description${c}`;
                const c1 = `code${c}`;
                let item = { ['description']: descCode[d],['code']: descCode[c1]}
                descCodeArrray.push(item);
            }
            const imgdescArrray = []; 
            const counter1 = req.header('counter1');
            for (let c = 0; c <= counter1; c++) {
                const i = `myFile${c}`;
                const i1 = `imageDescription${c}`;
                let item = { ['image']: imageCode[i],['imagedesc']: imageCode[i1]}
                imgdescArrray.push(item); 
            }
            const vediodescArrray = []; 
            const counter2 = req.header('counter2');
            for (let c = 0; c <= counter2; c++) {
                const d = `video${c}`;
                const c1 = `videoDescription${c}`;
                let item = { ['vedio']: vedioCode[d],['vediodesc']: vedioCode[c1]}
                vediodescArrray.push(item);
            }
            const additem = await BOOTSTRAPTOPIC({
                title: title,
                topic: topic,
                desccode: descCodeArrray,
                imgdesc: imgdescArrray,
                vediodesc: vediodescArrray,
                keyword: keyword

            })
            const store = await additem.save();
            if (store) {
                success = true;
                return res.status(200).json({ error: "add item process successfully submit  !", success })

            } else {
                success = false;
                return res.status(400).json({ error: "add  item  not success fully1  !", success })
            }
        }

    } catch (error) {
        success = false;

        return res.status(400).json({ error: "add item not success fully2 !", success });
    }
})
router.post('/phpstore', async (req, res) => {

    try {
        const { descCode, imageCode, vedioCode } = req.body;
        const { title, topic, keyword } = req.body.topics;

        const cheacktitle = await PHPTOPIC.findOne({ title });
        if (cheacktitle) {
            success = false;
            return res.status(400).json({ error: "Allready title exist  !", success })
        } else {
            const descCodeArrray = []; 
            const counter = req.header('counter');
            for (let c = 0; c <= counter; c++) {
                const d = `description${c}`;
                const c1 = `code${c}`;
                let item = { ['description']: descCode[d],['code']: descCode[c1]}
                descCodeArrray.push(item);
            }
            const imgdescArrray = []; 
            const counter1 = req.header('counter1');
            for (let c = 0; c <= counter1; c++) {
                const i = `myFile${c}`;
                const i1 = `imageDescription${c}`;
                let item = { ['image']: imageCode[i],['imagedesc']: imageCode[i1]}
                imgdescArrray.push(item); 
            }
            const vediodescArrray = []; 
            const counter2 = req.header('counter2');
            for (let c = 0; c <= counter2; c++) {
                const d = `video${c}`;
                const c1 = `videoDescription${c}`;
                let item = { ['vedio']: vedioCode[d],['vediodesc']: vedioCode[c1]}
                vediodescArrray.push(item);
            }

            const additem = await PHPTOPIC({
                title: title,
                topic: topic,
                desccode: descCodeArrray,
                imgdesc: imgdescArrray,
                vediodesc: vediodescArrray,
                keyword: keyword

            })
            const store = await additem.save();
            if (store) {
                success = true;
                return res.status(200).json({ error: "add item process successfully submit  !", success })

            } else {
                success = false;
                return res.status(400).json({ error: "add  item  not success fully1  !", success })
            }
        }

    } catch (error) {
        success = false;

        return res.status(400).json({ error: "add item not success fully2 !", success });
    }
})
router.post('/pythonstore', async (req, res) => {

    try {
        const { descCode, imageCode, vedioCode } = req.body;
        const { title, topic, keyword } = req.body.topics;

        const cheacktitle = await PYTHONTOPIC.findOne({ title });
        if (cheacktitle) {
            success = false;
            return res.status(400).json({ error: "Allready title exist  !", success })
        } else {

            const descCodeArrray = []; 
            const counter = req.header('counter');
            for (let c = 0; c <= counter; c++) {
                const d = `description${c}`;
                const c1 = `code${c}`;
                let item = { ['description']: descCode[d],['code']: descCode[c1]}
                descCodeArrray.push(item);
            }
            const imgdescArrray = []; 
            const counter1 = req.header('counter1');
            for (let c = 0; c <= counter1; c++) {
                const i = `myFile${c}`;
                const i1 = `imageDescription${c}`;
                let item = { ['image']: imageCode[i],['imagedesc']: imageCode[i1]}
                imgdescArrray.push(item); 
            }
            const vediodescArrray = []; 
            const counter2 = req.header('counter2');
            for (let c = 0; c <= counter2; c++) {
                const d = `video${c}`;
                const c1 = `videoDescription${c}`;
                let item = { ['vedio']: vedioCode[d],['vediodesc']: vedioCode[c1]}
                vediodescArrray.push(item);
            }

            const additem = await PYTHONTOPIC({
                title: title,
                topic: topic,
                desccode: descCodeArrray,
                imgdesc: imgdescArrray,
                vediodesc: vediodescArrray,
                keyword: keyword

            })
            const store = await additem.save();
            if (store) {
                success = true;
                return res.status(200).json({ error: "add item process successfully submit  !", success })

            } else {
                success = false;
                return res.status(400).json({ error: "add  item  not success fully1  !", success })
            }
        }

    } catch (error) {
        success = false;

        return res.status(400).json({ error: "add item not success fully2 !", success });
    }
})


module.exports = router;