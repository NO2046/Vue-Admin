export function validateUsername(value){
  return value.replace(' ','').length > 0
}