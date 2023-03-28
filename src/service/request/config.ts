let BASE_URL = ''
const TIME_OUT = 5000

if (import.meta.env.MODE === 'development') {
  BASE_URL = ''
} else if (import.meta.env.MODE === 'production') {
  BASE_URL = ''
}

export { BASE_URL, TIME_OUT }
