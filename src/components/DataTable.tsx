import './DataTable.css';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableRow {
  [key: string]: string | number;
}

interface DataTableProps {
  columns?: TableColumn[];
  rows?: TableRow[];
}

export default function DataTable({ columns = [], rows = [] }: DataTableProps) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} className={col.sortable ? 'sortable' : ''}>
                {col.label}
                {col.sortable && <span className="sort-icon"> ⇅</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="table-row">
              {columns.map(col => (
                <td key={col.key} className="table-cell">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
