// 加载express模块
const express=require('express');
// 加载cookie-parser模块
const cookieParse=require('cookie-parser');
//加载cors模块
const cors=require('cors');
//加载body-parser中间件
const bodyParser = require('body-parser');
// 加载mysql模块
const mysql=require('mysql');
// 创建mysql连接池
const pool=mysql.createPool({
  //数据库服务器的地址
  host: "w.rdc.sae.sina.com.cn",
  //数据库服务器的端口号
  port: 3306,
  //数据库用户的用户名
  user: "k2jzwkony4",
  //数据库用户的密码
  password: "j4zylymixymmkwhiyhy435kjmym0yh5xh5jwkk1h",
  //数据库名称
  database: "app_biyadi",
  //数据库的编码方式
  charset: "utf8",
  //支持的最大连接数
  connectionLimit: 10,
})
// 创建express实例
const server=express();
server.listen(5050);
// 配置中间件
server.use(cookieParse());
// 托管静态资源到public文件夹下
server.use(express.static('./public'));
//使用body-parser中间件
server.use(bodyParser.urlencoded({
    extended: false
  }));
// cors中间件模块
server.use(cors({
    origin:['http://127.0.0.1:8080',
    'http://localhost:8080']
}));
// 用户信息表
server.get("/user",(req,err)=>{
    let sql="select * from user";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
// 修改用户资料信息表
server.put("/use",(req,err)=>{
    var obj=req.body;
    let sql="update user set=? ";
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
    });
});
//用户注册的接口
server.post("/login",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    //2.以当前的用户名为条件进行查找操作,因为需要保证用户名的唯一性
    let sql = 'SELECT uid,username FROM user WHERE username=?';
    pool.query(sql,[username],(err,resoult)=>{
        if(err) throw err;
         //根据用户名是否存在,然后进行不同的操作
        if(resoult.length==0){
           let index='INSERT INTO user(username,password) VALUES(?,MD5(?))';;
            pool.query(index,[username,password],(err,resoult)=>{
                if(err) throw err;
                res.send({message:'注册成功',code:1});
              });
        }else{
            res.send({message:"用户名已经存在",code:0});
        }
    });
});
// 登录接口
server.post("/libin",(req,res)=>{
    //1.获取用户名及密码信息
    let username=req.body.username;
    let password=req.body.password;
    // res.cookie("username",this.username,{maxAge:1000*60*60});
    //2.以用户名和密码为条件进行查找
    let sql="SELECT uid,username FROM user WHERE username=? AND password=MD5(?)"
    pool.query(sql,[username,password],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({message:"登录失败",code:0});
        }else{
            res.send({message:"登录成功",code:1});
        }
    });
});
//首页接口
// 跑车介绍
server.get('/indexcart',(req,res)=>{
let sql="select * from indexcart";
pool.query(sql,(err,reslut)=>{
    if(err) throw err;
    res.send(reslut);
});
});
// 
server.get('/newcar',(req,res)=>{
    let sql="select * from newcar";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
//紧急服务
server.get('/servic',(req,res)=>{
    let sql="select * from servic";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
//专业团队
server.get('/team',(req,res)=>{
    let sql="select * from team";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
// 豪华装饰
server.get('/car_services',(req,res)=>{
    let sql="select * from car_services";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
//参数配 置
// 汉 震撼上市
server.get('/team_box',(req,res)=>{
    let sql="select * from team_box";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
//最新 文章
server.get("/gridcar",(req,res)=>{
    let sql="select * from gridcar";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
// 交友论坛
server.get("/article",(req,res)=>{
    let sql="select * from article";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
// 最新发售
server.get("/sale",(req,res)=>{
    let sql="select * from sale";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});
// 了解爱车部分接口开始
server.get("/blog_grid",(req,res)=>{
    let sql="select * from blog_grid";
    pool.query(sql,(err,resoult)=>{
        if(err) throw err;
        res.send(resoult);
    });
});

//指定监听端口号
// server.listen(3000, () => {
//     console.log("server is runing...");
//   });