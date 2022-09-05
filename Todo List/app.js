// Libraries
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mon  = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Mongo DB
mon.connect('mongodb://localhost:27017/List', {useNewUrlParser: true});

const to_do = mon.Schema({
  name: String
});

const Todo = mon.model('Todo', to_do);

const item1 = ({name: 'Welcome to Todo app'});
const item2 = ({name: 'Check square to delete note'});
const item3 = ({name: 'Click + to add note'});

const items = [item1, item2, item3];


app.get("/", function(req, res) {
  const day = date.getDate();
  Todo.find({}, function(err, data) {
    if(data.length === 0) {
      Todo.insertMany(items, function(err) {
        if(err) {
          console.log(err);
        }
        else {
          console.log("Added Successfully");
        }
      });
      res.redirect('/');
    }
    else {
      res.render("list", {listTitle: day, newListItems: data});
    }
  });
});

app.post("/", function(req, res){

  const item = req.body.newItem;
  const i = Todo({ 
    name: item
  });
  i.save();
  res.redirect('/');
});

app.post('/remove', function(req, res) {
  Todo.findByIdAndRemove(req.body.checkbox, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('Deleted Successfully');
      res.redirect('/');
    }
  });
});

app.get("/work", function(req,res){
  res.render("list", {
    listTitle: "Work List", 
    newListItems: workItems
  });
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(7000, function() {
  console.log("Server started on port 7000");
});
