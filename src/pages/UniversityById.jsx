import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import UniversitiesService from "../API/UniversitiesService";
import TownService from "../API/TownService";

const UniversityById = () => {
    const {university_id} = useParams();
    const [dataUniverse, setDataUniverse] = useState({})
    const [cityUniverse, setCityUniverse] = useState('')
    const [fetchDetailUniverse, isLoadingDetail, errorFetch] = useFetching(async () => {
        const response = await UniversitiesService.getDetailUniverse(university_id)
        await setDataUniverse(response)
    })
    useEffect(() => {
        fetchDetailUniverse()
    }, [])
    const [fetchCity, isLoadingCity, errorCity] = useFetching(async () => {
        const response = await TownService.getById(dataUniverse.town)
        await setCityUniverse(response.title)
    })
    useEffect(() => {
        fetchCity()
    }, [])

    return (
        <div>
            {isLoadingDetail ? <span>Загрузка</span>
                :
                <div>
                    <h3>{dataUniverse.title}</h3>
                    <div><span>Сокращение: </span><span>{dataUniverse.shortTitle}</span></div>
                    <div><span>Описание: </span><span>{dataUniverse.description}</span></div>
                    <div><span>Адрес: </span><span>{dataUniverse.address}</span></div>
                    <div><span>Сайт: </span><span><a href={dataUniverse.site}>{dataUniverse.site}</a></span></div>
                    <div><span>Город: </span>{isLoadingCity ? <span>Загрузка...</span> : <span>{cityUniverse}</span>}
                    </div>
                    <div><span>Фото: </span><span>{dataUniverse.cardPhoto}</span></div>
                    <div><span>Телеграм канал: </span><span>{dataUniverse.studentsTelegramChatUrl}</span></div>
                </div>
            }

        </div>
    );
};

export default UniversityById;