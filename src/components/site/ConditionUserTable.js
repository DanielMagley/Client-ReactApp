import React from "react";
import { Table, Button } from "reactstrap";

const ConditionUserTable = props => {
  return (
    <div className="container">
      <div>
        <h2>Conditional Cards</h2>
        <div>
          <Table striped>
            <thead>
              <tr>
                <th xs="3">Id</th>
                <th>Conditionals</th>
                <th>Modify | Double Click to Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.conditionals.map((conditional, id) => {
                return (
                  <tr key={id}>
                    <th scope="row">{conditional.id}</th>
                    <td>{conditional.anytimedata}</td>
                    <td>
                      <Button
                        id={conditional.id}
                        onClick={e => props.updateConditional(e, conditional)}
                        color="success"
                      >
                        Update
                      </Button>
                      <Button
                        id={conditional.id}
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

export default ConditionUserTable;
