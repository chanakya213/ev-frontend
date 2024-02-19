import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  VehiclesBox,
  SearchContainer
} from "./vehicles.styled";
import { Table } from "../../theme/components";
import { useNavigate } from "react-router-dom";
import { GET_VEHICLES_TABLE_DATA } from "../../services/vehicle.detsils.api";
import { Convert } from "../../helpers/convert.helper";
import { ContainerBox, containerTableStyling } from "../vehicle-details/vehicle.styles";
import moment from "moment";
import { LiaSearchSolid } from "react-icons/lia";

function Vehicles() {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  //Columns Declaration For The User Table
  const columns = [
    {
      key: "VehicleId",
      title: "Vehicle Id",
      render: (data, type, row) => {
        return type?.dvid;
      },
    },
    {
      key: "CustomerName",
      title: "Customer Name",
      render: (data, type, row) => {
        return type?.driverName;
      },
    },
    {
      key: "RegNumber",
      title: "Reg Number",
      render: (data, type, row) => {
        return type?.regNumber;
      },
    },
    {
      key: "Location",
      title: "Location",
      render: (data, type, row) => {
        return type?.city;
      },
    },
    {
      key: "Purchase Date",
      title: "Purchase Date",
      render: (data, type, row) => {
        return moment(type?.purchaseDate).format("DD-MM-YYYY");
      },
    },
    {
      key: "Chemistry",
      title: "Chemistry",
      render: (data, type, row) => {
        return type?.oem;
      },
    },
    {
      key: "actions",
      title: "",
      render: (data, type, row) => {
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id={type?.id}>
              <div onClick={() => {
                navigate(`/vehicle-details/${type.dvid}`)
              }} style={{ backgroundColor: '#2563EB', textAlign: 'center', color: 'white', padding: "0.5rem 3rem", borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500' }}>
                Select
              </div>
            </div>
          </div>
        );
      },
    }
  ];

  useEffect(() => {
    const getVehicleData = () => {
      const queyDaya = Convert.ObjectToQuery({
        size: 10,
        pageNo: 1,
      })
      GET_VEHICLES_TABLE_DATA(queyDaya).then(res => {
        setTableData(res.data);
      }).catch(err => {
        console.log(err)
      })
    };
    getVehicleData();
  }, [])

  return (
    <VehiclesBox>
      <ContainerBox style={containerTableStyling}>
        <SearchContainer>
          <p>Select Vehicle to view details</p>
          <div className="searchBox">
            <LiaSearchSolid size={20} color="gray" />
            <input type="text" placeholder="search" onChange={(e) => {
              console.log(e.target.value);
            }} />
          </div>
        </SearchContainer>
        <Table
          totalItems={tableData}
          columns={columns}
          data={tableData}
          totalPages={1}
          pageNo={1}
          onPageChange={(currentPage) => {
            // setCurrentPage(currentPage);
            console.log(currentPage)
          }}
        />
      </ContainerBox>
    </VehiclesBox>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {
})(Vehicles);