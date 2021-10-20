import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function AgGrid({ data }) {
    const colums = [
        {
            headerName: 'PostId',
            field: 'postId',
            checkboxSelection: true,
            cellStyle: (params) =>
                params.value > 1
                    ? { background: 'green' }
                    : { background: 'red' },
            tooltipField: 'email',
        },
        { headerName: 'Email', field: 'email' },
        { headerName: 'PostName', field: 'name', tooltipField: 'email' },
        { headerName: 'Body', field: 'body', tooltipField: 'email' },
    ];
    const defaultColumns = {
        sortable: true,
        filter: true,
        editable: true,
        flex: 1,
        floatingFilter: true,
    };

    return (
        <div
            className="ag-theme-alpine"
            style={{ width: '100%', height: '80vh' }}
        >
            <AgGridReact
                rowData={data}
                columnDefs={colums}
                defaultColDef={defaultColumns}
                rowSelection={'multiple'}
                pagination={'true'}
                enableBrowserTooltip={'true'}
                tooltipShowDelay={{ tooltipShowDelay: 3 }}
            />
        </div>
    );
}
