import html2canvas from "html2canvas";
import { Tiles } from "../constants/tiles";
import { Position } from "../types/position";
import { COLORS } from "../constants/colors";

export const findTileInGraph = (
  graph: Tiles[][],
  key: Tiles
): { i: number; j: number } | null => {
  for (let k = 0; k < graph.length; k++) {
    for (let s = 0; s < graph.length; s++) {
      if (graph[k][s] === key) {
        return { i: k, j: s };
      }
    }
  }
  return null;
};

export const isSamePosition = (
  position1: Position | undefined | null,
  position2: Position | undefined | null
) => {
  if (position1 && position2) {
    if (position1.i === position2.i && position1.j === position2.j) {
      return true;
    }
  }
  return false;
};

export const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export function formatMillisecondsToString(time: number | string): string {
  if (typeof time == "string") {
    time = parseFloat(time);
  }
  if (typeof time == "number") {
    return `${time.toFixed(3)} ms`;
  }

  return time;
}

// export const exportAsImage = async (element: any, imageFileName: any) => {
//   const canvas = await html2canvas(element);
//   const image = canvas.toDataURL("image/png", 1.0);
//   downloadImage(image, imageFileName);
// };
// const downloadImage = (blob: string, fileName: string) => {
//   const fakeLink = window.document.createElement("a");
//   fakeLink.setAttribute("style", "display:none;");
//   fakeLink.download = fileName;

//   fakeLink.href = blob;

//   document.body.appendChild(fakeLink);
//   fakeLink.click();
//   document.body.removeChild(fakeLink);

//   fakeLink.remove();
// };

export function createImage(imageMatrix: number[][]) {
  const canvas = document.getElementById("canvas");
  //@ts-ignore
  const ctx = canvas.getContext("2d");

  const imageData = ctx.createImageData(
    imageMatrix[0].length,
    imageMatrix.length
  );
  for (let i = 0; i < imageMatrix[0].length; i++) {
    for (let j = 0; j < imageMatrix.length; j++) {
      if (imageMatrix[i][j] === 0) {
        ctx.putImageData(imageData, i, j, COLORS.BLOCK_TILE);
      }
      if (imageMatrix[i][j] === 1) {
        ctx.putImageData(imageData, i, j, COLORS.STARTING_TILE);
      }
      if (imageMatrix[i][j] === 2) {
        ctx.putImageData(imageData, i, j, COLORS.ENDING_TILE);
      }
      if (imageMatrix[i][j] === 3) {
        ctx.putImageData(imageData, i, j, COLORS.VISITED_LIST_TILE);
      }
      if (imageMatrix[i][j] === 4) {
        ctx.putImageData(imageData, i, j, COLORS.PATH_TILE);
      }
    }
  }
  return imageData;
}
