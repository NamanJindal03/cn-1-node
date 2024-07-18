import { Router } from "express";
import { jobDetails } from "../constants.js";
const router = Router();

import productRouter from './product.routes.js'

//usecase of multer - inside the post
router.use('/product', productRouter);
//router.use('/order', orderRouter);

router.route('/example/:path')
    .get((req, res)=>{
        console.log(req.params);
        console.log(req.query);
        console.log('arrived 1');
        res.json('path param 1 hit')
    })

router.route('/example/:path/:path2')
    .get((req, res)=>{
        console.log('arrived 2');
        res.json('path param 2 hit')

    })

///example?filter1=''&filter2=''
router.route('/example')
    .get((req, res)=>{
        console.log(req.query)
        console.log('arrived 3');
        res.json('query param 1 hit')

    })


router.route('/jobs/:jobId')
    .get((req, res)=>{
        const jobId = req.params.jobId;
        res.render('jobDetails', jobDetails[jobId])
    })

router.route('/jobs')
    .get( (req, res)=>{
        res.render('jobs', jobDetails)
    })
    .post(getRole, (req, res) => {
        const isRecruiter = req.user === 'recruiter'
        if(!isRecruiter){
            return res.status(400).json({error: 'not authorized'})
        }
        //append the file to store that job information
    })

router.route('/18thJuly', )

/* 
    /api/v1
    direct - static 

*/


export default router;