import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const AboutDev = () => {
  return (
    <Layout>
      <div className="p-8 items-center gap-28 flex flex-row h-screen container mx-auto justify-center">
        <div className="w-1/2">
          <p className="text-xl font-bold">
            A beautiful extension for TailwindCSS.
          </p>
          <p className="text-sm w-96">
            Tailwind Starter Kit is Free and Open Source. It does not change or
            add any CSS to the already one from TailwindCSS. It features
            multiple HTML elements and it comes with dynamic components for
            ReactJS, Vue and Angular.
          </p>

          <button className="text-white p-4 m-2 bg-pink-500 rounded-lg">
            GET STARTERD
          </button>
          <button className="text-white p-4 m-2 bg-gray-700 rounded-lg">
            GITHUB STAR
          </button>
        </div>

        <div className="w-1/2 flex justify-center">
          <StaticImage
            className="rounded-full"
            src="../images/mini.jpg"
            height={450}
            width={450}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Minions"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default AboutDev
