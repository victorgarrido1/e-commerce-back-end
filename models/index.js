// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category',
});

// Categories have many Products
Product.belongsTo(Tag, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id,'
});

// Tags belongToMany Products (through ProductTag)
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
