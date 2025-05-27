'use client';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register AG Grid community modules
ModuleRegistry.registerModules([AllCommunityModule]);

export interface DataGridProps<T> {
  rowData: T[];
  columnDefs: ColDef<T>[];
  defaultColDef?: ColDef;
  className?: string; // optionally pass custom class like "ag-theme-alpine"
  style?: React.CSSProperties;
}

const Table = <T,>({
  rowData,
  columnDefs,
  defaultColDef = { flex: 1 },
  className = 'ag-theme-alpine',
  style = { width: '100%', height: 500 },
}: DataGridProps<T>) => {
  return (
    <div className={className} style={style}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Table;
