import { CSVLink, CSVDownload } from "react-csv";

const ExcelDownload = ({ data, headers }) => {
  return (
    <button>
      <CSVLink headers={headers} data={data} filename="users.csv" target="_blank">
        Export Excel
      </CSVLink>
    </button>
  );
};
