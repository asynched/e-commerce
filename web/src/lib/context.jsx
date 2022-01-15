export const liftContext = Context => Component => props => {
  return (
    <Context>
      <Component {...props} />
    </Context>
  )
}
