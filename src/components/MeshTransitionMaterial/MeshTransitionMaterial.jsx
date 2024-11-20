import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'

export default function TransitionMaterial(props) {
  const materialRef = useRef()

  useFrame((_, delta) =>
    easing.dampC(
      materialRef.current.color,
      props.transitionColor,
      props.transitionTime ? props.transitionTime : 0.25,
      delta
    )
  )

  return <meshPhysicalMaterial ref={materialRef} {...props} />
}
