import express from 'express';
const app = express();
import {connectDb} from './mongodb.js';
import registration from './registrationSchema.js';
import book from './bookSchema.js';
app.use(express.urlencoded({extended:true}));
app.set("view engine","hbs");
connectDb();
app.listen(8000,()=>{
    console.log("Listening..");
})

app.get('/',(req,res)=>{
    res.render('login');
})

app.post('/', async (req,res)=>{
    const resp = await registration.findOne({username:req.body.username,password:req.body.password});
    
    if(resp)
    {
        // res.send('user is registered');
        // res.render('book');
        res.redirect('book');
    }
    else{
        res.send('User is not registered');
    }
})



app.get('/signup',async (req,res)=>{
    res.render('signup');
})
app.post('/signup', async (req,res)=>{
    const resp = await registration.create(req.body);
    res.json({resp});

})
app.get('/book', (req,res)=>{
    res.render('book');
})

app.post('/book', async (req,res)=>{
    
    const resp = await book.create(req.body);
    res.json({resp});
    
})

app.get('/books',async(req,res)=>{
    const bookData = await book.find();
    // console.log(bookData);

    res.render("showBooks", {bookData});
})


app.get('/book/:id',async(req,res)=>{
    let {id} = req.params;
    console.log(req.params);
    let bookData = await book.findById(id);
    res.json(bookData);
    console.log(bookData);
})


app.get('/book/del/:id',async(req,res)=>{
    let {id} = req.params;
    let bookData = await book.findByIdAndDelete(id);
    res.render('showBooks');
})

app.get('/search',async(req,res)=>{
    console.log(req.query);
    let {filterMode} = req.query;
    let bookData = await book.find({mode:filterMode});
    // res.json(bookData);
    console.log(bookData);
    res.render('showBooks', {bookData});
})
