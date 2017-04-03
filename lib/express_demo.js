/**
 * Created by neil.zhou on 2017/4/3.
 */
import Express from 'express';
let app=Express();

app.get('/',(rea,res)=>{res.send('hello world YO YO YO! but now im change hehehe');})
app.listen(8080,()=>{console.log('server runing http://localhost:8080');});

