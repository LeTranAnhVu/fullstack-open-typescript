import React, {FC} from "react";
import {CoursePart} from "../types";

type Props = {
    courseParts: CoursePart[]
}

const Content: FC<Props> = ({courseParts}) => {
    return (
        <div>
            {
                courseParts.map(course => <p key={course.name}>{course.name} {course.exerciseCount}</p>)
            }
        </div>
    );
};

export default Content;