import { useState } from 'react'

import { Statistic } from 'semantic-ui-react'
export function Saldo() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Statistic color='green'>
      <Statistic.Label>Seu Saldo no Juni Card é</Statistic.Label>
      <Statistic.Value >J$40,509</Statistic.Value>
    </Statistic>
    </>
    
  )
}
