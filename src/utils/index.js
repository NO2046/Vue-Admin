export function isOuterLink(url){
  return /^(https?:|mailto:|tel:)/.test(url)
}