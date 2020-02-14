import request from 'request';
import html from '../../indexPage/html'

export default (req, res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        request.get(`https://api.poap.pl.ua/news/${id}`, (error, response, body) => {
            if(!error){
                body = JSON.parse(body);
                // console.log(body);
                res.status(200).send(html(body.title, body.short, body.content.match(/.+ src="(.+)" alt/)[1], `https://poap.pl.ua/news/${id}`, 'article', body.date, body.content))
            }else {
                res.status(500).send('Технічні неполадки')
            }
        });
    }catch (e) {
        res.status(500).send('Технічні неполадки')
    }

}
// request.post({url:'http://localhost:3001/news', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ });
