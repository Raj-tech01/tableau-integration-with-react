import { useRef, useEffect } from "react";

/**
 *  In window tableau object will come through CDN which is integrated using src in public/index.html.
 */
const { tableau } = window;

const EmbedTableauPage = () => {
  const ref = useRef(null);

  const initViz = () => {
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    const options = {
      hideTabs: true,
      onFirstInteractive: function () {
        console.log("Run this code when the viz has finished loading.");
      },
    };

    new tableau.Viz(ref.current, url, options);
  };

  useEffect(() => {
    initViz();
  });

  return (
    <>
      <div ref={ref}></div>
    </>
  );
};

export default EmbedTableauPage;
