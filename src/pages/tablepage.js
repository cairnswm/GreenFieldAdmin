import Layout, { Content } from "../layout/layout.js";
import { Table } from "react-bootstrap"

function TablePage({ children }) {
  return (
    <Layout>
      <Layout.Header title={"Table"} subtitle="Build your Masterpiece" />

      <Content>
        <Content.Header>Bootstrap Table</Content.Header>
        <Content.Body>
        <Table responsive hover>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 6 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Content.Body>
        <Content.Footer>Footer</Content.Footer>
      </Content>
    </Layout>
  );
}

export default TablePage;
