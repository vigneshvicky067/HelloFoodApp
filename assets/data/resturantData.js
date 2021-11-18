  const affordable = 1
  const fairPrice = 2
  const expensive = 3

  const restaurantData = [
    {
        rid: 1,
        description:'Indian,Fast food,Veg and NonVeg',
        name: "Green Leaf Restaurant",
        rating: 4.8,
        cid: [1,5,3],
        priceRating: fairPrice,
        offer:'20% off',
        photo: 'https://www.watscooking.com/images/dish/large/24.jpg',
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        courier: {
            avatar: '',
            name: "Amy"
        }
    },
    {
        rid: 2,
        name: "Domino's Pizza",
        description:'Pizza,Fast food',
        rating: 4.8,
        cid: [2],
        priceRating: expensive,
        offer:'10% off',
        photo:'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhd2FpaWFuJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            avatar:'',
            name: "Jackson"
        }
    },
    {
        rid: 3,
        name: "KFC",
        description:'Indian,Fast food,Veg and NonVeg',
        rating: 4.8,
        cid: [2,4,7],
        offer:'40% off',
        priceRating: expensive,
        photo:'https://images.unsplash.com/photo-1568782947821-3d660dacc7cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoZnJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        duration: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
        courier: {
            avatar: '',
            name: "James"
        },
       
    },
    {
        rid: 4,
        name: "Pizza Hut",
        description:'Indian,Fast food,Veg and NonVeg',
        rating: 4.8,
        cid: [2],
        priceRating: expensive,
        offer:'50% off',
        photo:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGF3YWlpYW4lMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        duration: "10 - 15 min",
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },
        courier: {
            avatar: '',
            name: "Ahmad"
        }
    },
    {
        rid: 5,
        name: "Hotel Alfa",
        description:'Indian,Fast food',
        rating: 4.8,
        cid: [1,5],
        priceRating: affordable,
        offer:'20% off',
        photo:'https://assets.limetray.com/assets/user_images/menus/compressed/1606130153_HyderabadiChickenBiryani.JPG',
        duration: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },
        courier: {
            avatar:'',
            name: "Muthu"
        }
    },
    {

        rid: 6,
        name: "Bommerang",
        description:'Cakes and Ice creams',
        rating: 4.9,
        cid: [6,9,10],
        priceRating: affordable,
        offer:'30% off',
        photo: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBmb3Jlc3QlMjBjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: '',
            name: "Jessie"
        },
        
    },
    {

        rid: 7,
        name: "Arabian Knights",
        description:'Indian,Fast food,Veg and NonVeg',
        rating: 4.9,
        cid: [8,3],
        priceRating: affordable,
        offer:'50% off',
        photo: 'https://tasteusa.ca/wp-content/uploads/2021/01/XL-Sheet-Pan-Chicken-Shawarma.jpg',
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: '',
            name: "Jessie"
        },
        
    },
    {

        rid: 8,
        name: "The Red Box",
        description:'Indian,Fast food,Veg and NonVeg',
        rating: 4.9,
        cid: [3],
        priceRating: affordable,
        offer:'20% off',
        photo:'https://www.whiskaffair.com/wp-content/uploads/2018/02/Chicken-Hakka-Noodles-2.jpg',
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: '',
            name: "Jessie"
        },
        
    },
    {

        rid: 9,
        name: "Cock Ra Co",
        description:'Indian,Fast food, NonVeg',
        rating: 4.9,
        cid: [3],
        priceRating: affordable,
        offer:'20% off',
        photo: 'https://t4.ftcdn.net/jpg/02/51/39/63/240_F_251396398_5pJTWcxSTxx4yDgbwtSyoP6fqxnt9SJ4.jpg',
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: '',
            name: "Jessie"
        },
        
    },
    {

        rid: 10,
        name: "Frozen Bottle",
        description:'Indian,Fast food,Veg and NonVeg',
        rating: 4.9,
        cid: [6,10],
        priceRating: affordable,
        offer:'20% off',
        photo: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: '',
            name: "Jessie"
        },
        
    }
]

export default restaurantData