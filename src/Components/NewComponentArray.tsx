import React from "react";

type NewComponentArrayType = {
stud: StudType[]
}

type StudType = {
    id: number
    name: string
    age: number
}

export const NewComponentArray = (props: NewComponentArrayType) => {
    return(
        <>
            {props.stud.map(el=>{
                return(
                    <table>
                        <tr>
                            <td>
                                {el.id} {el.name} {el.age}
                            </td>
                        </tr>
                    </table>
                )
            })}

        </>

    )
}