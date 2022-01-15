export default function CartContainer({ children }) {
  return (
    <div className="fixed top-0 z-20 w-full h-screen flex justify-end bg-black bg-opacity-50">
      <div className="py-8 px-5 max-w-md w-[90%] h-screen bg-white">
        {children}
      </div>
    </div>
  )
}
