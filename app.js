const express= require('express');
const bodyParser= require('body-parser');
const app= express();
let items= [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function (req,res){
  let today= new Date();
   let options= {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
     
    let day=today.toLocaleDateString("en-US",options);

        res.render("list",{
            KindofDay: day,
            newlistitems: items
    });
});
app.post("/",function(req,res){
   var item=  req.body.newitem;
   items.push(item);
  res.redirect("/");
})
app.listen(3000,function(){
    console.log("Port is running at 3000");
});