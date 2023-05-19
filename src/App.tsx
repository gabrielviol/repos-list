import { Header } from "./Header";
import { Main } from "./Main";
import { client } from "./config/client-graphql";
import { GlobalStyle } from "./styles/global";
import { ApolloProvider } from "@apollo/client";

export function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <GlobalStyle />
        <Header />
        <Main />
      </div>
    </ApolloProvider>
  )
}
