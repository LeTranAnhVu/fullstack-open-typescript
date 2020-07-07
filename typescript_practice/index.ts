import express, {Request, Response} from 'express';
import {calculateBmi} from './bmiCalculator';
import {calculateExercises} from "./exerciseCalculator";

const app = express();

app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello Fullstack!');
});

app.get('/bmi', (req: Request, res: Response) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({
            error: "malformatted parameters"
        });
    } else {
        const result = calculateBmi(height, weight);
        res.json({
            height,
            weight,
            bmi: result
        });
    }

});

app.post('/exercises', (req: Request, res: Response) => {
    try {


        type Body = {
            daily_exercises: number[],
            target: number,
        };

        let dailyExercises: number[] = [];

        const {target, daily_exercises} = req.body as Body;

        if (!target || !daily_exercises) {
            throw "parameters missing";
        }

        if (isNaN(Number(target))) {
            throw 'malformatted parameters';
        }

        if (daily_exercises && Array.isArray(daily_exercises)) {
            dailyExercises = daily_exercises.map((hour: number) => {
                if (isNaN(Number(hour))) {
                    throw 'malformatted parameters';
                }
                return Number(hour);
            });
        }

        const result = calculateExercises(dailyExercises, target);
        res.json(result);
    } catch (e) {
        res.status(400).json({
            error: e as string
        })
    }
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is starting on ${PORT}`);
});