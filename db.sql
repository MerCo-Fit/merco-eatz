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
      'breakfast burrito',
      'turkey sausage',
      'turkey sausage, bell peppers, onion, egg, butter, salt, pepper, tortilla'
    )
    (
     'lunch',
     'chicken salad',
     'chicken',
     'chicken filet, eggs, lettuce, cucumbers, tomato, red onion, balsamic vinaigrette'
    )
    (
     'dinner',
     'shrimp and sausage',
     'bell peppers, cabbage, garlic, shrimp, butter, sausage'
    )
