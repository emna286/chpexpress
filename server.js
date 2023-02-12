const express = require('express')
const app = express()
const port = 3000
const path =__dirname
const Authtime =(req,res,next)=>{
    let today=new Date()
    let day=today.getDay()
    let hour=today.getHours()






    if (day>0 && day<=5 && hour>=9 && hour<=17){
next()
    }
else {
    res.send("<h1> Actually Closed </h1>")
}

}

app.use(Authtime);
app.get('/', (req, res) =>{ res.sendFile(path+'/home.html')
});
app.get('/contact', (req, res) =>{ res.sendFile(path+'/contact.html')
});
app.get('/service', (req, res) =>{ res.sendFile(path+'/service.html')
});

app.listen(3000)

