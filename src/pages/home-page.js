import React, { useEffect, useState } from 'react';
import NavSearch from '../components/navbar/nav-search';
import DataTable from '../components/table/data-table';
import data from '../data.json'

const HomePage = () => {
  const [dataTable, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  console.log(dataTable);

  const handleFilter = ({startDate, endDate}) => {
    if(startDate || endDate) {
      console.log('before map');
      const filtered = data.filter(item => {
       let result = true
        const date = new Date(item.date)
        console.log(date);
        if (startDate) {
          result = startDate <= date
        }
        if (endDate) {
          result = result && endDate >= date
        }
        return result
      });
      setTableData(filtered);
    } else {
      setTableData(data)
    }
  }

  return (
    <div>
      <NavSearch handleFilter={handleFilter}/>
      <br></br>
      {/* <DataTable filter={filter} data={dataTable} /> */}
      <DataTable data={dataTable} />

    </div>
    
  );
};

export default HomePage;
