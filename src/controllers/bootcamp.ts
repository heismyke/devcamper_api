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