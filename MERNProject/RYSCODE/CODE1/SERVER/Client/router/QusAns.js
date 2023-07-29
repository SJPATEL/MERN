const express = require('express')
const router = express.Router();


require('../../db/conn');
const HTMLTOPIC = require('../../Admin/Models/htmlModel');
const CSSTOPIC = require('../../Admin/Models/cssModel');
const JAVASCRIPTTOPIC = require('../../Admin/Models/JavascriptModel');
const BOOTSSTRAPTOPIC = require('../../Admin/Models/BootStrapModel');
const PHPTOPIC = require('../../Admin/Models/PhpModel');
const PYTHONTOPIC = require('../../Admin/Models/PythonModel');

 
// ====> add questions 
router.patch('/htmlquestion/:id', async (req, res) => {
    let success = false;
    try {
        const id = req.params.id;
        const { question, answser, qus } = req.body;
        if (answser === undefined) {
            if (question !== "") {
                const cheackpresent = await HTMLTOPIC.findOne({
                    $and:
                        [
                            { _id: id }, { qusans: { $elemMatch: { questions: question } } }
                        ]
                });

                if (cheackpresent) {
                    success = false;
                    return res.status(400).json({ 'error': "Question is already prsent cheack now ", success });
                } else {
                    const addquestion = await HTMLTOPIC.findByIdAndUpdate({ _id: id }, {
                        $push: { qusans: [{ questions: question }] }
                    })
                    await addquestion.save();
                    if (addquestion) {
                        success = true;
                        return res.status(200).json({ 'error': "Your question successfully add ", success });
                    } else {
                        success = false; 
                        return res.status(400).json({ 'error': "Your question is not add for  tachenicale error ", success });
                    }
                }
            } else { 
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character question ", success });
            } 
 
        } else {
            if (answser !== "") {
                const cheackpresent2 = await HTMLTOPIC.updateOne({_id:id,"qusans.questions" : qus},
                {
                    $push : 
                        {"qusans.$.answer":answser}
                })

                if (cheackpresent2) {
                    success = false;
                    return res.status(400).json({ 'error': "Your answer  is successfully add", success });
                }else{
                    return res.status(400).json({ 'error': "answer not add for Some tachenicale error ", success });
                }

            } else {
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character ansewer ", success });
            }
        }


    } catch (error) {
        success = false;
        return res.status(400).json({ 'error': "Some tachenicale error ", success });
    }

})
router.patch('/cssquestion/:id', async (req, res) => {
    let success = false;
    try {
        const id = req.params.id;
        const { question, answser, qus } = req.body;
        if (answser === undefined) {
            if (question !== "") {
                const cheackpresent = await CSSTOPIC.findOne({
                    $and:
                        [
                            { _id: id }, { qusans: { $elemMatch: { questions: question } } }
                        ]
                });

                if (cheackpresent) {
                    success = false;
                    return res.status(400).json({ 'error': "Question is already prsent cheack now ", success });
                } else {
                    const addquestion = await CSSTOPIC.findByIdAndUpdate({ _id: id }, {
                        $push: { qusans: [{ questions: question }] }
                    })
                    await addquestion.save();
                    if (addquestion) {
                        success = true;
                        return res.status(200).json({ 'error': "Your question successfully add ", success });
                    } else {
                        success = false; 
                        return res.status(400).json({ 'error': "Your question is not add for  tachenicale error ", success });
                    }
                }
            } else { 
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character question ", success });
            } 
 
        } else {
            if (answser !== "") {
                const cheackpresent2 = await CSSTOPIC.updateOne({_id:id,"qusans.questions" : qus},
                {
                    $push : 
                        {"qusans.$.answer":answser}
                })

                if (cheackpresent2) {
                    success = false;
                    return res.status(400).json({ 'error': "Your answer  is successfully add", success });
                }else{
                    return res.status(400).json({ 'error': "answer not add for Some tachenicale error ", success });
                }

            } else {
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character ansewer ", success });
            }
        }


    } catch (error) {
        success = false;
        return res.status(400).json({ 'error': "Some tachenicale error ", success });
    }
})
router.patch('/javascriptquestion/:id', async (req, res) => {
    let success = false;
    try {
        const id = req.params.id;
        const { question, answser, qus } = req.body;
        if (answser === undefined) {
            if (question !== "") {
                const cheackpresent = await JAVASCRIPTTOPIC.findOne({
                    $and:
                        [
                            { _id: id }, { qusans: { $elemMatch: { questions: question } } }
                        ]
                });

                if (cheackpresent) {
                    success = false;
                    return res.status(400).json({ 'error': "Question is already prsent cheack now ", success });
                } else {
                    const addquestion = await JAVASCRIPTTOPIC.findByIdAndUpdate({ _id: id }, {
                        $push: { qusans: [{ questions: question }] }
                    })
                    await addquestion.save();
                    if (addquestion) {
                        success = true;
                        return res.status(200).json({ 'error': "Your question successfully add ", success });
                    } else {
                        success = false; 
                        return res.status(400).json({ 'error': "Your question is not add for  tachenicale error ", success });
                    }
                }
            } else { 
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character question ", success });
            } 
 
        } else {
            if (answser !== "") {
                const cheackpresent2 = await JAVASCRIPTTOPIC.updateOne({_id:id,"qusans.questions" : qus},
                {
                    $push : 
                        {"qusans.$.answer":answser}
                })

                if (cheackpresent2) {
                    success = false;
                    return res.status(400).json({ 'error': "Your answer  is successfully add", success });
                }else{
                    return res.status(400).json({ 'error': "answer not add for Some tachenicale error ", success });
                }

            } else { 
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character ansewer ", success });
            }
        } 
  

    } catch (error) {
        success = false;
        return res.status(400).json({ 'error': "Some tachenicale error ", success });
    }

})
router.patch('/bootsstrapquestion/:id', async (req, res) => {
    let success = false;
    try {
        const id = req.params.id;
        const { question, answser, qus } = req.body;
        if (answser === undefined) {
            if (question !== "") {
                const cheackpresent = await BOOTSSTRAPTOPIC.findOne({
                    $and:
                        [
                            { _id: id }, { qusans: { $elemMatch: { questions: question } } }
                        ]
                });

                if (cheackpresent) {
                    success = false;
                    return res.status(400).json({ 'error': "Question is already prsent cheack now ", success });
                } else {
                    const addquestion = await BOOTSSTRAPTOPIC.findByIdAndUpdate({ _id: id }, {
                        $push: { qusans: [{ questions: question }] }
                    })
                    await addquestion.save();
                    if (addquestion) {
                        success = true;
                        return res.status(200).json({ 'error': "Your question successfully add ", success });
                    } else {
                        success = false; 
                        return res.status(400).json({ 'error': "Your question is not add for  tachenicale error ", success });
                    }
                }
            } else { 
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character question ", success });
            } 
 
        } else {
            if (answser !== "") {
                const cheackpresent2 = await BOOTSSTRAPTOPIC.updateOne({_id:id,"qusans.questions" : qus},
                {
                    $push : 
                        {"qusans.$.answer":answser}
                })

                if (cheackpresent2) {
                    success = false;
                    return res.status(400).json({ 'error': "Your answer  is successfully add", success });
                }else{
                    return res.status(400).json({ 'error': "answer not add for Some tachenicale error ", success });
                }

            } else {
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character ansewer ", success });
            }
        }


    } catch (error) {
        success = false;
        return res.status(400).json({ 'error': "Some tachenicale error ", success });
    }

})
router.patch('/phpquestion/:id', async (req, res) => {
    let success = false;
    try {
        const id = req.params.id;
        const { question, answser, qus } = req.body;
        if (answser === undefined) {
            if (question !== "") {
                const cheackpresent = await PHPTOPIC.findOne({
                    $and:
                        [
                            { _id: id }, { qusans: { $elemMatch: { questions: question } } }
                        ]
                });

                if (cheackpresent) {
                    success = false;
                    return res.status(400).json({ 'error': "Question is already prsent cheack now ", success });
                } else {
                    const addquestion = await PHPTOPIC.findByIdAndUpdate({ _id: id }, {
                        $push: { qusans: [{ questions: question }] }
                    })
                    await addquestion.save();
                    if (addquestion) {
                        success = true;
                        return res.status(200).json({ 'error': "Your question successfully add ", success });
                    } else {
                        success = false; 
                        return res.status(400).json({ 'error': "Your question is not add for  tachenicale error ", success });
                    }
                }
            } else { 
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character question ", success });
            } 
 
        } else {
            if (answser !== "") {
                const cheackpresent2 = await PHPTOPIC.updateOne({_id:id,"qusans.questions" : qus},
                {
                    $push : 
                        {"qusans.$.answer":answser}
                })

                if (cheackpresent2) {
                    success = false;
                    return res.status(400).json({ 'error': "Your answer  is successfully add", success });
                }else{
                    return res.status(400).json({ 'error': "answer not add for Some tachenicale error ", success });
                }

            } else {
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character ansewer ", success });
            }
        }


    } catch (error) {
        success = false;
        return res.status(400).json({ 'error': "Some tachenicale error ", success });
    }

})
router.patch('/pytonquestion/:id', async (req, res) => {
    let success = false;
    try {
        const id = req.params.id;
        const { question, answser, qus } = req.body;
        if (answser === undefined) {
            if (question !== "") {
                const cheackpresent = await PYTHONTOPIC.findOne({
                    $and:
                        [
                            { _id: id }, { qusans: { $elemMatch: { questions: question } } }
                        ]
                });

                if (cheackpresent) {
                    success = false;
                    return res.status(400).json({ 'error': "Question is already prsent cheack now ", success });
                } else {
                    const addquestion = await PYTHONTOPIC.findByIdAndUpdate({ _id: id }, {
                        $push: { qusans: [{ questions: question }] }
                    })
                    await addquestion.save();
                    if (addquestion) {
                        success = true;
                        return res.status(200).json({ 'error': "Your question successfully add ", success });
                    } else {
                        success = false; 
                        return res.status(400).json({ 'error': "Your question is not add for  tachenicale error ", success });
                    }
                }
            } else { 
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character question ", success });
            } 
 
        } else {
            if (answser !== "") {
                const cheackpresent2 = await PYTHONTOPIC.updateOne({_id:id,"qusans.questions" : qus},
                {
                    $push : 
                        {"qusans.$.answer":answser}
                })

                if (cheackpresent2) {
                    success = false;
                    return res.status(400).json({ 'error': "Your answer  is successfully add", success });
                }else{
                    return res.status(400).json({ 'error': "answer not add for Some tachenicale error ", success });
                }

            } else {
                success = false;
                return res.status(400).json({ 'error': "Enter mimum 10 character ansewer ", success });
            }
        }


    } catch (error) {
        success = false;
        return res.status(400).json({ 'error': "Some tachenicale error ", success });
    }


})
 

module.exports = router;