import GridLayout from "react-grid-layout";
import { GlobeWindow } from './globe/globeWindow';
import { LiveUpdatesView } from "./globe/liveupdates";
import { DetailsView } from "./globe/details";

export function Grid() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 2, h: 4},
      { i: "b", x: 2, y: 0, w: 3, h: 3},
      { i: "c", x: 5, y: 2, w: 1, h: 2 },
      { i: "d", x: 5, y: 0, w: 1, h: 2 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={6}
        rowHeight={90}
        width={1440}
      >
        <div className="gridItem" key="a"><LiveUpdatesView/></div>
        <div className="gridItem" key="b"><GlobeWindow/></div>
        <div className="gridItem" key="c"><DetailsView/></div>
        <div className="gridItem" key="d"><DetailsView/></div>
      </GridLayout>
    );
  }