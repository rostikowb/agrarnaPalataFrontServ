import request from 'request'
import html from '../../indexPage/html'

export default (req, res) =>{
    res.status(200).send(html())
}