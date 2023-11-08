import React from 'react'
import { NavigationBar } from '../Components/Navbar'
import { Homebanner } from '../Components/Homebanner'
import { RelatedGames } from '../Components/RelatedGames'
import { UnlockFreeSpin } from '../Components/UnlockFreeSpin'
import { PricingPlan } from '../Components/PricingPlan'
import { FAQ } from '../Components/FAQ'
import { PaymentMethod } from '../Components/PaymentMethod'
import { Footer } from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Homebanner />
      <RelatedGames />
      <UnlockFreeSpin />
      <PricingPlan/>
      <FAQ/>
      <PaymentMethod/>
      <Footer/>
    </>
  )
}

export default Home
