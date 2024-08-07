import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { setError } from '../../store/reducers/errorSlice'

interface UseError {
  error: string | null
  setErrorState: (error: string | null) => void
}

const useError = (): UseError => {
  const error = useSelector((state: RootState) => state.error.error)
  const dispatch = useDispatch()

  const setErrorState = (error: string | null): void => {
    dispatch(setError(error))
  }

  return { error, setErrorState }
}

export default useError
