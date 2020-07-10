import React, {FC} from "react";
import {CoursePart} from "../types";

type Props = {
    courseParts: CoursePart[]
}
const Total: FC<Props> = ({courseParts}) => {
    return (
        <p>
            Number of exercises{" "}
            {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
    );
};

export default Total;