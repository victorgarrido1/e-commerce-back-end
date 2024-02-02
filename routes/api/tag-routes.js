const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/',async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: "Tags not found!"});
  }
});
 

router.get('/:id',async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}],
    }),
    if (!tagData) {
      res.status(404).json({ message: "Tag is not found with this id."});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: "Tag is not found"});
  };
  // be sure to include its associated Product data
});

// create a new tag
router.post('/',async (req, res) => {
  try {
   const tagData = await Tag.create(req.body);
   res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "Tag creation failed"});
  }
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  try{
  
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
