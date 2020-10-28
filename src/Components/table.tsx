//React
import React from 'react'

//AG Grid
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { ColumnResizedEvent } from 'ag-grid-community'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

//Types
import { Data } from '../Types/data.types'

interface Props extends AgGridReactProps {
  data: Data[]
  onColumnResized?: (event: ColumnResizedEvent) => void
}

const Table: React.FC<Props> = ({ data, onColumnResized }): JSX.Element => {
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={data}
        onColumnResized={onColumnResized}
        gridOptions={{
          rowHeight: 45,
          defaultColDef: {
            flex: 100,
          },
          columnDefs: [
            { field: 'id', resizable: true },
            { field: 'listId', resizable: true, sortable: true, sort: 'asc' },
            { field: 'name' },
          ],
          pagination: true,
          paginationPageSize: 20,
        }}
      ></AgGridReact>
    </div>
  )
}

export default Table
