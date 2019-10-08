/********************************************/
var book=[// creating array of books

    {
    name:"Its not my day",    
    author:"roswald",    
    price:115,    
    origin:"US"   
    },
    
    {    
    name:"This is Us",    
    author:"Jiya",    
    price:112,
    origin:"Cananda"   
    },

    {    
    name:"Subtle art of not giving ",    
    author:"Dustin",    
    price:25,    
    origin:"Canada"    
    },
    
    {    
    name:"Breath",    
    author:"Jhon",    
    price:20,    
    origin:"UK"    
    },    
    {    
    name:"Part",    
    author:"Paolo",    
    price:14,    
    origin:"UK"    
    },
    
    {    
    name:"No means No",    
    author:"Paolo",    
    price:10,    
    origin:"Canada"    
    },
    
    {
    
    name:"Dont come back",    
    author:"Maxiene",    
    price:89,    
    origin:"Canada"    
    },
    
    {
    
    name:"Harry Potter and the Philosopher's Stone",
    author:"J.K Rowling",    
    price:20,    
    origin:"US"    
    },
    
    {
    
    name:"Eat sleep repeat",    
    author:"Latherh",    
    price:6.25,
    origin:"UK"    
    },
    
    {    
    name:"Eat Pray Love",    
    author:"Elizabeth Gilbert",    
    price:12.57,
    origin:"US"    
    },
    
    {    
    name:"Good Morning Sun",    
    author:"sashe",    
    price:29.99,    
    origin:"US"    
    },    
    {    
    name:"Harry Potter and the Philosopher's Stone",    
    author:"Adrienne",    
    price:12.99,
    origin:"UK"    
    },    
    {    
    name:"Unfollow",    
    author:"Megan",    
    price:21.99,    
    origin:"Canada"    
    },    
    {    
    name:"Ninth House",    
    author:"Leigh Bardugo",    
    price:14.28,    
    origin:"India"    
    },    
    {    
    name:"The Topeka School",    
    author:"Ben Lerner",    
    price:5.99,    
    origin:"India"    
    },    
    {    
    name:"Face It",    
    author:"Debbie",
    price:33.14,    
    origin:"US"    
    },    
    {
    name:"Power of habit",    
    author:"Lustin",    
    price:300,
    origin:"UK"    
    },
    
    {    
    name:"Welcome back",    
    author:"Ronald",    
    price:5.19,    
    origin:"Canada"    
    },    
    {    
    name:"I too had a love story",    
    author:"Ravindra singh",    
    price:17.85,    
    origin:"India"    
    },
    
    {
    
    name:"Girl in room 105",    
    author:"Chetan Bhagat",    
    price:330,
    origin:"India"    
    }    
    ]
    
    console.log(book.length + " books");
    
    function getDiscountedPrices()// b is present object in array    
    { 
        book.forEach(Discount);//calling getDiscountedPrices method for each object in array
    }    
   
   
    function Discount(b)// b is present object in array    
    {    
    //calculating sales Price based on origin
    
    if(b.origin=="US")    
    {    
    b.salesPrice=b.price-(b.price*10/100);    
    }    
    else if(b.origin=="UK")    
    {    
    b.salesPrice=b.price-(b.price*5/100);    
    }    
    else if(b.origin=="US")    
    {    
    b.salesPrice=b.price-(b.price*12/100);    
    }
    
    else{    
    b.salesPrice=b.price-(b.price*15/100);    
    }    
    console.log(b.name+": "+b.author+" $"+b.price+" $"+b.salesPrice+" "+b.origin);
    
   
    } 

/********************************************/
