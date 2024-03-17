const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img src="../images/tuna_poke_bowl.jpg" alt="Tuna poke bowl" width= "600" height="600" />
                <div>
                  Photo by <a href="https://unsplash.com/@sheri_silver?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">sheri silver</a> on <a href="https://unsplash.com/photos/two-bowls-of-food-are-sitting-on-a-table--HFD24ee1LQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
              <a href="/places">
  <button style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px' }}>Places Page</button>
</a>

          </main>
      </Def>
    )
  }


 


module.exports = home
