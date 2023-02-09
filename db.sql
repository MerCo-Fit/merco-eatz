CREATE TABLE Recipes (
    id int not null,
    meal varchar(255) not null,
    title varchar(255) not null,
    protein varchar(255) not null,
    ingredients text not null,
    PRIMARY KEY(id)
     )


INSERT INTO Recipes ( 
    meal, 
    title, 
    protein, 
    ingredients
)


VALUES 
  (
      'breakfast',
      'scrambled eggs',
      'egg',
      'cook eggs, tablespoon butter, tablespoon whole milk, teaspoon salt, Fresh cracked pepper, then optionally cook vegetables on the side'
    ),
    (
     'lunch',
     'salmon with salad',
     'salmon',
     'cook skin on or skin off salmon filets, tablespoon sweet paprika, teaspoon garlic powder, teaspoon dried oregano, teaspoon kosher salt, teaspoon, cayenne pepper, tablespoons olive oil, lemon cut into wedges, then on the side salad: heads butter lettuce, tomatoes, cucumber, pitted kalamata olives, feta cheese'
    ),
    (
     'dinner',
     'Vegetable and lemon Garlic shrimp ',
     'shrimp',
     'bell peppers, asparagus, garlic, shrimp, chicken broth, chopped fresh parsley'
    ),
    (
        'dessert',
        'apple roses',
        'apples'
        '2 Red Delicious apples, puff pastry, lemon juice, all-purpose flour,
        apricot preserves, ground cinnamon, confectionery sugar'
    ),
    (
        'dinner',
        'pumpkin beef stew',
        'beef',
        'beef stew meat, 3 large potatoes-peeled and cubed, 4 sliced carrots, 1 large chopped green pepper,
        4 minced garlic cloves, 1 chopped onion, 2 teaspoons salt, 1/2 teaspoon ground black pepper,
        1 can whole peeled tomatoes-chopped, 2 tablespoons beef bouillon granules, 1 sugar pumpkin'
    ),
    (
        'lunch',
        'philly cheesesteak',
        'ribeye steak',
        'tender ribeye steak, provolone cheese, carmalized onions, garlic butter, hoagie roll'
    ),
        'breakfast',
        'breakfast burrito',
        'turkey sausage',
        'turkey sausage, bell peppers, onion, egg, butter, salt, pepper, tortilla'
    ),
    (
        'lunch',
        'chicken salad',
        'chicken',
        'chicken filet, eggs, lettuce, cucumbers, tomato, red onion, balsamic vinaigrette'
    ),
    (
        'dinner',
        'shrimp and sausage',
        'bell peppers, cabbage, garlic, shrimp, butter, sausage'
    ),
    (
        'breakfast',
        'chillaquiles',
        'chicken and eggs',
        'shredded chicken, chillaquilles, enchilada sauce, shredded cheese, tortilla chips, over easy eggs'
    ),
    (
        'lunch',
        'salmon bowl',
        'salmon',
        'cubed salmon with salt, pepper, garlic powder, sesame oil, soy sauce, and ginger paste (cooked in the air fryer), sliced mini cucumber. Serve over brown rice, and top with spicy mayo (equal parts sriracha and mayo)'
    ),
    (
        'dinner',
        'burrito bowl',
        'chicken',
        'chicken, brown rice, black beans, guacamole, sour cream, pico de gallo, shredded cheese, salsa'
    );


