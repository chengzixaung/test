const bodyparser = require('body-parser')
let arr = [
    {
        tel: '18531285291',
        pass: '@Aa123!'
    }
]
module.exports = (app) => {
    app.use(bodyparser.json())
    app.get('/regis', (req, res) => {
        console.log(req.query,arr,'0')
        let res1 = arr.every((item) => {
            return item.tel != req.query.tel
        })
        if (res1) {
            arr.push(req.query)
            res.send({
                code: 1,
                msg: '注册成功!'
            })
            console.log(req.query,arr,'1')
        } else {
            res.send({
                code: 0,
                msg: '注册失败!'
            })
            console.log(req.query,arr,'2')
        }
    })
    app.get('/log',(req,res)=>{
        console.log(req.query,arr,'0')
        let res1 = arr.some((item) => {
            return item.tel == req.query.tel&&item.pass==req.query.pass
        })
        if (res1) {
            arr.push(req.query)
            res.send({
                code: 1,
                msg: '登录成功!'
            })
            console.log(req.query,arr,'1')
        } else {
            res.send({
                code: 0,
                msg: '登录失败!'
            })
            console.log(req.query,arr,'2')
        }
    })
}