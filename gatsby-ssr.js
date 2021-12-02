// gatsby-ssr.js
import React from "react";
const OutsetaScriptComponent = () => {
    const o_options = {
        domain: 'timeship.outseta.com',
        monitorDom: true
      };
    return (
        <script
            key="outseta-script"
            src="https://cdn.outseta.com/outseta.min.js"
            data-options={o_options}

        ></script>
    );
};
const onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([OutsetaScriptComponent()]);
};
export { onRenderBody };