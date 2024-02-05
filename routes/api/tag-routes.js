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
    res.status(500).json({ message: "Tags not found!"})
    console.log(err);
  }
});
 

router.get('/:id',async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}],
    })
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
router.post('/', async (req, res) => {
  try {
   const tagData = await Tag.create(req.body);
   res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "Tag creation failed"});
  }
});

// update a tag's name by its `id` value
router.put('/:id',async (req, res) => {
  try{
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "The tag creation was failed "});
  }
});

router.delete('/:id', async (req, res) => {
  // Delete a tag by its `id` value
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });

    deleted
      ? res.status(200).json({ message: "Tag deleted successfully" })
      : res.status(404).json({ message: "No tag was found with this id" });
  } catch (err) {
    res.status(500).json({ message: "Tag deletion has failed" });
  }
});


module.exports = router;
