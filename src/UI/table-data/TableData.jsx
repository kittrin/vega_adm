import React from 'react';

const TableData = ({title, content, complete_tr}) => {

    return (
        <table>
            <tbody>
            <tr>
                {
                    title.map((el, i) =>
                        <th key={i}>{el}</th>
                    )
                }
            </tr>
            {
                content.map( (obj) =>  complete_tr(obj))
            }
            </tbody>

        </table>
    );
};

export default TableData;