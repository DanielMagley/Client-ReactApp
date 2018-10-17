import React from "react";
import { Table, Button } from "reactstrap";

const ConsUserTable = props => {
  return (
    <div className="container">
      <div>
        <h2>Consequence Cards</h2>

        <div>
          <Table striped>
            <thead>
              <tr>
                <th xs="3">Id</th>
                <th>Consequence</th>
                <th>Modify | Double Click to Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.consequences.map((cons, id) => {
                return (
                  <tr key={id}>
                    <th scope="row">{cons.id}</th>
                    <td>{cons.consequencedata}</td>
                    <td>
                      <Button
                        id={cons.id}
                        onClick={e => props.updateCons(e, cons)}
                        color="success"
                      >
                        Update
                      </Button>
                      <Button
                        id={cons.id}
                        onClick={props.delete}
                        color="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ConsUserTable;
