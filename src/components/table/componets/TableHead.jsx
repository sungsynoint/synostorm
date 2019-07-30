import React from 'react';

const TableHead = ({ columns }) => {
    return (
        <thead className="thead-light">
            <tr >
                {columns.map(column => {
                    return <th key={column.path || column.key}> {column.label} </th>
                })}

            </tr>
        </thead>
    );
}

export default TableHead;