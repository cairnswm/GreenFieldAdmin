import Layout, { Content } from "../layout/layout.js";

function Blank({ children }) {
  return (
    <Layout>
      <Layout.Header title={"Blank"} subTitle="Build your Masterpiece" />

      <Content>
        <Content.Header>Page Sub Heading</Content.Header>
        <Content.Body>
          Page Body
          {children}
        </Content.Body>
        <Content.Footer>Footer</Content.Footer>
      </Content>
    </Layout>
  );
}

export default Blank;
