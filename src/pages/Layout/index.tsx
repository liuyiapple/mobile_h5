import { Button } from 'antd-mobile'
import Icon from '@/components/Icon'
import './index.scss'
const Layout = () => {
  const handleClick = () => {
    console.log(222222)
  }
  return (
    <div>
      <Button color="primary" className="btn">
        按钮
      </Button>
      <div className="zs">222</div>
      <button>
        <Icon type="iconbtn_like_sel" onClick={handleClick}></Icon>
      </button>
      <p>11</p>
      <div className="name"> 777</div>
    </div>
  )
}
export default Layout
