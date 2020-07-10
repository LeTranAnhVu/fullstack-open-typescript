import React from "react";
import {Diagnosis} from "../types";
import {List} from "semantic-ui-react";
import {useStateValue} from "../state";

interface Props {
    codes: Array<Diagnosis["code"]>;
}

const Diagnoses: React.FC<Props> = ({codes}) => {
    const [{diagnoses}, dispatch] = useStateValue();

    if (codes.length === 0) return <>None</>;

    return (
        <div>
            {codes.map(code => (
                <p key={code}>
                    <span>{code}</span> -
                    <span>{diagnoses && diagnoses[code]?.name}</span>
                </p>
            ))}
        </div>

    );
};

export default Diagnoses;
