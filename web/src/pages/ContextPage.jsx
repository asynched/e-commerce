import { liftContext } from '@lib/context'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [state, setState] = useState({
    name: 'Eder',
    age: 20,
  })

  const [memoizedState, memoizedSetState] = useMemo(
    () => [state, setState],
    [state, setState],
  )

  return (
    <Context.Provider
      value={{ state: memoizedState, setState: memoizedSetState }}
    >
      {children}
    </Context.Provider>
  )
}

const LiftedContext = liftContext(Provider)

export default LiftedContext(() => {
  const { state } = useContext(Context)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <>
      <NameHeading />
      <SomethingThatHasNothingToDoWithTheContextTree />
      <NameInput />
    </>
  )
})

const SomethingThatHasNothingToDoWithTheContextTree = React.memo(() => {
  const renders = useRef(0)

  return (
    <>
      <h2>Yay? I guess</h2>
      <p>Rendered {renders.current++} times</p>
    </>
  )
})

function NameHeading() {
  const { state } = useContext(Context)

  return (
    <h1>
      {state.name} is {state.age} years old
    </h1>
  )
}

function NameInput() {
  const { state, setState } = useContext(Context)

  const setName = e => {
    setState(state => ({ ...state, name: e.target.value }))
  }

  return <input type="text" value={state.name} onChange={setName} />
}
