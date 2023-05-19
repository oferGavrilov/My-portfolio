/* eslint-disable @typescript-eslint/indent */

import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    text: string
    className?: string
}

export default function Button ({ text, className }: Props): JSX.Element {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <button className={className} >{text}</button>
    </motion.div>

  )
}
