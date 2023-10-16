import React from 'react';
import './DeleteUniversity.css';
import {useFetching} from "../../hooks/useFetching";
import UniversitiesService from "../../API/UniversitiesService";

const DeleteUniversity = ({id, exitForm, stateOpen}) => {
    const [fetchDelete, deleteLoading, errorDelete] = useFetching(async () => {
        const response = await UniversitiesService.deleteUniversity(id)
        console.log(response)
    })
    return (
    <div>
        {
            stateOpen ?
                <div className='deleteUniversityForm'>
                    <div className='form'>
                        <span>Вы уверены что хотите удалить?</span>
                        <div className='buttons'>
                            <div className='exit' onClick={() => {exitForm()}}>Отмена</div>
                            <div className='yes' onClick={() => {fetchDelete(); exitForm();}}>Да</div>
                        </div>
                    </div>
                </div>
                : <span></span>
        }
    </div>

    );
};

export default DeleteUniversity;