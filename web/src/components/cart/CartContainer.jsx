export default function CartContainer({ children }) {
  return (
    <div className="fixed top-0 z-20 w-full h-screen flex justify-end bg-black bg-opacity-50 backdrop-blur-[2px]">
      <div className="py-6 px-4 max-w-md w-[90%] flex flex-col h-screen bg-white">
        {children}
      </div>
    </div>
  )
}
