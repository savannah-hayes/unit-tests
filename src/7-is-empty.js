export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;
  const isEmptyArray = stringArrayOrObject.length === 0; 
  const isEmptyObject = Object.keys(stringArrayOrObject).length === 0;
  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === "object" && isEmptyArray || isEmptyObject) {
    return true;
  }
  return false
}
