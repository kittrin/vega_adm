import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import UniversitiesService from "../API/UniversitiesService";
import TableData from "../UI/table-data/TableData";
import Pagination from "../UI/pagination/Pagination";
import ModalFormUniversity from "../components/UniversityPage/ModalFormUniversity";
import DeleteUniversity from "../components/UniversityPage/DeleteUniversity";
import LineUniversity from "../components/UniversityPage/LineUniversity";

const Universities = () => {
    const [listUniver, setListUniver] = useState();
    const title_table = [
        'Название',
        "Сокращение",
        "Адрес",
        "Сайт",
        "Город",
        ''
    ]
    const [page, setPage] = useState(0)
    const [sizePage, setSizePage] = useState(10)
    const [deleteModal, setDeleteModal] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [openModalForm, setOpenModalForm] = useState(false)
    const [formUniver, setFormUniver] = useState({
        id: '',
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
    const [fetch, isLoading, error] = useFetching(async () => {
        const list_universities = await UniversitiesService.getAll('HIGH', 'title', 'ASC', page, sizePage)
        await setListUniver(list_universities.content)
        await setTotalPage(list_universities.totalPages)
    })
    const [fetchPost, isLoadingPost, errorPost] = useFetching(async () => {
        const response = await UniversitiesService.postUniversity(
            formUniver.title,
            formUniver.shortTitle,
            formUniver.description,
            formUniver.address,
            formUniver.site,
            formUniver.town,
            formUniver.grade,
            formUniver.priority,
            formUniver.studentsTelegramChatUrl
        )
    })
    const [fetchPut, isLoadingPut, errorPut] = useFetching(async () => {
        const response = await UniversitiesService.putUniversity(
            formUniver.id,
            formUniver.title,
            formUniver.shortTitle,
            formUniver.description,
            formUniver.address,
            formUniver.site,
            formUniver.town,
            formUniver.grade,
            formUniver.priority,
            formUniver.studentsTelegramChatUrl
        )
    })
    const changePage = (page) => {
        setPage(page)
    }
    const changeSizePage = (size) => {
        setSizePage(size)
    }

    useEffect(() => {
        fetch()
    }, [page, sizePage])

    const [openChangeModalForm, setOpenChangeModalForm] = useState(false)
    const str_tr = (obj) => {
        return <LineUniversity obj={obj}
                               formUniverFunc={(val)=>setFormUniver(val)}
                               formDeleteState={deleteModal}
                               formDeleteFunc={(val)=>setDeleteModal(val)}
                               changeModalForm={()=>setOpenChangeModalForm(true)}
        />
    }
    return (
        <div>
            <div onClick={() => setOpenModalForm(true)}
                 style={{padding: '1rem', border: '1px solid black', cursor: 'pointer', width: 'max-content'}}>
                Добавить
            </div>
            <ModalFormUniversity openModalForm={openModalForm}
                                 onChangeOpenModal={(val) => setOpenModalForm(val)}
                                 formUniver={formUniver}
                                 changeFormUniver={(val) => setFormUniver(val)}
                                 title={'Добавить университет'}
                                 fetchFunction={fetchPost}/>
            <ModalFormUniversity openModalForm={openChangeModalForm}
                                 onChangeOpenModal={(val)=>setOpenChangeModalForm(val)}
                                 formUniver={formUniver}
                                 changeFormUniver={(val)=>setFormUniver(val)}
                                 title={'Изменить данные'}
                                 fetchFunction={fetchPut}/>
            {
                isLoading ?
                    <p>загрузка</p>
                    :
                    <div>
                        <TableData title={title_table} content={listUniver} complete_tr={(obj) => str_tr(obj)}/>
                        <Pagination sizePage={sizePage} totalPages={totalPage} changePage={changePage}
                                    changeSizePage={changeSizePage} selectPage={page}/>
                    </div>
            }
        </div>
    );
};

export default Universities;