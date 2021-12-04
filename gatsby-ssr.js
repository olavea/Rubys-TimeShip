// gatsby-ssr.js
import React from "react";
const OutsetaScriptComponent = () => {
  return (
    <script
      key="outseta-script"
      id="outseta-script"
      src="https://cdn.outseta.com/outseta.min.js"
      data-options="o_options"
    />
  );
};

const OusetaConfigComponent = () => {
  const config = {
    domain: "timeship.outseta.com",
    monitorDom: true,
  };
  return (
    <script
      key="outseta-config"
      id="outseta-config"
      dangerouslySetInnerHTML={{
        __html: `var o_options = ${JSON.stringify(config, null, 2)}`,
      }}
    />
  );
};


const onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([OutsetaScriptComponent(), OusetaConfigComponent()]);
};
export { onRenderBody };


