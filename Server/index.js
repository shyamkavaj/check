const express = require('express');
var bodyParser = require('body-parser');
// import verifyToken from './verifyToken';
const app = express();
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
//Model
const User = require('./Model/customerSchema');
var userCtrl = require('./controllers/userController');
const verifyToken = require('./middleware/verifyToken');

// config
const sequelize = require('./config/config');

//data format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productCtrl = require('./controllers/productCtrl')
var faqCtrl = require('./controllers/faqCtrl');
const upload = require('./middleware/multer');

app.post('/signup',userCtrl.createUser);
app.post('/login',userCtrl.loginUser);
app.get('/dashboard',verifyToken,userCtrl.dashboard)
app.patch('/edit',verifyToken,userCtrl.editUser)

// product controller
app.post('/addProduct',upload.array('image'),productCtrl.addProduct)
app.get('/getSingleProduct/:id',productCtrl.getProductById)
app.get('/getAllProduct',productCtrl.getAllProduct)
app.get('/getProductByCate/:id',productCtrl.getProductByCategory)
app.get('/getProductByCategAndSubCate/:id/:categ',productCtrl.getProductByCategAndSubCate)
app.post('/updateProductImg/:id',upload.array('image'),productCtrl.updateProductImgById)
app.post('/specificImgDelete/:id/:index',productCtrl.specificImgDelete)
app.patch('/updateProductDetail/:id',productCtrl.updateProductDetailById)
app.delete('/deleteProduct/:id',productCtrl.deleteProductById)

// faq controller
app.get('/getFaq/:id',faqCtrl.getFaq);
app.get('/getAllFaq',faqCtrl.getAllFaq);
app.post('/addFaq',faqCtrl.createFaq);
app.patch('/updateFaq/:id',faqCtrl.updateFaq);
app.delete('/deleteFaq/:id',faqCtrl.deleteFaq);

app.listen(5001,()=>{
    console.log("Server is running on port 5001");
})