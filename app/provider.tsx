"use client"

import React from 'react'
import { StyleProvider } from "@ant-design/cssinjs";

function Provider({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <StyleProvider hashPriority="high">{children}</StyleProvider>
  )
}

export default Provider