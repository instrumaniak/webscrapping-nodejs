// download html pages from url that has pagination type query params

const fs = require("fs")
const axios = require("axios")

const { BASE_URL } = require("../config")

const URLs = [...Array(9)].map((_, index) => {
  const slug = index + 1
  return {
    filename: `page${slug}.html`,
    url: `${BASE_URL}&page=${slug}`,
  }
})

URLs.map(({ filename, url }) => {
  console.log("Started request: ", url)
  axios.get(url).then(({ data }) => {
    fs.writeFileSync(`./data/${filename}`, data, "utf8")
    console.log("#--> File written: ", url)
  })
})
