const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    // Find all categories and include associated Products
    const categories = await Category.findAll({ include: { model: Product } });

    // Check if the categories array is empty (no categories found)
    if (!categories) {
      res.status(404).json({ message: "Categories Not Found" });
      return;
    }

    // Respond with the found categories
    res.status(200).json(categories);
  } catch (err) {
    // Handle other errors, such as database errors
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = Category.findByPk(req.params.id);
    if (!categoryData) {
      res.status(404).json({ message: "Not a valid product" });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "Whoops! Invalid product" });
  }
});

// /api/categories
router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
    //handle errors by sending a 400 status custom message
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
