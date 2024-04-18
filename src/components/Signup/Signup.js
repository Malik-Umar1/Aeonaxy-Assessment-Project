import React, { useState } from 'react'
import UserInfo from './UserInfo'
import UserProfile from './UserProfile'
import UserGoal from './UserGoal'
import UserVerification from './UserVerification'

const Signup = () => {
  const [step,setStep] = useState(0)
  const steps = [
    {
  
      element: <UserInfo
      setStep={setStep}/>,

    },
    {
      element: <UserProfile
      setStep={setStep}/>,

    },
    {
      element: <UserGoal
      setStep={setStep}/>,

    },
    {

      element: <UserVerification/>,
    },
  ]
  return (
    <div>
  {steps[step].element}
    </div>
  )
}

export default Signup