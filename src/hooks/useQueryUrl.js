import { useLocation } from 'react-router-dom'
import qs from 'query-string'

const useQueryUrl = () => {
  const location = useLocation()

  const query = qs.parse(location.search, {
    parseBooleans: true,
    arrayFormat: 'bracket-separator',
    arrayFormatSeparator: '|'
  })

  return query
}

export default useQueryUrl
