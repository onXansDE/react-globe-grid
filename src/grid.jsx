import GridLayout from "react-grid-layout";
import { GlobeWindow } from './globe/globeWindow';
import { LiveUpdatesView } from "./globe/liveupdates";
import { DetailsView } from "./globe/details";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export function Grid() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 2, h: 5},
      { i: "b", x: 2, y: 0, w: 4, h: 5},
      { i: "c", x: 7, y: 2, w: 2, h: 2 },
      { i: "d", x: 7, y: 0, w: 2, h: 3 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={8}
        rowHeight={120}
        width={1440}
        isResizable
        isDraggable
      >
        <div className="gridItem" key="a"><LiveUpdatesView/></div>
        <div className="gridItem" key="b"><GlobeWindow/></div>
        <div className="gridItem" key="c"><DetailsView/></div>
        <div className="gridItem" key="d"><DetailsView/></div>
      </GridLayout>
    );
  }