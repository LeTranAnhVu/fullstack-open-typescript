export interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

export interface CoursePartOne extends CoursePartBase, CoursePartFour {
    name: "Fundamentals";
    // description: string;
}

export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
}

export interface CoursePartThree extends CoursePartBase, CoursePartFour {
    name: "Deeper type usage";
    // description: string;
    exerciseSubmissionLink: string;
}

export interface CoursePartFour extends CoursePartBase {
    name: "Fundamentals" | "Deeper type usage";
    description: string;
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;