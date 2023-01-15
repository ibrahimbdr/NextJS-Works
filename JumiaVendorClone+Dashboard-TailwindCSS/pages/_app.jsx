import '../styles/globals.css'
import { useState } from "react";
import AppContext from "../context/AppContext.js";
import languagesObject from "../language/languageObject.js";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  const [languageSelected, setLanguageSelected] = useState("en");
  const languageObject = languagesObject;
  

  return (
<SessionProvider session={session}>
  
<AppContext.Provider
    value={{
      state: {
        languages: languageObject[languageSelected],
        languageSelected: languageSelected,
      },
      setLanguageSelected: setLanguageSelected,
    }}
    >
    <Component {...pageProps} />
  </AppContext.Provider>
   </SessionProvider>
  )
}

export default MyApp
