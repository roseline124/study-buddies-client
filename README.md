# Study-Buddies-Client

## Run

- `yarn install`: pacakge install
- `yarn build` : build
- `yarn gql-gen --watch` : regenerate `graphql.tsx` and watch the changes of graphql type
- `yarn start`: run in local

[![Run on Ainize](https://ainize-dev.herokuapp.com/images/run_on_ainize_button.svg)](https://studybuddies-chloe-codes1.endpoint.ainize.ai/)

## Environment variables

- `REACT_APP_`: custom variables need this prefix
- use `process.env.REACT_APP_{env_var_name}`
  🧚‍♀️don't install dotenv package

e.g. .env

```
PORT=7000 // client port
REACT_APP_SERVER_BASE_URL=http://localhost:3000 // server url
```

[![Run on Ainize](https://ainize-dev.herokuapp.com/images/run_on_ainize_button.svg)](https://studybuddies-chloe-codes1.endpoint.ainize.ai/)

## Environment variables

- `REACT_APP_`: custom variables need this prefix
- use `process.env.REACT_APP_{env_var_name}`
  🧚‍♀️don't install dotenv package

e.g. .env
```
PORT=7000 // client port
REACT_APP_SERVER_BASE_URL=http://localhost:3000 // server url
```
  
## Query

e.g. in .tsx

- graphql document 작성 예시

```
gql`
  query HelloWorld {
    helloWorld
  }
`
```

- import `use{QueryName}Query` from `src/generated/graphql.tsx`
- You can use data, loading, error, etc from response(😎)

```typescript
import { useHelloWorldQuery } from 'src/generated/graphql.tsx'

const App = () => {
  const { data, loading, error } = useHelloWorldQuery()

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  if (error) return null

  return (
    <div className="App">
      {data?.helloWorld}
      <Pages />
    </div>
  )
}

export default App
```
