interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}


interface InputValue {
    hours: number[];
    targetHour: number;
}

export function calculateExercises(hours: number[], targetHour: number): Result {
    const periodLength = hours.length;
    const trainingDays = hours.filter(h => h !== 0).length;
    const average = hours.reduce((a, b) => a + b, 0) / periodLength;
    const target = targetHour;
    const success = average > targetHour;
    const rating = Math.floor(average * 3 / targetHour);
    let ratingDescription = '';
    if (rating <= 1) {
        ratingDescription = 'too lazy';
    } else if (rating <= 2) {
        ratingDescription = 'not too bad but could be better';
    } else {
        ratingDescription = 'very good';
    }
    return {
        periodLength,
        trainingDays,
        average,
        target,
        success,
        rating,
        ratingDescription
    };
}

const parseArgumentList = (args: Array<string>): InputValue => {
    if (args.length < 4) throw new Error('Not enough arguments');
    let check = true;
    let targetHour = 0;
    const hours: number[] = [];
    for (let i = 2; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            check = false;
            break;
        }
        if (i === 2) {
            targetHour = Number(args[i]);
        } else {
            hours.push(Number(args[i]));
        }
    }
    if (!check) {
        throw new Error('Provided values were not numbers!');
    }
    return {hours, targetHour};
};

try {
    const {hours, targetHour} = parseArgumentList(process.argv);
    console.log(calculateExercises(hours, targetHour));
} catch (e) {
    if (e instanceof Error) {
        console.log('Error: ', e.message);
    } else {
        console.log(e);
    }

}



