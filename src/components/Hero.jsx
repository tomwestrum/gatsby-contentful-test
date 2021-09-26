import React from "react"

const Hero = () => (
  <div className="container py-12 lg:pb-16">
    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
      Hello everyone {" "}
      <span role="img" aria-label="waving hand">
        👋
      </span>
      <br />
      <span className="text-blue-600">
        Click around and help us test Segment and Sendgrid tracking.
      </span>
    </h2>
  </div>
)

export default Hero
