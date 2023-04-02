// redux 的相关类型
import { ThunkAction } from 'redux-thunk'
import store from '@/store'
import { TokenType } from './data'
// redux 应用的状态类型
type RootState = ReturnType<typeof store.getState>

// thunk action 的类型
type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

// 整个应用所有的action 类型
type RootAction = unknown

// 登陆 action 的类型
type LoginAction = {
  type: 'login/token'
  payload: TokenType
}
