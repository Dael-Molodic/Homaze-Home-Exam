import React from 'react'
import style from './style.module.css'

function ProjectState( {projectState} ) {

    const stateStyleMap = {
        "In progress": {
            background: "#F6F9FA"
        },
        "Done": {
            background: "#EBFCEC",
            color: "#30D869"
        },
        "Cancelled": {
            background: "#EBF7FC",
            color: "#3CB2E4",
            fontWeight: 700 
        },
        "Negotiation": {
            background: "#FAEEE8",
            color: "#E4783C"
        }
    }

    return (
        <div className={style.projectStateContainer} style={stateStyleMap[projectState]}>
            {projectState}
        </div>
    )
}

export default ProjectState
