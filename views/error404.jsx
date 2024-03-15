const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <p>
              <img src="/images/sleeping_dog.jpg" alt="Gray sleeping dog"/>
              </p>
              <p>
              Photo by <a href="https://unsplash.com/@agmakonts?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adam Grabek</a> on <a href="https://unsplash.com/photos/white-and-gray-dog-JCXANpeR2XI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </p>

          </main>
      </Def>
    )
  }
  

module.exports = error404
