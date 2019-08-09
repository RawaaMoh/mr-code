import React, { useRef, useEffect, useState } from 'react'
import CodeEditor from "./code-editor"
import Scene from './scene'
import { registerListener } from '../utils'

export default () => {
  const sceneContainer = useRef()
  const [size, setSize] = useState()

  useEffect(() => {
    const onResize = () => {
      const { width, height } = sceneContainer.current.getBoundingClientRect()
      setSize({ width, height })
    }
    const unregisterResizeListener = registerListener('resize', onResize)
    onResize()
    return unregisterResizeListener
  }, [])

  return (
    <div className='page'>
      <div className='scene-container' ref={sceneContainer}>
        <CodeEditor />
        {size && <Scene width={size.width} height={size.height} />}
      </div>
    </div>
  )
}