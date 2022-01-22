import styled from 'styled-components'

export const Root = styled.table`
  width: 100%;
  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  thead {
    cursor: pointer;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #27ca27;
    color: white;
  }
`;