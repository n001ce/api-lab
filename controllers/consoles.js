import { Console } from "../models/console.js"

export {
  index,
  show,
  create,
  deleteConsole as delete,
  update,
}

function deleteConsole(req, res){
    Console.findByIdAndDelete(req.params.id, function(err, console){
        res.status(200).json(`${console.name} has been deleted`)
    })
}

function update(req, res) {
    Console.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, console){
        res.json(`${console.name} has been updated`)
    })
}

function create(req, res) {
    Console.create(req.body)
    .then(console=>{
        res.json(console)
    })
    .catch(err=>{
        res.json(err)
    })
}

function show(req, res) {
    Console.findById(req.params.id)
    .then(console=>{
        res.json(console)
    })
}

function index(req, res) {
    Console.find({})
    .then(consoles=>{
        res.json(consoles)
    })
}