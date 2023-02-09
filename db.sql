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
    )
    (
     'lunch',
     'salmon with salad',
     'salmon',
     'cook skin on or skin off salmon filets, tablespoon sweet paprika, teaspoon garlic powder, teaspoon dried oregano, teaspoon kosher salt, teaspoon, cayenne pepper, tablespoons olive oil, lemon cut into wedges, then on the side salad: heads butter lettuce, tomatoes, cucumber, pitted kalamata olives, feta cheese'
    )
    (
     'dinner',
     'Vegetable and lemon Garlic shrimp ',
     'shrimp',
     'bell peppers, asparagus, garlic, shrimp, chicken broth, chopped fresh parsley'
    )
    



