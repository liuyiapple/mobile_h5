import type { TokenType } from '@/types/data'

const initialState: TokenType = {
  token: '',
  refersh_token: '',
}

const login = (state = initialState, action: unknown) => {
  return state
}
export { login }
