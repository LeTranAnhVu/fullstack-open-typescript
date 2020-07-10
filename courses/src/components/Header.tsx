import React, {FC} from "react";

type Props = {
    name: string
}
const Header:FC<Props> = ({name})=> {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Header