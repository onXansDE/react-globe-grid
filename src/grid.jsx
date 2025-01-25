import GridLayout from "react-grid-layout";
import { GlobeWindow } from './windows/globeWindow';
import { LiveUpdatesView } from "./windows/liveupdates";
import { DetailsView } from "./windows/details";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const gridItemStyle = {
  'background-color': 'rgb(0, 31, 66)',
  color: 'white',
  'box-shadow': '0 0 10px 2px aqua',
  overflow: 'hidden',
  outline: '1px solid aqua',
  outlineOffset: '-5px',
}

export function Grid({isActive}) {

    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 2, h: 5},
      { i: "b", x: 2, y: 0, w: 4, h: 5},
      { i: "c", x: 6, y: 0, w: 2, h: 2 },
      { i: "d", x: 6, y: 2, w: 2, h: 3 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={8}
        rowHeight={120}
        width={window.innerWidth}
        isResizable={isActive}
        isDraggable={isActive}

      >
        <div style={gridItemStyle} key="a"><LiveUpdatesView/></div>
        <div style={gridItemStyle} key="b"><GlobeWindow/></div>
        <div style={gridItemStyle} key="c"><DetailsView/></div>
        <div style={gridItemStyle} key="d"><DetailsView/></div>
      </GridLayout>
    );
  }