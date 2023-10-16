import React, {useEffect} from 'react';
import {useFetching} from "../../hooks/useFetching";
import TownService from "../../API/TownService";
import {Link} from "react-router-dom";
import MenuList from "../../UI/menu/menuList/MenuList";
import DeleteUniversity from "./DeleteUniversity";
import {useState} from "react";

const LineUniversity = ({obj, formDeleteFunc, formDeleteState, formUniverFunc, changeModalForm}) => {
    const [town, setTown] = useState(obj.town)
    const [fetchCity, isLoadingCity, errorCity] = useFetching(async () => {
        const response = await TownService.getById(town)
        await setTown(response.title)
    })
    useEffect(() => fetchCity, [])
    return (
        <tr key={obj.id}>
            <td><Link to={`/universities/${obj.id}`}>{obj.title}</Link></td>
            <td>{obj.shortTitle}</td>
            <td>{obj.address}</td>
            <td><a href={obj.site} target='_blank'>{obj.site}</a></td>
            <td><span>{town}</span></td>
            <td>
                <MenuList components={[
                    {
                        title: 'Изменить',
                        changeFunc: () => {
                            changeModalForm()
                            formUniverFunc({
                                id: obj.id,
                                title: obj.title,
                                shortTitle: obj.shortTitle,
                                description: obj.description,
                                address: obj.address,
                                site: obj.site,
                                town: obj.town,
                                grade: 'HIGH',
                                cardPhoto: '',
                                priority: 1,
                                studentsTelegramChatUrl: obj.studentsTelegramChatUrl,
                            })
                        }
                    },
                    {
                        title: 'Удалить', changeFunc: () => {
                            formDeleteFunc(true)
                        }
                    }
                ]} id={obj.id}/></td>
            <td><DeleteUniversity id={obj.id} exitForm={() => formDeleteFunc(false)} stateOpen={formDeleteState}/></td>

        </tr>
    )
};

export default LineUniversity;