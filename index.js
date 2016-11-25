var recipes = {}

function updateObjectWithKeyAndValue(obj, prop, val){
  return Object.assign({}, obj, {
    [prop]: val
  })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, prop, val){
  obj[prop] = val;
  return obj;
}

function deleteFromObjectByKey(obj, key){
  var object = obj;
  delete object.key
  return object;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key;
  return obj;
}