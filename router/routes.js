const router = require("express").Router();
// const product = require('./DB/product')


// pages render 
router.get('/',(req,res)=>{

    res.render('index',{
        title: 'ShopHome | Shopping Unlimited....................'
    });
});

// router.post('/login',(req,res)=>{
//     req.body.email
//     res.render('login',{
//         title: 'login'
//     });
// });
// ............................................ 
router.get('/login',(req,res)=>{
    res.render('login',{
        title: 'ShopHome | User-Login'
    });
});


// .............................................

// router.get('/cart',(req,res)=>{
//     res.render('cart',{
//         title: 'ShopHome | cart'
//     });
// });

router.get('/shophome/admin/login',(req,res)=>{
    res.render('admin',{
        title: 'ShopHome | server-login'
    });
});

router.get('*',(req,res)=>{
    res.render('error',{
        title: 'ShopHome | Page Not Found'
    })
})




module.exports = router;