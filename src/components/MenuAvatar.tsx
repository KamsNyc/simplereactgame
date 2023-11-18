'use client'

import { Avatar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

function MenuAvatar() {
  return (
    <motion.section
    variants={{
        hidden: {opacity: 0, y: 55},
        visible: { opacity: 1, y: 0},
      }}
       initial='hidden'
       animate='visible'
    >
      <Link href={'/'}><Avatar
            className="border-2 border-[#111111]"
            alt="Kamel Singh"
            src="/avatar.png"
            sx={{ width: 35, height: 35 }}
          />
          </Link>
    </motion.section>
  )
}

export default MenuAvatar
