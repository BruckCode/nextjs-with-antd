import { extractStyle } from "@ant-design/static-style-extract";
import fs from "fs";
import { ConfigProvider, theme } from "antd";
import React from "react";

const outputPath = "./public/antd.min.css";

// Default Theme
// const css = extractStyle();

// Custom Theme
const css = extractStyle((node) => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    {node}
  </ConfigProvider>
));

fs.writeFileSync(outputPath, css);
