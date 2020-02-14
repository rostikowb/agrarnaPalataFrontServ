import { Router } from 'express';
import index from './controllers/index'
import newsPage from './controllers/newsPage'


const router = Router();


// router.get('/contact', index);
// router.get('/statut', index);
// router.get('/addNews', index);
// router.get('/news', index);

// router.get('/', index);
// router.get('/news', index);

router.get('/news/:id', newsPage);
router.all('*', index);

// <Route exact path="/" component={Content}/>
// <Route exact path="/contact" component={ContactPage}/>
// <Route exact path="/statut" component={StatutPage}/>
// <Route exact path="/news" component={Content}/>
// <Route exact path="/addNews" component={AddNewsPage}/>
// <Route exact path="/ap" component={AdminPanel}/>


export default router;