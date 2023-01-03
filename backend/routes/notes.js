//first step to require the express package
const express = require('express')
const Nota = require('../models/noteModel.js')
const {getNotes,getNote,createNote,deleteNote,updateNote} = require('../controllers/noteController')
//get one constant as router from the express package
const router = express.Router()

//use this constant to do your api
router.get('/example',()=>{

})

router.use((req, res, nextMiddle)=>{
    console.log(req.path, req.method);
    nextMiddle()
})

// routers
router.get('/',getNotes)

router.get('/:id',getNote)
    
router.post("/",createNote)

router.delete('/:id',deleteNote)

router.patch('/:id',updateNote)

//export this constant to be configrable for outside files
module.exports = router;



//5- create constant outside and = it ot require('file path as a packge')