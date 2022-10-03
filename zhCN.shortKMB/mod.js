const ObjectAssign = function (target, varArgs) { // .length of function is 2
  if (target == null) { // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = target;

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) { // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (nextSource.hasOwnProperty(nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
};

const replaceTargets = {
  'strbnetshortThousand':{
    'zhCN': 'K'
  },
  'strbnetshortMillion':{
    'zhCN': 'M'
  },
  'strbnetshortBillion':{
    'zhCN': 'B'
  }
}

function processItem(item) {
  const target = replaceTargets[item.Key]
  if (target) {
    ObjectAssign(item, target)
  }
}

const itemNamesFilename = 'local\\lng\\strings\\bnet.json';
const itemNames = D2RMM.readJson(itemNamesFilename);
itemNames.forEach(processItem);
D2RMM.writeJson(itemNamesFilename, itemNames);
