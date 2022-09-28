import axios from "axios";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const ReactTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const emailFormatter = (data, row) => {
    return <span>Description = {data}</span>;
  };

  //CheckBox
  const selectRow = {
     mode : "checkbox",
     clickToSelect:true,
     selected : [1,3],
     clickToEdit : true,
  }


  const columns = [
    {
      dataField: "description",
      text: "DESCRIPTION",
      sort: true,
      filter: textFilter(),
      editable: false,
      formatter: emailFormatter,
    },
    {
      dataField: "price",
      text: "PRICE",
      sort: true,
      validator:(newValue,row,column)=>{
        if(isNaN(newValue)){
          return {
            valid:false,
            message:"Please Enter Numeric Value"
          }
        }
        return true
      }
    },
    {
      dataField: "description",
      text: "Dropdown",
       editor:{
        type:Type.SELECT,
        options:[
         { 
          value:"A",
          label:"A"
        },
        { 
          value:"B",
          label:"B"
        },
        ]
       }
    },
  ];
  return (
    <div>
      <h2>React Table</h2>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
        striped
        hover
        condensed
        selectRow={selectRow}
        filter={ filterFactory() }
      />
    </div>
  );
};

export default ReactTable;
