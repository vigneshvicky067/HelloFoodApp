const foodData = [
    
            {
                rid:[3,4,8],
                menuId: 1,
                name: "Chicken Burger",
                photo:'https://images.unsplash.com/photo-1615297928064-24977384d0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
                description: "Burger with crispy chicken, cheese and lettuce Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 200,
                price: 90,
                cid: [4],
                isPopular:false
            },
            {
                rid:[1,5,8,9],
                menuId: 2,
                name: "Chicken Biriyani",
                photo: 'https://assets.limetray.com/assets/user_images/menus/compressed/1606130153_HyderabadiChickenBiryani.JPG',
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 250,
                price: 80,
                cid: [1],
                isPopular:false
            },
            {
                rid:[3],
                menuId: 3,
                name: "French Fries",
                photo:'https://images.unsplash.com/photo-1568782947821-3d660dacc7cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoZnJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                description: "Crispy Baked French Fries with tomato sauce Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 194,
                cid: [7,4],
                price: 80,
                isPopular:false
            },
            {
                rid:[2,4],
                menuId: 4,
                name: "Hawaiian Pizza",
                photo: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhd2FpaWFuJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                description: "Canadian bacon, homemade pizza crust, pizza sauce Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 250,
                cid: [2],
                price: 80,
                isPopular:true
            },
            {
                rid:[2,4,3],
                menuId: 5,
                name: "Tomato & Basil Pizza",
                photo: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGF3YWlpYW4lMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 250,
                cid: [2],
                price: 70,
                isPopular:false
            },
            {
                rid:[2,3,4],
                menuId: 6,
                name: "Tomato Pasta",
                photo: 'https://images.unsplash.com/photo-1528751086790-81a64658fc53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYXRvJTIwcGFzdGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                description: "Lorem ipsum dolar Pasta with fresh tomatoes.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 100,
                cid: [7],
                price: 60,
                isPopular:true
            },
            {
                rid:[1,5],
                menuId: 7,
                name: "Idly",
                photo: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201009074816-idli-and-sambar-stock.jpg',
                description: "Finely chopped lettuce, fantastic tomatoes, tasty cucumbers Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 100,
                cid: [5],
                price: 10,
                isPopular:false
            },
  
            {
                rid:[1,5],
                menuId: 8,
                name: "Dosa",
                photo: 'https://i2.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-H1.jpg?w=600&ssl=1',
                description: "Finely chopped lettuce, fantastic tomatoes, tasty cucumbers Lorem Ipsum is simply dummy text of the printing and typesetting industry ",
                calories: 100,
                cid: [5],
                price: 20,
                isPopular:false
            },
    
    
            {
                rid:[6],
                menuId: 9,
                name: "Black Forest",
                photo: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBmb3Jlc3QlMjBjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                description: "Fresh salmon, sushi rice, fresh juicy avocado lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 100,
                cid: [9],
                price: 70,
                isPopular:true
            },
   
            {
                rid:[1,5,8,9],
                menuId: 10,
                name: "Chicken Noodles",
                photo: 'https://www.whiskaffair.com/wp-content/uploads/2018/02/Chicken-Hakka-Noodles-2.jpg',
                description: "Yummy Noodles with tasty chicken and spicy tomato sauce Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 200,
                cid: [3],
                price: 90,
                isPopular:false
            },
            {
                rid:[1,5,8,7],
                menuId: 11,
                name: "Veg Noodles",
                photo: 'https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg?w=1838&quality=65&strip=all&ssl=1',
                description: "Yummy Noodles with tasty vegetables and spicy tomato sauce Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 300,
                cid: [3],
                price: 80,
                isPopular:false
            },
            {
                rid:[1,9,5],
                menuId: 12,
                name: "Meals",
                photo:'https://www.watscooking.com/images/dish/large/24.jpg',
                description: "A tasty traditional Malay rice dish with all varieties Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 300,
                cid: [5],
                price: 80,
                isPopular:false
            },
            {
                rid:[6,10],
                menuId: 13,
                name: "Chocolate oreo Milkshake",
                photo: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                description: "A traditional Indian rice dish with mutton Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 300,
                cid: [10],
                price: 50,
                isPopular:true
            },
       
            {
                rid:[7],
                menuId: 14,
                name: "Chicken Shawarma",
                photo: 'https://tasteusa.ca/wp-content/uploads/2021/01/XL-Sheet-Pan-Chicken-Shawarma.jpg',
                description: "Layer cakes Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 300,
                cid: [8],
                price: 90,
                isPopular:false
            },
            {
                rid:[7],
                menuId: 15,
                name: "Plain Shawarma",
                photo: 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file79ca63b1h5zfrw4wcdb-1311313696-1582029512.jpg?itok=d3sThNcK',
                description: "shawarma Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 300,
                cid: [8],
                price: 90,
                isPopular:false
            },
            {
                rid:[6,10],
                menuId: 16,
                name: "Butterscotch Ice creams",
                photo: 'https://www.cookwithmanali.com/wp-content/uploads/2014/11/Indian-Butterscotch-Ice-Cream-No-Churn-768x1164.jpg',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 300,
                cid: [6],
                price: 70,
                isPopular:false
            },
            {
                rid:[1,5,8,9],
                menuId: 17,
                name: "Mutton Biriyani",
                photo: 'https://t4.ftcdn.net/jpg/02/51/39/63/240_F_251396398_5pJTWcxSTxx4yDgbwtSyoP6fqxnt9SJ4.jpg',
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                calories: 250,
                price: 70,
                cid: [1],
                isPopular:false
            },
    
]

export default foodData;
