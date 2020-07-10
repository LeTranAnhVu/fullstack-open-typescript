import React, {FC} from "react";
import {Entry} from "../types";
import EntryDetail from "./EntryDetail";
type Props = {
    entryList: Entry[]
}
const EntryList:FC<Props> = ({entryList}) => {
    return (
        <div>
            {entryList.map((entry) => (
                <EntryDetail entry={entry} key={entry.id} />
            ))}
        </div>
    )
}

export default EntryList