const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res)=>{
  
      res.render('places/index', { places })
})


router.get('/new', (req,res)=>{
  res.render('places/new')
})

{/* SHOW ROUTER */}

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else {
    res.render('places/show',{ place: places[id], id})
  }
})

{/* EDIT ROUTER */}


router.get('/:id/edit', (req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
    
  }
  else {
    res.render('places/edit',{ place: places[id], id})
  }
 
})

{/* DELETE ROUTER */}

router.delete('/:id',(req, res)=>{
  let id= Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }

})



router.post('/', (req, res)=>{

  if (!req.body.pic){
    req.body.pic='images/silverware_set.jpg'
  }
  if(!req.body.city){
    req.body.city = 'Anytown'
  }
  if(!req.body.state){
    req.body.state = 'USA'
  }
  
  places.push(req.body)
  res.redirect('/places')

})

{/* PUT ROUTER */}

router.put('/:id', (req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else {
    if(!req.body.pic) {
      req.body.pic='/images/silverware_set.jpg'
    }
    if (!req.body.city){
      req.body.city='Anytown'
    }
    if (!req.body.state){
      req.body.state='USA'
    }
    }
    res.redirect(`/places/${id}`)
  }
)
  
module.exports = router;

