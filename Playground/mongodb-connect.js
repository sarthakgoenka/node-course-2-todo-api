//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // javaScript destructuring
var obj = new ObjectID(); //Creating the reference of the object id! using its constructor
console.log(obj)
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, (err, db)=>{
    if(err) throw err;
var dbo = db.db('TodoApp');
var obj = {text: 'Something to do part 2',
            completed: true};

var {text} = obj; //ES6 destructuring!
console.log(text);
// dbo.collection('Todos').insertOne(obj, (err,res)=>{
//   if(err) throw err;
//   console.log(JSON.stringify(res.ops, undefined, 2));
// });
dbo.collection('Todos').find({completed: true}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
  console.log('some error:', err);
});
      db.close();


});
