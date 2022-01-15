import { createContext, useContext, useMemo, useState } from 'react'

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

export default function ContextPage() {
  return (
    <Provider>
      <NameHeading />
      <NameInput />
    </Provider>
  )
}

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

  return (
    <input
      type="text"
      value={state.name}
      onChange={e =>
        setState(s => {
          return { ...s, name: e.target.value }
        })
      }
    />
  )
}
