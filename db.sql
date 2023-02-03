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