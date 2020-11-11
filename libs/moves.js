import { PokedexInstance, handleError } from './utils'

export const getMovesList = async () => {
  try {
    const response = await PokedexInstance.getMovesList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getMovesList()', error)
    return handleError(error)
  }
}

export const getMoveByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getMoveByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getMoveByName(${name})`, error)
    return handleError(error)
  }
}