import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  theme: 'neutral',
  startOnLoad: true
});

const Mermaid = ({ chart }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid" style={{
    textAlign: 'center'
  }}>{chart}</div>;
};

export default Mermaid;