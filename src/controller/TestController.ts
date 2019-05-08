import { Request, Response} from 'express';


export let hello = (req: Request, res: Response) => {
    res.send("Hello from TestController");
}

export let hiPost = (req: Request, res: Response) => {
    res.send("Hello from TestController POST method");
}