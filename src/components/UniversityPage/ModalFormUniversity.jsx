import React, {useEffect} from 'react';
import ModalFrom from "../../UI/modal_form/ModalFrom";
import Select_city from "../../UI/select_city/Select_city";
import {useState} from "react";
import {useFetching} from "../../hooks/useFetching";
import TownService from "../../API/TownService";

const ModalFormUniversity = ({
                                 openModalForm,
                                 onChangeOpenModal,
                                 formUniver,
                                 changeFormUniver,
                                 title,
                                 fetchFunction
                             }) => {
    const clearForm = () => {
        changeFormUniver({
            title: '',
            shortTitle: '',
            description: '',
            address: '',
            site: '',
            town: '',
            grade: 'HIGH',
            cardPhoto: '',
            priority: 1,
            studentsTelegramChatUrl: ''
        })
    }
    const [town, setTown] = useState()
    const [fetchCity, isLoadingCity, errorCity] = useFetching(async () => {
        const response = await TownService.getById(formUniver.town)
        await setTown(response.title)
    })

    useEffect(()=>{fetchCity()}, [])
    return (
        <div>

            {
                openModalForm ?
                    <ModalFrom
                        titleForm={title}
                        setState={() => {
                            onChangeOpenModal(false);
                            clearForm()
                        }}
                        bodyInput={
                            <form className='form'>
                                {(formUniver.title != '' && formUniver.shortTitle != '' && formUniver.description != '' && formUniver.address != '' && formUniver.town != '' && formUniver.grade != '') ?
                                    <span></span>
                                    : <span style={{color: 'red'}}>Введите все по братски</span>

                                }
                                <input type='text'
                                       placeholder='Название университета'
                                       value={formUniver.title}
                                       onChange={(val) => {
                                           changeFormUniver({...formUniver, title: val.target.value})
                                       }}
                                       required
                                />
                                <input type='text'
                                       placeholder="Аббревиатура университета"
                                       value={formUniver.shortTitle}
                                       onChange={(val) => changeFormUniver({
                                           ...formUniver,
                                           shortTitle: val.target.value
                                       })}
                                       required
                                />
                                <input type='text'
                                       placeholder='Описание'
                                       value={formUniver.description}
                                       onChange={(val) => changeFormUniver({
                                           ...formUniver,
                                           description: val.target.value
                                       })}
                                />
                                <input type='text'
                                       placeholder='Адрес'
                                       value={formUniver.address}
                                       onChange={(val) => changeFormUniver({...formUniver, address: val.target.value})}
                                       required
                                />
                                <input type='text'
                                       placeholder='Сайт университета'
                                       value={formUniver.site}
                                       onChange={(val) => changeFormUniver({...formUniver, site: val.target.value})}
                                       required
                                />
                                <Select_city
                                    changeSelectCity={(city) => {
                                        changeFormUniver({...formUniver, town: city})
                                    }}
                                    ifSelect={formUniver.town !== ''}
                                    defaultValue={town}
                                />
                                <select
                                    onChange={(val) => {
                                        changeFormUniver({...formUniver, grade: val.target.value})
                                    }}
                                    defaultValue={formUniver.grade}
                                    required>
                                    <option value='HIGH'>Университет/Институт</option>
                                    <option value='MIDDLE'>Колледж/Техникум</option>
                                </select>
                                <input type='text'
                                       placeholder='Телеграм чат университета'
                                       value={formUniver.studentsTelegramChatUrl}
                                       onChange={(val) => changeFormUniver({
                                           ...formUniver,
                                           studentsTelegramChatUrl: val.target.value
                                       })}
                                />
                                <button type='button' onClick={() => {
                                    if (formUniver.title != '' && formUniver.shortTitle != '' && formUniver.description != '' && formUniver.address != '' && formUniver.town != '' && formUniver.grade != '') {
                                        fetchFunction()
                                        console.log(formUniver)
                                        onChangeOpenModal(false)
                                        clearForm()
                                    } else {
                                        console.log('error in body')
                                        console.log(formUniver)
                                    }
                                }}>
                                    Подтвердить
                                </button>
                            </form>
                        }
                    />
                    : <div/>
            }
        </div>
    );
};

export default ModalFormUniversity;