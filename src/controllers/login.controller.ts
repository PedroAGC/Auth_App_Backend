import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
    res.status(200).json({
        msg: 'Todo bien'
    })
}

export {
    login,
}