import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function AgGrid({ data }) {
    const colums = [
        { headerName: 'UserId', field: 'userId' },
        { headerName: 'Id', field: 'id' },
        { headerName: 'Title', field: 'title' },
        { headerName: 'Completed', field: 'completed' },
    ];

    return <AgGridReact rowData={data} columnDefs={colums} />;
}
