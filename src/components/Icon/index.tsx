import cls from 'classnames'
interface IconType {
  type: string
  className?: string
  onClick?: () => void
}

const Icon = ({ type, className, onClick }: IconType) => {
  return (
    <svg
      className={cls('icon', className)}
      aria-hidden="true"
      onClick={onClick}
    >
      {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
export default Icon
