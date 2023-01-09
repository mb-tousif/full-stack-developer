import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from '../components/Meta'
import { Typography } from '@material-ui/core'
import { Fragment } from 'react'

export default function Home() {
  return (
    <>
      <main>
      <Typography variant="h1">Reserved Copyrights {new Date().getFullYear()}</Typography>
      </main>
    </>
  )
}
