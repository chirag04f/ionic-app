class FakeData {
    static allTableData() {
        return [
            { timeLeft: '01:00', itemsOrder: '1', isCancelled: false },
            { timeLeft: '02:00', itemsOrder: '5', isCancelled: false },
            { timeLeft: '00:00', itemsOrder: '0', isCancelled: false },
            { timeLeft: '00:00', itemsOrder: '0', isCancelled: false },
            { timeLeft: '04:00', itemsOrder: '8', isCancelled: true },
            { timeLeft: '00:00', itemsOrder: '3', isCancelled: false },
            { timeLeft: '00:00', itemsOrder: '5', isCancelled: false },
            { timeLeft: '06:00', itemsOrder: '0', isCancelled: false },
            { timeLeft: '02:00', itemsOrder: '0', isCancelled: false },
            { timeLeft: '00:00', itemsOrder: '1', isCancelled: false },
            { timeLeft: '07:00', itemsOrder: '2', isCancelled: false },
            { timeLeft: '00:00', itemsOrder: '0', isCancelled: false },
            { timeLeft: '00:00', itemsOrder: '0', isCancelled: false },
            { timeLeft: '01:00', itemsOrder: '0', isCancelled: true },
        ];
    }
    static sideMenuData() {
        return [
            {
                title: 'Popular',
                icon: '/assets/images/ic_popular.png',
            },
            {
                title: 'Starter',
                icon: '/assets/images/ic_popular.png',
            },
            {
                title: 'Desert',
                icon: '/assets/images/ic_popular.png',
            },
            {
                title: 'Fast Food',
                icon: '/assets/images/ic_popular.png',
            },
            {
                title: 'Main Course',
                icon: '/assets/images/ic_popular.png',
            },
            {
                title: 'Bevrages',
                icon: '/assets/images/ic_popular.png',
            },
        ];
    }
    static getFoodItemData() {
        return [
            {
                id: 1,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/1.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        foodType: "Fast Food",
                        servings: "1",
                        cookingTime: "30 min",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 2,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/2.png',
                details: Object(
                    {
                        foodType: "Fast Food",
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1",
                        cookingTime: "30 min",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 3,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/3.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1", foodType: "Fast Food",
                        cookingTime: "30 min",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 4,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/4.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1",
                        cookingTime: "30 min", foodType: "Fast Food",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 5,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/5.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1",
                        cookingTime: "30 min", foodType: "Fast Food",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 6,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/6.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1",
                        cookingTime: "30 min", foodType: "Fast Food",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 7,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/7.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1",
                        cookingTime: "30 min", foodType: "Fast Food",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 8,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/8.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1", foodType: "Fast Food",
                        cookingTime: "30 min",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
            {
                id: 9,
                name: 'Burger',
                price: "$10",
                image: '/assets/images/9.png',
                details: Object(
                    {
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`,
                        ingredients: [
                            "Flour", "Sugar", "Baking powder", "Salt", "Butter", "Egg Buter", "Milk", "Vegetable oil", "Baking powder", "Butter",
                        ],
                        servings: "1", foodType: "Fast Food",
                        cookingTime: "30 min",
                        energy: "100 kcal.",
                        addOns: [
                            {
                                name: "Lettuce",
                                price: "$1",
                            },
                            {
                                name: "Cheese",
                                price: "$2",
                            },
                            {
                                name: "Pickle",
                                price: "$0.5",
                            },
                        ],
                    }
                ),
            },
        ];
    }

    static allUserData = Object();
    static setUserData(data: any) {
        FakeData.allUserData = Object(data);
    }
}

export default FakeData;