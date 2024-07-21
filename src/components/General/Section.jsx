import React from 'react'

function Section({ children }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      {children}
    </section>
  )
}

export default Section