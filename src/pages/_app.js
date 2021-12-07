import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { store } from "../app/store"
import '../styles/globals.css'

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default App