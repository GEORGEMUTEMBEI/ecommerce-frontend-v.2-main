import React, { useState } from "react";

const categories = [{
            name: "FRESH PRODUCE",
            subcategories: [{
                    name: "Fruits",
                    items: [
                        { name: "Apple", price: 1.99 },
                        { name: "Banana", price: 0.99 },
                        { name: "Orange", price: 1.49 },
                        { name: "Strawberry", price: 2.99 },
                        { name: "Blueberry", price: 3.99 },
                        { name: "Pineapple", price: 2.49 },
                        { name: "Mango", price: 1.99 },
                        { name: "Kiwi", price: 0.79 },
                        { name: "Watermelon", price: 4.99 },
                        { name: "Grape", price: 2.49 },
                    ],
                },
                {
                    name: "Vegetables",
                    items: [
                        { name: "Kale (Sukuma Wiki)", price: 1.99 },
                        { name: "Spinach", price: 2.49 },
                        { name: "Cabbage", price: 1.49 },
                        {
                            name: "Tomatoes",
                            items: [
                                { name: "Cherry Tomatoes", price: 2.99 },
                                { name: "Marglobe Tomatoes", price: 3.49 },
                                { name: "Cal-J Tomato", price: 2.79 },
                                { name: "Tanya Tomatoes", price: 2.99 },
                            ],
                        },
                        {
                            name: "Onions",
                            items: [
                                { name: "Red Onions", price: 1.49 },
                                { name: "White Onions", price: 1.49 },
                                { name: "Green Onions", price: 1.99 },
                            ],
                        },
                        { name: "Green Beans", price: 2.49 },
                        { name: "Okra", price: 3.99 },
                        { name: "Eggplant", price: 2.49 },
                        {
                            name: "Pumpkin",
                            items: [
                                { name: "Butternut Pumpkin", price: 3.49 },
                                { name: "Sugar Pie Pumpkin", price: 2.99 },
                                { name: "Kabocha Pumpkin", price: 3.99 },
                            ],
                        },
                        { name: "Green Pepper", price: 1.49 },
                        { name: "Spinach", price: 2.49 },
                    ],
                },
                { name: "Herbs", items: [{ name: "Basil", price: 1.99 }, { name: "Rosemary", price: 1.99 }] },
            ],
        },
        {
            name: "Dairy Products",
            subcategories: [{
                    name: "Milk",
                    items: [
                        { name: "Goat's Milk", price: 4.99 },
                        { name: "Cow's Milk", price: 3.99 },
                        { name: "Camel Milk", price: 5.99 },
                    ],
                },
                { name: "Cheese", items: [{ name: "Cheddar", price: 2.99 }, { name: "Brie", price: 4.49 }] },
                { name: "Yogurt", items: [{ name: "Plain Yogurt", price: 1.99 }, { name: "Greek Yogurt", price: 2.49 }] },
                { name: "Butter", items: [{ name: "Salted Butter", price: 3.99 }, { name: "Unsalted Butter", price: 3.99 }] },
            ],
        },
        {
            category: "Meat And Poultry",
            subcategories: [
                { name: "Beef", items: [{ name: "Ground Beef", price: 5.99 }, { name: "Beef Steak", price: 8.99 }] },
                { name: "Chicken", items: [{ name: "Whole Chicken", price: 6.99 }, { name: "Chicken Breasts", price: 4.99 }] },
                { name: "Pork", items: [{ name: "Pork Chops", price: 7.99 }, { name: "Pork Tenderloin", price: 9.99 }] },
                { name: "Lamb", items: [{ name: "Lamb Chops", price: 12.99 }, { name: "Ground Lamb", price: 10.99 }] },
            ],
        },
        {
            category: "Seafood",
            subcategories: [
                { name: "Fish", items: [{ name: "Salmon", price: 11.99 }, { name: "Tilapia", price: 8.99 }] },
                { name: "Shellfish", items: [{ name: "Shrimp", price: 14.99 }, { name: "Crab", price: 16.99 }] },
            ],
        },
        {
            category: "Bakery",
            subcategories: [
                { name: "Bread", items: [{ name: "Whole Wheat Bread", price: 2.99 }, { name: "French Baguette", price: 1.99 }] },
                { name: "Cakes", items: [{ name: "Chocolate Cake", price: 12.99 }, { name: "Cheesecake", price: 14.99 }] },
                { name: "Pastries", items: [{ name: "Croissant", price: 2.49 }, { name: "Danish Pastry", price: 1.99 }] },
            ],
        },
        {
            category: "Grains And Cereals",
            subcategories: [
                { name: "Maize", items: [{ name: "White Corn Meal", price: 1.99 }, { name: "Yellow Corn Meal", price: 1.99 }] },
                { name: "Rice", items: [{ name: "White Rice", price: 3.49 }, { name: "Brown Rice", price: 4.49 }] },
                { name: "Sorghum", items: [{ name: "Whole Grain Sorghum", price: 2.99 }, { name: "Sorghum Flour", price: 3.49 }] },
                { name: "Millet", items: [{ name: "Whole Grain Millet", price: 2.99 }, { name: "Millet Flour", price: 3.49 }] },
                { name: "Barley", items: [{ name: "Pearled Barley", price: 2.99 }, { name: "Barley Flour", price: 3.49 }] },
                { name: "Finger Millet", items: [{ name: "Whole Grain Finger Millet", price: 2.99 }, { name: "Finger MilletFlour", price: 3.99 }] },
            ],
        },
        {
            name: "Beverages",
            subcategories: [{
                    name: "Water",
                    items: [
                        { name: "Still Water", price: 0.99 },
                        { name: "Sparkling Water", price: 1.49 },
                        { name: "Flavored Water", price: 1.99 },
                    ],
                },
                {
                    name: "Juice",
                    items: [
                        { name: "Orange Juice", price: 2.99 },
                        { name: "Apple Juice", price: 2.49 },
                        { name: "Pineapple Juice", price: 3.49 },
                        { name: "Cranberry Juice", price: 2.99 },
                    ],
                },
                {
                    name: "Alcoholic Beverages",
                    items: [
                        { name: "Beer", price: 4.99 },
                        { name: "Wine", price: 9.99 },
                        { name: "Spirits", price: 14.99 },
                        { name: "Cocktails", price: 8.99 },
                    ],
                },
                {
                    name: "Soft Drinks",
                    items: [
                        { name: "Coca-Cola", price: 1.99 },
                        { name: "Fanta", price: 1.99 },
                        { name: "Sprite", price: 1.99 },
                        { name: "Stoney", price: 1.99 },
                        { name: "Krest", price: 1.99 },
                    ],
                },
            ],
        },
        {
            name: "Snacks and Sweets",
            subcategories: [{
                    name: "Chips",
                    items: [
                        { name: "Potato Chips", price: 1.49 },
                        { name: "Tortilla Chips", price: 1.99 },
                        { name: "Pita Chips", price: 2.49 },
                    ],
                },
                {
                    name: "Cookies",
                    items: [
                        { name: "Chocolate Chip Cookies", price: 2.49 },
                        { name: "Oatmeal Raisin Cookies", price: 1.99 },
                        { name: "Sugar Cookies", price: 1.49 },
                    ],
                },
                {
                    name: "Candy",
                    items: [
                        { name: "Gummy Bears", price: 1.99 },
                        { name: "Sour Worms", price: 1.99 },
                        { name: "Chocolate Bars", price: 2.49 },
                    ],
                },
                {
                    name: "Chocolate",
                    items: [
                        { name: "Milk Chocolate", price: 2.49 },
                        { name: "Dark Chocolate", price: 2.99 },
                        { name: "White Chocolate", price: 2.99 },
                    ],
                },
            ],
        },
        
        {
            name: "Condiments and Sauces",
            subcategories: [{
                    name: "Ketchup",
                    items: [
                        { name: "Heinz Ketchup", price: 2.49 },
                        { name: "Organic Ketchup", price: 3.49 },
                    ],
                },
                {
                    name: "Mustard",
                    items: [
                        { name: "Yellow Mustard", price: 1.49 },
                        { name: "Dijon Mustard", price: 2.99 },
                    ],
                },
                {
                    name: "Mayonnaise",
                    items: [
                        { name: "Regular Mayonnaise", price: 2.49 },
                        { name: "Light Mayonnaise", price: 1.99 },
                        { name: "Vegan Mayonnaise", price: 3.99 },
                    ],
                },
                {
                    name: "Salad Dressing",
                    items: [
                        { name: "Italian Dressing", price: 2.99 },
                        { name: "Ranch Dressing", price: 2.49 },
                        { name: "Caesar Dressing", price: 3.49 },
                    ],
                },
                {
                    name: "Canned Vegetables",
                    items: [
                        { name: "Corn", price: 1.99 },
                        { name: "Green Beans", price: 2.49 },
                        { name: "Peas", price: 1.49 },
                    ],
                },
                {
                    name: "Soups",
                    items: [
                        { name: "Tomato Soup", price: 2.99 },
                        { name: "Chicken Noodle Soup", price: 3.49 },
                        { name: "Vegetable Soup", price: 2.49 },
                    ],
                },
                {
                    name: "Canned Fruits",
                    items: [
                        { name: "Peaches", price: 3.99 },
                        { name: "Pears", price: 4.49 },
                        { name: "Pineapple", price: 2.99 },
                    ],
                },
            ]
        };

export default PRODUCTS_DATA;