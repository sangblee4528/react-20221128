const Node = function (name) {
  this.children = [];
  this.name = name;
};

Node.prototype = {
  add: function (child) {
    this.children.push(child);
    return this;
  },
};

// recursive console log of what's inside of the tree
const log = (root) => {
  if (!root) return;
};
