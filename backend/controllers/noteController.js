const Note = require('../models/noteModel')
const mongoose =require('mongoose')
const {AddNote} = require('../validation/addNoteFormVal')

// get all notes
const getNotes = async (req,res)=>{
    try{
        const notes = await Note.find({}).sort({createdAt:-1})
        res.status(200).json(notes)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}



//get a single note
const getNote=async(req,res)=>{
    const {id}=req.params
    try{
        const note = await Note.findById(id)

        if(!note){
            return res.status(404).json({error:'No such workout'})
        }
        res.status(200).json(note)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


//create new note
const createNote = async (req,res)=>{
    const {title, content, importance} = req.body

    let emptyFields =  AddNote(title, content, importance)
    console.log("from create Note Api: "+ emptyFields.join(','))
    try{
        const note = await Note.create({title, content, importance})
        res.status(200).json(note)
    }catch(error){
        res.status(400).json({error: "Fill empty fields", "emptyFields":emptyFields})
    }
}




//delete a note
const deleteNote = async(req,res)=>{
    const {id} = req.params
    const note = await Note.findOneAndDelete({_id:id})
    !note? res.status(400).json({error:error.message}):res.status(200).json(note)
}


//update a note
const updateNote =async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    try{
        const note = await Note.findOneAndUpdate({_id:id},{...req.body})
        res.status(200).json(note)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote
}