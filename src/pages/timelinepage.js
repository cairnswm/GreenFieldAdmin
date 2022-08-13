import Layout, { Content } from "../layout/layout.js";
import "./timeline.scss";
import Timeline from "../components/timeline.js";
import React, { useState } from 'react';
import { HandThumbsUpFill } from "react-bootstrap-icons"

function TimelinePage() {
  return (
    <Layout>
      <Layout.Header title={"Blank"} subTitle="Build your Masterpiece" />

      <Content>
        <Content.Header>Page Sub Heading</Content.Header>
        <Content.Body>
            <Timeline>
              <Timeline.Separator><h2>Today</h2></Timeline.Separator>
              <Timeline.Card icon={<HandThumbsUpFill />} variant="success">
                <h2>Time line Card</h2>
              </Timeline.Card>
              <Timeline.Separator>Yesterday, and a long heading</Timeline.Separator>
            </Timeline>
        </Content.Body>
        <Content.Footer>Footer</Content.Footer>
      </Content>
    </Layout>
  );
}

export default TimelinePage;
