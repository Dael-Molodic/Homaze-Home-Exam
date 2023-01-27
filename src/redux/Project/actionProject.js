import * as type from "./type.js"


export const loading = () => {
    return {
        type: type.IS_LOADING_TRUE
    }
}

export const notLoading = () => {
    return {
        type: type.IS_LOADING_FALSE
    }
}

export const getProjectsSuccess = (datas) => {
    return {
        type: type.GET_PROJECTS_SUCCESS,
        payload: datas
    }
}

export const setError = (error) => {
    return {
        type: type.SET_ERROR,
        payload: error
    }
}

export const getProjects = (searchTxt) => {
    return (dispatch) => {
        dispatch(loading());
        fetch(`https://mocki.io/v1/dce3f0bc-6bdb-4c91-ad1c-ac7b94b248ab`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            const filteredProjects = getFilteredProjects(data, searchTxt);
            
            dispatch(getProjectsSuccess(filteredProjects));
            dispatch(notLoading());
            dispatch(setError(""));

            if (filteredProjects.length === 0) {
                dispatch(setError(new Error("no results found")));
            }
        }) 
        .catch( error => {
            dispatch(getProjectsSuccess([]));
            dispatch(setError(error));
        })
    }
}

function getFilteredProjects(data, searchTxt) {
    const dateSort = (a, b) => {
        return b.updated_timestmp - a.updated_timestmp
    } 

    if (!searchTxt) return data.sort(dateSort);

    const filteredProjects = data.filter(project => {
        if ( project.customerName.toLowerCase().startsWith(searchTxt.toLowerCase()) ) return true;
        if ( project.address.toLowerCase().startsWith(searchTxt.toLowerCase()) ) return true;
        return false;
    })
    return filteredProjects.sort(dateSort);
}