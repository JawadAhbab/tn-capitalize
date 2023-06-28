var capitalize = function capitalize(string) {
  var capall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = new RegExp('\\w+', capall ? 'g' : '');
  return string.replace(reg, function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
};

export { capitalize };
