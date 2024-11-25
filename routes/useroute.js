import express from 'express'

import {fetch} from '../controller/usercontroller.js'
import {User,update,remove} from '../controller/usercontroller.js'

const route = express.Router();

route.post("/create",User);
route.put("/put",update);
route.delete("/remove/:id",remove);


route.get("/fetch",fetch);
export default route;


