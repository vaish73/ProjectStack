export default function TopLoader({ loading }: { loading: boolean }) {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className={`h-[2px] bg-blue-700 transition-all duration-500 ${
          loading ? 'w-full' : 'w-0'
        }`}
      />
    </div>
  )
}
