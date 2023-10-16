import React, {useState} from 'react';
import './style.css'

const Pagination = ({totalPages, sizePage, selectPage, changePage, changeSizePage}) => {
    let pages = [];
    const variantSize = [5, 10, 20, 30, 40, 50]
    for (let i = 0; i < totalPages; i++) {
        pages = [...pages, i]
    }
    return (
        <div className='pagination'>
            <div className='pages'>
                {pages.map((el) =>
                    selectPage === el ?
                        <div className='selectPage page' key={el}>{el+1}</div>
                        :
                        <div className='page' onClick={() => changePage(el)} key={el}>{el+1}</div>
                )
                }
            </div>
            <select name='sizePages' onChange={(val)=>changeSizePage(val.target.value)} value={sizePage}>
                {
                    variantSize.map((el) =>
                        el == sizePage ?
                            <option value={el} key={el}>{el}</option>
                            :
                            <option value={el} key={el}>{el}</option>
                    )
                }
            </select>
        </div>
    );
};

export default Pagination;