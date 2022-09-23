# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
  
Product.create([
    {
    labels: "Popular",
    img: "fimg1",
    hoverImg: "fimg24",
    inStock: true,
    fastDelivery: true,
    title: "Rocking Chair",
    price: 918,
    group: "BEST SELLERS",
    category_id: 1,
    supplier_id: 1,
    description: "Semi rubber foam cushioning seat fixed on Plywood and with best quality fabric upholstery. 
    The main structure of the chair is 2mm thick and 32mm dia round MS tube.",
    rating: 4.7
    },
    
{

    labels: "Popular",
    img: "fimg2",
    hoverImg: "fimg23",
    inStock: true,
    fastDelivery: true,
    title: "Easy Chair ",
    price: 864,
    group: "BEST SELLERS",
    category_id: 1,
    supplier_id: 1,
    description: "The Easy/ Rocking Chair is made of comfortable and good quality Fabrics/Artificial leather.
     Best quality Super Soft Foam.  Frame & Leg Material: Solid Mahogany Wood",
    rating: 4.5
    },
   
{
    labels: "Popular",
    img: "fimg21",
    hoverImg: "fimg20",
    inStock: true,
    fastDelivery: true,
    title: "Center Table Glass Metal",
    price: 263,
    group: "BEST SELLERS",
    category_id: 1,
    supplier_id: 1,
    description: "The Center Table is made of durable Veneered Engineered Wood that lasts longer
     and better withstands wear and tear, 600-pound weight limit. Frame & Floor Touch Material: Solid Mahogany Wood",
    rating: 3.7
    },

{

    labels: "Popular",
    img: "fimg4",
    hoverImg: "fimg19",
    inStock: true,
    fastDelivery: false,
    title: "Rehal for the Holy Quraan",
    price: 591,
    group: "BEST PRODUCTS",
    category_id: 1,
    supplier_id: 1,
    description: "Made from Treated & Seasoned (KILN Dried) Local Mahagony Wood and 18mm Thick Okume Veneered MDF
    Environment Friendly High Quality European UV (Ultra Violet) Lacquer Finished",
    rating: 4.8
    },

{
   
    labels: "Up coming",
    img: "fimg5",
    hoverImg: "fimg18",
    inStock: true,
    fastDelivery: true,
    title: "Dining Set",
    price: 743,
    group: "BEST PRODUCTS",
    category_id: 1,
    supplier_id: 1,
    description: "Made from Treated & Seasoned (KILN Dried) Local Mahagony Wood and 18mm Thick Okume Veneered MDF
    Environment Friendly High Quality European UV (Ultra Violet) Lacquer Finished.",
    rating: 4.3
    },

{
    labels: "Popular",
    img: "fimg6",
    hoverImg: "fimg17",
    inStock: true,
    fastDelivery: true,
    title: "Wooden Dining Chair",
    price: 963,
    group: "SALE ITEMS",
    category_id: 1,
    supplier_id: 1,
    description: "Denali has a contemporary look within its shape. This chair can be a set for your 
    dining table as well as can be used as an accent chair for the distinguished look.",
    rating: 4.2
    },
    
{
    labels: "Best Seller",
    img: "fimg7",
    hoverImg: "fimg16",
    inStock: true,
    fastDelivery: false,
    title: "Classic Dining Chair",
    price: 789,
    group: "SALE ITEMS",
    category_id: 1,
    supplier_id: 1,
    description: "Are you looking for a chair that is affordable, simple yet sophisticated, and comfortable? Look no further, Fairbanks-109,
     and serves all these purposes and much more with agility. This piece of furniture is strong and sturdy.",
    rating: 3.9
},
{
    labels: "On sell",
    img: "fimg8",
    hoverImg: "fimg15",
    inStock: false,
    fastDelivery: true,
    title: "Lemon Chair Classic",
    price: 852,
    group: "NEW ARRIVAL",
    category_id: 1,
    supplier_id: 1,
    description: "The chair has a straight backside with designs consisting of empty box-like structures right in the middle.
     Both sides of the invention in the middle have spaces. The horizontal sitting area is slightly curved.",
    rating: 3.4
    },
   
{
    labels: "Popular",
    img: "fimg9",
    hoverImg: "fimg14",
    inStock: false,
    fastDelivery: true,
    title: "Wooden Dining Chair",
    price: 784,
    group: "SALE ITEMS",
    category_id: 1,
    supplier_id: 1,
    description: "This item of the furniture fits perfectly in most rooms. It is designed to achieve its goal of relieving you from a 
    day of stress and hard work, 
    and with the homely feel the chair itself emanates, you can rely on this product to provide comfort throughout the day. ",
    rating: 4.9     
    },

{
    labels: "New Arrival",
    img: "fimg10",
    hoverImg: "fimg13",
    inStock: true,
    fastDelivery: false,
    title: "LB Shoe Rack ",
    price: 434,
    group: "FEATUREDS",
    category_id: 1,
    supplier_id: 1,
    description: "Having a Lacquer finish in antique, the chair’s innate homely feel makes it
     fantastic for home usage, more so than anywhere else.
     Kiln-dried beech wood and veneered engineered wood have been used to make this chair.",
    rating: 2.5,  
    },
        
 ])

Category.create([
    {
        name: "furniture",
        description: "furniture f"
    },
    {
        name: "electronics",
        description: "electronics el"
    },
    {
        name: "fashion",
        description: "fashion fa"
    },
    ])

    Supplier.create([
    {
        name: "Tora",
        address: "12587 E louisiana ave US"
    },
    ])