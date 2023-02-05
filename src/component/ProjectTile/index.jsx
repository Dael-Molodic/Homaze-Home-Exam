import React from 'react'
import style from './style.module.css'
import ProjectState from '../ProjectState';
import RoomsName from '../RoomsName';

function ProjectTile({ project }) {

    const { 
        customerName,
        projectId,
        address,
        rooms,
        updated_timestmp,
        totalProject,
        projectState
    } = project;

    const date = new Date(updated_timestmp);
    const lastUpdated = date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    }).replace('/', ".").replace('/', ".");

    const totalCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalProject);

    return (
        <div className={style.tileContainer}>
            <section className={style.topSction}>
                <div className={(customerName) ? style.customerName : style.untitled} >
                    {customerName || "Untitled"}
                </div>
                <div className={style.projectId} >{projectId}</div>
            </section>
            <section className={style.bottomSction}>
                <div className={style.address} >{address}</div>
                <div className={style.roomsNameContainer}>
                    {rooms?.map(room => <RoomsName key={room.id} name={room.name}/>)}
                </div>
                <div className={style.detailsContainer}>
                    <section className={style.detailSection}>
                        <div className={style.detailHeader} >Last updated</div>
                        <div className={style.lastUpdated} >{lastUpdated}</div>
                    </section>
                    <section className={style.detailSection}>
                        <div className={style.detailHeader} >Total</div>
                        <div className={style.totalProject} >{totalCurrencyFormat}</div>
                    </section>
                    <section className={style.detailSection}>
                        <div className={style.detailHeader} >Stage</div>
                        <div className={style.projectState} >{<ProjectState projectState={projectState}/>}</div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default ProjectTile
