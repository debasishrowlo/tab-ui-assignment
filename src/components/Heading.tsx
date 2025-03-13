const Heading = ({ children } : { children: React.ReactNode }) => {
  return (
    <p className="text-center text-32 font-bold text-sky-950" data-test-id="heading">{children}</p>
  )
}

export default Heading