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
    ingredients,
    )

VALUES
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
    );
