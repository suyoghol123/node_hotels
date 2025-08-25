const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/menuitem')

//post method for menuItem
router.post('/',async(req, res) =>{
  try{
    const data = req.body //Assuming the request body contains the person data

  //create a new person document using the mongoose model    
  const newmenuItem = new MenuItem(data);
  
  //save the new person to the database
  const response = await newmenuItem.save();
  console.log('data saved');
  res.status(200).json(response);
    }
    catch (err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
});

//Get Method for person
router.get('/',async(req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
  res.status(200).json(data);
  }catch(err){
    console.log(err);
      res.status(500).json({error:'Internal Server Error'});
  }
});

router.get('/:menuType', async(req,res)=>{
  try{
    const menuType = req.params.menuType;
    if(menuType=='sweet' || menuType=='sour'||    menuType=='spicy'){
      const response = await MenuItem.find({taste:menuType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
});

module.exports = router; 