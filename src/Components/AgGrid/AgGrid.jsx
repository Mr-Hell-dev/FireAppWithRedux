import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function AgGrid({ data }) {
    const colums = [
        { headerName: 'UserId', field: 'userId', checkboxSelection: true },
        { headerName: 'Id', field: 'id' },
        { headerName: 'Title', field: 'title' },
        { headerName: 'Completed', field: 'completed' },
    ];
    const defaultColumns = {
        sortable: true,
        filter: true,
        editable: true,
    };

    return (
        <div className="ag-theme-alpine h-96 ">
            <AgGridReact
                rowData={data}
                columnDefs={colums}
                defaultColDef={defaultColumns}
            />
        </div>
    );
}
