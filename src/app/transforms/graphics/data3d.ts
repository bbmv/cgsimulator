export const objVertecies = [[0, 0, 0, 1],
             [1, 0, 0, 1],
             [1, 1, 0, 1],
             [0, 1, 0, 1],
             [0, 0, 1, 1],
             [1, 0, 1, 1],
             [1, 1, 1, 1],
             [0, 1, 1, 1]];

export const objEdges = [[0,1],[1,2],[2,3],[3,0], 
                  [4,5],[5,6],[6,7],[7,4],
                  [0,4],[1,5],[2,6],[3,7]];

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
      "texts": ["A", "B", "C", "D", "E", "F", "G", "H"],
      "font": "14px arial", // see font properties
      "color": "#00f"
    }
  };

const xLA = 3; //length of an axis half
const yLA = 3;
const zLA = 3;
 
export const axesVertecies = [
  [-xLA,0,0,1], [xLA,0,0,1],
  [0,-yLA,0,1], [0,yLA,0,1],
  [0,0,-yLA,1], [0,0,yLA,1],
  [xLA-0.15,0.15,0,1],[xLA-0.15,-0.15,0,1],
  [0.15,yLA-0.15,0,1],[-0.15,yLA-0.15,0,1],
  [0,0.15,yLA-0.15,1],[0,-0.15,yLA-0.15,1]
];

export const axesEdges = [[0,1],[2,3],[4,5],[1,6],[1,7],[3,8],[3,9],[5,10],[5,11]];

export const axesSettings = {
    segments: {
      "width": 1,
      "color": "#000"
    },
    points: { 
    },
    captions: {
      "texts": ["", "X", "", "Y", "", "Z"],
      "font": "20px arial", // see font properties
      "color": "#f00"
    }
  };

export const axesPointsVertecies = [
  [0,0,1,1], [0,0,2,1],
  [0,0,-1,1],[0,0,-2,1],
  [0,1,0,1], [0,2,0,1],
  [0,-1,0,1],[0,-2,0,1],
  [-1,0,0,1],[-2,0,0,1],
  [1,0,0,1], [2,0,0,1]];

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
