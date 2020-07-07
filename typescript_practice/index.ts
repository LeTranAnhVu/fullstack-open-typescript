import express, {Request, Response} from 'express'

const app = express()

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello Fullstack!')
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is starting on ${PORT}`);
})