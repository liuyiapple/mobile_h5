import { TokenType } from '@/types/data'

// 使用常量来存储 key
const GEEK_TOKEN_KEY = 'geek-h5-token'

// 创建 获取 token
// 注意：因为 token 存储的是 { token, refresh_token } 形式的对象，所以，
//      此处设置默认值也应该设置为 对象 格式，所以，使用了 '{}'
// export const getToken = (): Token =>
//   JSON.parse(localStorage.getItem(GEEK_TOKEN_KEY) ?? '{}')
export const getToken = () =>
  JSON.parse(
    localStorage.getItem(GEEK_TOKEN_KEY) ??
      '{ "token": "", "refresh_token": "" }'
  ) as TokenType

// 创建 设置 token
export const setToken = (token: TokenType) =>
  localStorage.setItem(GEEK_TOKEN_KEY, JSON.stringify(token))

// 创建 清除 token
export const clearToken = () => localStorage.removeItem(GEEK_TOKEN_KEY)

// 创建 根据 token 判断是否登录
export const isAuth = () => !!getToken()
