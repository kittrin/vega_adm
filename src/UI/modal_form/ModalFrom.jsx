import React, {useState} from 'react';
import './modal_form.css';

const ModalFrom = ({titleForm, bodyInput, setState}) => {
    return (
        <div className='mainBodyModalForm'>
            <div className='modal_form'>
                <div className='title'>
                    <span>{titleForm}</span>
                    <div className='button_exit' onClick={setState}></div>
                </div>
                <div className='form'>
                    {bodyInput}
                </div>
            </div>
        </div>
    );
};

export default ModalFrom;