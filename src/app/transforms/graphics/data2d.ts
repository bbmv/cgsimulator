export const objVertecies = [
  [0, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 1, 1]];

export const objEdges = [[0,1],[1,2],[2,3],[3,0]];

export const objSettings = {
    segments: {
      "width": 1,
      "color": "#00f"
    },
    points: {
      "width": 7,
      "color": "#f00"
    },
    captions: {
      "texts": ["A", "B", "C", "D"],
      "font": "14px arial", // see font properties
      "color": "#00f"
    }
  };

const xLA = 3; //length of an axis half
const yLA = 3;

export const axesVertecies = [
  [-xLA,0,1],[xLA,0,1],
  [0,-yLA,1],[0,yLA,1],
  [xLA-0.15,0.15,1],[xLA-0.15,-0.15,1],
  [0.15,yLA-0.15,1],[-0.15,yLA-0.15,1]];
 
export const axesEdges = [[0,1],[2,3],[1,4],[1,5],[3,6],[3,7]];

export const axesSettings = {
    segments: {
      "width": 1,
      "color": "#000"
    },
    points: { 
    },
    captions: {
      "texts": ["", "X", "", "Y"],
      "font": "20px arial", // see font properties
      "color": "#f00"
    }
  };

export const axesPointsVertecies = [
  [0,1,1], [0,2,1],
  [0,-1,1],[0,-2,1],            
  [1,0,1], [2,0,1],
  [-1,0,1],[-2,0,1]];

export const axesPointsEdges = [[0,1]];

export const axesPointsSettings = {
    segments: {
    },
    points: { 
      "width": 4,
      "color": "#000"
    },
    captions: {
    }
  };
