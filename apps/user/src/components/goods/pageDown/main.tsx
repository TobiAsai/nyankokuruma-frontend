'use client'

import React from 'react'
import Arrived from './arrived';
import State from './status';

const PageDown = () => {

  const [isOneOrSecond, setIsOneOrSecond] = React.useState<boolean>(true);

  return (
    <div>
      {isOneOrSecond ? <Arrived /> : <State />}
    </div>
  )
}

export default PageDown