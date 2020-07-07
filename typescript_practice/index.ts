import express, {Request, Response} from 'express'
import {calculateBmi} from './bmiCalculator'

const app = express()

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello Fullstack!')
})

app.get('/bmi', (req: Request, res: Response) => {
  let height = Number(req.query.height)
  let weight = Number(req.query.weight)
  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({
      error: "malformatted parameters"
    })
  } else {
    const result = calculateBmi(height, weight)
    res.json({
      height,
      weight,
      bmi: result
    })
  }

})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is starting on ${PORT}`);
})