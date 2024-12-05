import { Request, Response } from 'express';

//@desc        GET all bootcamps
//@route       GET /api/v1/bootcamps
//@access      Public
export const getBootcamps = (req: Request, res: Response) => {
   res.status(200).json({
       success : true,
       msg : "Welcome to devcamper api"
   })
}


//@desc         GET a single bootcamp
//@route        GET /api/v1/bootcamps/:id
//@access       Private
export const getBootcamp = (req: Request, res: Response) => {
    res.status(200).json({
        success : true,
        msg : "Welcome to devcamper api"
    })
}


//@desc         CREATE a bootcamp
//@route        POST /api/v1/bootcamps
//@access       Private
export const createBootcamp = (req: Request, res: Response) => {
    res.status(200).json({
        success : true,
        msg : "Welcome to devcamper api"
    })
}



//@desc         UPDATE a bootcamp
//@route        PUT /api/v1/bootcamps/:id
//@access       Private
export const updateBootcamp = (req: Request, res: Response) => {
    res.status(200).json({
        success : true,
        msg : "Welcome to devcamper api"
    })
}


//@desc         DELETE a bootcamp
//@route        DELETE /api/v1/bootcamps/:id
//@access       Private
export const deleteBootcamp = (req: Request, res: Response) => {
    res.status(200).json({
        success : true,
        msg : "Welcome to devcamper api"
    })
}
