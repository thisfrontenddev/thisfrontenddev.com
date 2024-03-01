"use client"

import Spline, { SplineProps } from "@splinetool/react-spline"
import { RefAttributes } from "react"

type SceneProps = Partial<SplineProps & RefAttributes<HTMLDivElement>>

export default function Scene({ className }: SceneProps) {
  return (
    <Spline
      // className={className}
      scene="https://prod.spline.design/KjeWVNgbAJ6wkmMI/scene.splinecode"
    >
      Test
    </Spline>
  )
}
