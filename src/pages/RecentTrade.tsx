import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useTable, Column } from 'react-table';

const data = [
  { openDate: '06/10/2024', closeDate: '06/10/2024', symbol: 'AAPL', status: 'Win', entryPrice: 2467.05, exitPrice: 2467.05, netPL: 267.05, netROI: 267.05 },
  { openDate: '06/10/2024', closeDate: '06/10/2024', symbol: 'NFLX', status: 'Loss', entryPrice: 2467.05, exitPrice: 2467.05, netPL: -24.98, netROI: -24.98 },
  { openDate: '06/10/2024', closeDate: '06/10/2024', symbol: 'MES', status: 'Win', entryPrice: 2467.05, exitPrice: 2467.05, netPL: 267.05, netROI: 267.05 },
  { openDate: '06/10/2024', closeDate: '06/10/2024', symbol: 'TSLA', status: 'Win', entryPrice: 2500.00, exitPrice: 2600.00, netPL: 100.00, netROI: 4.00 },
  { openDate: '06/10/2024', closeDate: '06/10/2024', symbol: 'AMZN', status: 'Loss', entryPrice: 3000.00, exitPrice: 2900.00, netPL: -100.00, netROI: -3.33 },
  // Add more data as needed
];

const columns: Array<Column<{ openDate: string; closeDate: string; symbol: string; status: string; entryPrice: number; exitPrice: number; netPL: number; netROI: number }>> = [
  { Header: 'Open Date', accessor: 'openDate' },
  { Header: 'Close Date', accessor: 'closeDate' },
  { Header: 'Symbol', accessor: 'symbol' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Entry Price', accessor: 'entryPrice', Cell: ({ value }: { value: number }) => `$${value.toFixed(2)}` },
  { Header: 'Exit Price', accessor: 'exitPrice', Cell: ({ value }: { value: number }) => `$${value.toFixed(2)}` },
  { Header: 'Net P&L', accessor: 'netPL', Cell: ({ value }: { value: number }) => <span className={value >= 0 ? 'text-green-500' : 'text-red-500'}>${value.toFixed(2)}</span> },
  { Header: 'Net ROI', accessor: 'netROI', Cell: ({ value }: { value: number }) => <span className={value >= 0 ? 'text-green-500' : 'text-red-500'}>${value.toFixed(2)}</span> },
];

const RecentTrade = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: paginatedData,
  });

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex-col justify-between items-center w-full mt-20 pl-14 pr-14 rounded-md shadow-sm">
      <div className="flex-col justify-between items-center w-full p-7 border border-gray-300 rounded-md shadow-sm">
        <div className="flex justify-between">
          <h1>Recent Trades</h1>
          <button className="p-2 bg-gray-200 w-20 rounded-md hover:bg-gray-300">
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filter
          </button>
        </div>
        <div className="overflow-x-auto mt-11">
          <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100 border-b border-gray-300">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className="px-4 py-2 text-left text-gray-600 font-medium">
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border-b border-gray-300 hover:bg-gray-50">
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="px-4 py-2 text-gray-700">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-11">
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex justify-between w-44">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`p-2 w-20 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 w-20 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrade;
