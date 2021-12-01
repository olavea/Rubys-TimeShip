import React from "react";

const OutsetaScriptComponent = ({ site }) => {

return (
    <script
      key="fathom-script"
      src="https://cdn.outseta.com/outseta.min.js"
    ></script>
    );
};

const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  return setHeadComponents([OutsetaScriptComponent(pluginOptions)]);
};

export { onRenderBody };
