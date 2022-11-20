const router = require('express').Router()
const { models: { User, Books, Readlog }} = require('../db')
module.exports = router

// all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// single user
router.get('/:id', async (req,res,next) => {
  const {id} = req.params;
  try {
     const userById = await User.findByPk(id);
     res.send(userById)
  } catch (err) {
    next(err)
  }
})

// get user's collection
router.get('/:id/collection', async (req,res,next) => {
  const { id } = req.params;
  try{
    const userCollection = await Books.findAll({
      where:{
        userId: id,
        status: 'collection'
      }
    })
    res.send(userCollection)
  }catch(err){
    next(err)
  }
})
// get user's wishlist
router.get('/:id/wishlist', async (req,res,next) => {
  const { id } = req.params;
  try{
    const userWishlist = await Books.findAll({
      where:{
        userId: id,
        status: 'wishlist'
      }
    })
    res.send(userWishlist)
  }catch(err){
    next(err)
  }
})
// get a single book in collection(not working)
// router.get('/:id/collection/:bookid', async(req,res,next)=>{
//   const { id, bookid } = req.params;
//   try{
//     const bookById = await Books.findByPk(bookid, {
//       where:{
//         userId: id
//       }
//     })
//     res.send(bookById)
//   }catch(err){
//     next(err)
//   }
// })
router.get('/collection/:bookid', async(req,res,next)=>{
  const { bookid } = req.params;
  try{
    const bookById = await Books.findByPk(bookid)
    res.send(bookById)
  }catch(err){
    next(err)
  }
})

// add to user's collection(add to collection button)
router.post('/:id/collection', async(req,res,next)=>{
  try{
    const addBooktoCollection = await Books.create(req.body)
    res.send(addBooktoCollection)
  }catch(err){
    next(err)
  }
})

// add to user's wishlist(add to wishlist button)
router.post('/:id/wishlist', async(req,res,next)=>{
  try{
    const addBooktoWishlist = await Books.create(req.body)
    res.send(addBooktoWishlist)
  }catch(err){
    next(err)
  }
})
// get user's readinglog
router.get('/:id/readinglog', async(req,res,next)=>{
  const { id } = req.params;
  try{
    const userReadinglog = await Readlog.findAll({
      where:{
        userId: id
      }
    })
    res.send(userReadinglog)
  }catch(err){
    next(err)
  }
})
// add to user's readinglog
router.post('/:id/readinglog', async(req,res,next)=>{
  try{
    const readingEntry = await Readlog.create(req.body)
    res.send(readingEntry)
  }catch(err){
    next(err)
  }
})

// delete from collection
router.delete('/:id/collection', async(req,res,next)=>{
  try{
    const { id } = req.params
    const removedC = await Books.findByPk(id)
    res.send(await removedC.destroy())
  }catch(err){
    next(err)
  }
})
// delete from wishlist
router.delete('/:id/collection', async(req,res,next)=>{
  try{
    const { id } = req.params
    const removedW = await Books.findByPk(id)
    res.send(await removedW.destroy())
  }catch(err){
    next(err)
  }
})

// update wishlist status to collection
// get user's reading log

