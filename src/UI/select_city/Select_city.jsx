import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import TownService from "../../API/TownService";
import './selectCity.css'
const SelectCity = ({changeSelectCity, ifSelect, defaultValue}) => {
    const [titleFilter, setTitleFilter] = useState(defaultValue)
    const [listTowns, setListTowns] = useState([])
    const [select, setSelect] = useState(ifSelect)
    const [fetch, isLoading, error] = useFetching(async () => {
        const list_towns = await TownService.getAll(titleFilter)
        await setListTowns(list_towns.content)
    })
    useEffect(()=>{
        fetch()
    }, [titleFilter])
    return (
        <div className='selectCity'>
            <input type='text'
                   value={titleFilter}
                   onChange={(event)=>{
                       setTitleFilter(event.target.value);
                       if(select){
                           setSelect(false)
                       }
                   }}/>
            <div className='list'>
                { isLoading?
                    <p>Загрузка..</p>
                    : titleFilter!==''?
                        select?  <div></div>
                            : listTowns.map((el)=>
                                <p
                                    id={el.id}
                                    className='option'
                                    onClick={()=>{
                                        setSelect(true);
                                        setTitleFilter(el.title)
                                        changeSelectCity(el.id);
                                        console.log(true)
                                    }}>{el.title}</p>
                            )
                        : <div></div>
                }
            </div>
        </div>
    );
};

export default SelectCity;