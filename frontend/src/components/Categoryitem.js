import React from "react";

function Categoryitem({ prd }) {
  return (
    <div>
      <table class="table caption-top">
        <tbody>
          <tr>
            <td scope="row">{prd.ID}</td>
            <td space="col">{prd.title}</td>
            <td space="col">{prd.Cat}</td>
            <td space="col">Status</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Categoryitem;
