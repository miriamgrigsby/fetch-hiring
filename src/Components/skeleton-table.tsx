//React
import React from 'react'

//AG Grid
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

//Helpers
import _ from 'lodash'

const SkeletonTable: React.FC = (): JSX.Element => {
  const mockData = _.times(12, () => {})
  return (
    <div className="ag-theme-alpine skeleton">
      <AgGridReact
        rowData={mockData}
        gridOptions={{
          rowHeight: 45,
          defaultColDef: {
            flex: 100,
          },
          columnDefs: [{ field: 'id' }, { field: 'listId' }, { field: 'name' }],
          pagination: true,
          paginationPageSize: 20,
        }}
      ></AgGridReact>
    </div>
  )
}

export default SkeletonTable
