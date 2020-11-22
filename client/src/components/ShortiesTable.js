import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  overflow-wrap: break-word;
  text-align: left;

  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const createURL = (id) => {
  if (window.location.origin.match(/localhost/)) {
    return `http://localhost:3001/${id}`;
  }
  return `${window.location.origin}/${id}`;
};
const ShortiesTable = ({ shorties }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Target</th>
          <th>Views</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {shorties.map((shortie) => (
          <tr key={shortie.id}>
            <td>
              <a href={createURL(shortie.id)} target="_blank" rel="noreferrer">
                {shortie.id}
              </a>
            </td>
            <td title={shortie.target}>
              <a href={shortie.target} target="_blank" rel="noreferrer">
                {shortie.target}
              </a>
            </td>
            <td>{shortie.views}</td>
            <td>{shortie.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

ShortiesTable.propTypes = {
  shorties: PropTypes.array,
};

export default ShortiesTable;
