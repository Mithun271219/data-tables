import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'
import Table from '@/Components/DataTable'

export default function Home({ data }) {
  return (
    <>
      <Table products={data} />
    </>
  )
}

export async function getStaticProps() {

  let url = 'https://dummyjson.com/products';
  let url1 = 'https://ecomweb-backend.onrender.com/products'
  let products = []
  await fetch(url)
    .then((res) => res.json())
    .then((response) => {
      products = response.products
    })
    .catch((err) => console.log(err))

  return {
    props: {
      data: products
    }
  }
}
