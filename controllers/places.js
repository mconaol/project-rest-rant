const router = require('express').Router()

router.get('/new', (req,res)=>{
  res.render('places/new')
})

router.post('/', (req, res)=>{
  console.log(req.body)
  res.send('posted')

  
})

router.get('/', (req, res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '../images/thai_restaurant.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat_cafe.jpg'
      }]
      
      res.render('places/index', { places })

})
  

module.exports = router;

