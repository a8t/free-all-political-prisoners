import React from "react";
import PortableText from "../shared/portableText";

function GeneralArticle(props) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        {props.subtitle && (
          <div>
            <PortableText blocks={props.subtitle} />
          </div>
        )}
        <PortableText blocks={props.content} />
      </div>
    </div>
  );
}

export default GeneralArticle;
