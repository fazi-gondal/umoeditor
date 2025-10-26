export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  
  export const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
  
  export const debounce = (func, delay) => {
    let timeoutId
    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
  }