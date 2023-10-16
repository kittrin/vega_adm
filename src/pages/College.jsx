import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import UniversitiesService from "../API/UniversitiesService";
import TableData from "../UI/table-data/TableData";


const College = () => {
    const [listUniver, setListUniver] = useState();
    const title_table = [
        'Название',
        "Сокращение",
        "Адрес",
        "Сайт",
        "Город"
    ]
    const str_tr = (obj) => {
        return (
            <tr key={obj.id}>
                <td>{obj.title}</td>
                <td>{obj.shortTitle}</td>
                <td>{obj.address}</td>
                <td><a href={obj.site} target='_blank'>{obj.site}</a></td>
                <td>{obj.town}</td>
            </tr>
        )
    }


    const [fetch, isLoading, error] = useFetching(async () => {
            const list_universities = await UniversitiesService.getAll('MIDDLE')
            await setListUniver(list_universities.content)
        }
    )
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            {
                isLoading?
                    <p>загрузка</p>
                    : <TableData title={title_table} content={listUniver} complete_tr={(obj)=>str_tr(obj)}/>
            }
        </div>
    );
};

export default College;