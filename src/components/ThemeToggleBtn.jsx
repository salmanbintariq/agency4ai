
import assets from "../assets/assets"

const ThemeToggleBtn = ({theme, setTheme}) => {

  const handleToggle = ()=>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button onClick={handleToggle}>
        {theme === 'dark' ? (
          <img src={assets.sun_icon} alt="" className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
        ) : (
          <img src={assets.moon_icon} alt="" className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
        )}
      </button>
    </>
  )  
}

export default ThemeToggleBtn