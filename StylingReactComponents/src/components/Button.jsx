
const Button = ({ handleLogin }) => {
  return (
    <button className="py-4 px-8 font-semibold uppercase rounded-[6px] border-none hover:bg-[#f0920e]" onClick={handleLogin}>
      Sign In
    </button>
  )
}
export default Button;