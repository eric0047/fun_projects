function plantTree() {
  plantTreeLeaf();
  plantTreeTrunk();
}

function plantTreeLeaf() {
  for (let j = 1; j <= 5; j++) {
    console.log(`${" ".repeat(5 - j)}${"*".repeat(j)}${"*".repeat(j - 1)}`);
  }
}

function plantTreeTrunk() {
  for (let i = 1; i <= 4; i++) {
    console.log(`${" ".repeat(4)}${"*".repeat(1)}`);
  }
}

plantTree();

console.log("========================================================");
function buildChristmasTree() {
  for (let i = 1; i <= 4; i++) {
    if (i === 1) {
      buildLayerOne();
    } else if (i === 2) {
      buildLayerTwo();
    } else if (i === 3) {
      buildLayerThree();
    } else {
      buildTrunk();
    }
  }
}

function buildLayerOne() {
  for (let j = 1; j <= 3; j++) {
    console.log(`${" ".repeat(5 - j)}${"*".repeat(j * 2 - 1)}`);
  }
}

function buildLayerTwo() {
  for (let j = 2; j <= 4; j++) {
    console.log(`${" ".repeat(5 - j)}${"*".repeat(j * 2 - 1)}`);
  }
}

function buildLayerThree() {
  for (let j = 3; j <= 5; j++) {
    console.log(`${" ".repeat(5 - j)}${"*".repeat(j * 2 - 1)}`);
  }
}

function buildTrunk() {
  for (let j = 1; j <= 4; j++) {
    console.log(`${" ".repeat(4)}${"*".repeat(1)}`);
  }
}

buildChristmasTree();

console.log("========================================================");

function buildupForest() {
  for (let i = 1; i <= 5; i++) {
    if (i === 1) {
      buildBigTreeLeaf();
    } else if (i === 2) {
      buildBigTreeTrunk();
    } else if (i === 3) {
      buildSmallTreeLeaf();
    } else if (i === 4) {
      buildSmallTreeTrunk();
    } else {
      plantGrass();
    }
  }
}

function buildBigTreeLeaf() {
  for (let j = 1; j <= 5; j++) {
    console.log(
      `${" ".repeat(5 - j)}${"*".repeat(j * 2 - 1)}${" ".repeat(
        (5 - j) * 2 + 5
      )}${"*".repeat(j * 2 - 1)}`
    );
  }
}

function buildBigTreeTrunk() {
  console.log(
    `${" ".repeat(4)}${"*".repeat(1)}${" ".repeat(13)}${"*".repeat(1)}`
  );
}

function buildSmallTreeLeaf() {
  for (let j = 1; j <= 2; j++) {
    console.log(
      `${" ".repeat(4)}${"*".repeat(1)}${" ".repeat(7 - j)}${"*".repeat(
        j * 2 - 1
      )}${" ".repeat(7 - j)}${"*".repeat(1)}`
    );
  }
}

function buildSmallTreeTrunk() {
  console.log(
    `${" ".repeat(4)}${"*".repeat(1)}${" ".repeat(6)}${"*".repeat(
      1
    )}${" ".repeat(6)}${"*".repeat(1)}`
  );
}

function plantGrass() {
  console.log(`${"三".repeat(14)}`);
}

buildupForest();
