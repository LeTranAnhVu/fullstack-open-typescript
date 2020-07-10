import React, {FC} from "react";
import {CoursePart} from "../types";
import Part from "./Part";

type Props = {
    courseParts: CoursePart[]
}

const Content: FC<Props> = ({courseParts}) => {
    return (
        <div>
            {
                courseParts.map(course => <Part key={course.name} coursePart={course}/>)
            }
        </div>
    );
};

export default Content;