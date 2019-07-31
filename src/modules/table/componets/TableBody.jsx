import React from 'react';
import _ from "lodash"

const TableBody = ({ columns, surveys }) => {

    const renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path);
    };

    return (
        <tbody>
            {surveys.map(survey => {
                return (
                    <tr key={survey.id}>
                        {columns.map(column => {
                            return <td key={column.key || column.label}>
                                {renderCell(survey, column)}
                            </td>
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}

export default TableBody;