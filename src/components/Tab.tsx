import classnames from "classnames"

const Tab = ({
  isActive,
  children,
  handleClick,
} : {
  isActive: boolean,
  children: React.ReactNode,
  handleClick: React.MouseEventHandler<HTMLButtonElement>,
}) => {
  return (
    <button 
      type="button"
      onClick={handleClick}
      className={classnames("w-1/3 pt-25 pb-20 pl-28 border border-sky-900/20 border-b-5 hover:border-b-sky-800 focus:outline-4 focus:outline-dotted outline-sky-800 active:bg-indigo-100 text-left font-bold text-18 text-sky-950 shadow-md first:rounded-l-16 last:rounded-r-16 cursor-pointer transition-all duration-300", {
        "border-b-transparent": !isActive,
        "border-b-sky-800": isActive,
      })}
      role="tab"
      aria-selected={isActive}
    >
      {children}
    </button>
  )
}

export default Tab