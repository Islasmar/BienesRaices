import User from './User.js';
import Category from './category.js';
import Price from './Price.js';
import Property from './Property.js';

Property.belongsTo(User,{foreignKey: 'user_ID'});
Category.hasOne(Property,{foreignKey: 'category_ID'});
Price.hasOne(Property,{foreignKey: 'price_ID'});

export {
    User,
    Category,
    Price,
    Property
}

