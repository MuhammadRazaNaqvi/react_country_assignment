import { Button } from "reactstrap";
import { Table } from "reactstrap";
import Details from "./Details";
const TableData = ({ data }) => {

  console.log("tabele data--->", data)
  return (
    <div className="table">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Common Name</th>
            <th>Official Name</th>
            <th>Languages</th>
            <th>Action</th>
          </tr>
        </thead>
        {data?.map((data, id) =>
        (

          <tbody>
            <tr>
              <th scope="row">{id}</th>
              <td>{data[0].name.common}</td>
              <td>{data[0].name.official}</td>
              <td>{Object.values(data[0].languages).join(',')}</td>
              <td><Button onClick={Details}>
                Edit
              </Button></td>

            </tr>
          </tbody>
        )
        )
        }
      </Table>


    </div>
  );
};
export default TableData;
