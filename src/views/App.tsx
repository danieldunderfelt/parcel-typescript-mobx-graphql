import * as React from 'react'
import styled from 'styled-components'
import Route from '../helpers/Route'
import Index from './Index'

const Root = styled.div``

class App extends React.Component<any, any> {
  render() {
    return (
      <Root>
        <Route path="/" component={Index} />
      </Root>
    )
  }
}

export default App
