import React, { useEffect } from 'react';
import style from './style.module.css'

/* Redux */
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../../redux/Project/actionProject';

/*  COMPONENTS */
import SearchInput from '../SearchInput';
import ProjectTile from '../ProjectTile';


function Main() {

    const {projects, error, isLoading} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [])

    return (<>
        <div className = {style.mainContainer}>

            {error && <div className={style.message}>{error.message}</div>}  
            {isLoading && <div className={style.message}>Loading...</div>}  

            <h2 className={style.contractsHeader}>Contracts</h2>
            <SearchInput/>
            <main className={style.mainSction}>
                {projects.map(project => <ProjectTile key={project.projectId} project={project}/> )}
            </main>

        </div>
    </>)
}



export default Main
