const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const startingContent = `Lorem sit elit et eiusmod laboris
 et laboris quis deserunt excepteur ut Lorem eu. Occaecat 
 eiusmod ad veniam do ut tempor qui ex incididunt Lorem nostrud
  do id ad. Excepteur mollit ex aliquip cillum mollit veniam.
   Ullamco cillum sint culpa culpa officia velit magna`

const aboutContent = `Ea duis deserunt aliquip commodo sint culpa.
 Est sit ullamco deserunt non deserunt tempor 
 voluptate sint excepteur esse in. Proident
nisi est consequat. Aliquip
aliqua elit mollit et culpa irure ad magna. Est aliqua minim ipsum reprehenderit non velit nostrud.`


const contactContent = `Ea duis deserunt aliquip commodo sint culpa.
 Est sit ullamco deserunt non deserunt tempor 
 voluptate sint excepteur esse in.Proident
nisi est consequat.Aliquip
aliqua elit mollit et culpa irure ad magna.Est aliqua minim ipsum reprehenderit non velit nostrud.`

const app = express();
const posts = [];
app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('home', { homeStartingContent: startingContent ,posts:posts});

})
app.get('/contact',(req,res)=>{
    res.render('contact',{contactContent:contactContent});
})
app.get('/about',(req,res) => {
    res.render('about',{aboutContent:aboutContent});
})
app.get('/compose', (req, res) => {
    res.render('compose');
})
app.post('/compose',(req,res)=>{
    const post = {
        title:req.body.postTitle,
        content:req.body.postBody
    }
    posts.push(post);
    res.redirect('/')
})

app.listen(3000, () => {
    console.log("listening to the port at 3000");
})


