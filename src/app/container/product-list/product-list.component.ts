import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products =[
      {
        id: 1,
        name: "Nike Air Max 90",
        description: "A classic sneaker that blends style and comfort with a visible Max Air cushioning.",
        brand: "Nike",
        gender: "Women",
        category: "Running Shoes",
        size: ["7", "8", "9", "10", "11", "12"],
        color: ["Black","White","green","Red"],
        price: 4599.00,
        discountedPrice:3299,
        is_in_inventory: true,
        items_left: 25,
        imageUrl: "/assets/images/image2.png"
      },
      {
        id: 2,
        name: "Nike Air Zoom Pegasus 39",
        description: "A versatile running shoe designed for everyday comfort with responsive Zoom Air cushioning.",
        brand: "Nike",
        gender: "Men",
        category: "Running Shoes",
        size: ["8", "9", "10", "11", "12", "13"],
        color: ["Black","White","green"],
        price: 6990.00,
        discountedPrice:4199,
        is_in_inventory: true,
        items_left: 30,
        imageUrl: "/assets/images/image4.png",
        slug: "nike-air-zoom-pegasus-39"
      },
      {
        id: 3,
        name: "Nike Air Force 1 '07",
        description: "A legendary silhouette with premium leather and a signature Air sole for all-day comfort.",
        brand: "Nike",
        gender: "Women",
        category: "Casual Shoes",
        size: ["6", "7", "8", "9", "10", "11"],
        color: ["White","green"],
        price: 3890.00,
        is_in_inventory: true,
        items_left: 50,
        imageUrl: "/assets/images/image6.png",
        slug:"nike-air-force-1-07"
      },
      {
        id: 4,
      name: 'Nike SB Dunk Low',
      description: 'A streetwear icon designed for skateboarding, with a low-top silhouette and premium materials.',
      brand: 'Nike',
      gender: 'Unisex',
      category: 'Skate Shoes',
      size: ['8', '9', '10', '11'],
      color: ['Black','White','green','Red','Grey'],
      price: 6110.00,
      discountedPrice:5099,
      is_in_inventory: false,
      items_left: 0,
      imageUrl: "/assets/images/image1.png",
      slug: 'nike-sb-dunk-low'
      },
      {
        id: 5,
        name: 'Nike React Infinity',
        description: 'A performance running shoe designed for comfort and support, featuring soft and responsive React foam.',
        brand: 'Nike',
        gender: 'Unisex',
        category: 'Running Shoes',
        size: ['7', '8', '9', '10', '11', '12'],
        color: ['Blue','Black','White','green','Red','Grey','Orange'],
        price: 3160.00,
        is_in_inventory: true,
        items_left: 20,
        imageUrl: "/assets/images/image5.png",
        slug: 'nike-react-infinity-run-flyknit'
      },
      {
        id: 6,
      name: 'Nike Air Jordan 1',
      description: 'A classic design featuring a high-top silhouette with premium leather and the iconic Jordan Wings logo.',
      brand: 'Nike',
      gender: 'Men',
      category: 'Basketball Shoes',
      size: ['8', '9', '10', '11', '12'],
      color: ['Red','Black','White'],
      price: 4170.00,
      discountedPrice:3799,
      is_in_inventory: true,
      items_left: 15,
      imageUrl: "/assets/images/image3.png",
      slug: 'nike-air-jordan-1-retro-high-og'
      },
      {
        id: 7,
      name: 'Nike SB Dunk Low',
      description: 'A streetwear icon designed for skateboarding, with a low-top silhouette and premium materials.',
      brand: 'Nike',
      gender: 'Unisex',
      category: 'Skate Shoes',
      size: ['8', '9', '10', '11'],
      color: ['Black','White','green','Red','Grey'],
      price: 12110.00,
      discountedPrice:9099,
      is_in_inventory: false,
      items_left: 0,
      imageUrl: "/assets/images/image1.png",
      slug: 'nike-sb-dunk-low'
      },
      {
        id: 8,
        name: "Nike Air Force 1 '07",
        description: "A legendary silhouette with premium leather and a signature Air sole for all-day comfort.",
        brand: "Nike",
        gender: "Women",
        category: "Casual Shoes",
        size: ["6", "7", "8", "9", "10", "11"],
        color: ["White","green"],
        price: 3890.00,
        is_in_inventory: true,
        items_left: 50,
        imageUrl: "/assets/images/image6.png",
        slug:"nike-air-force-1-07"
      },
      
      {
        id: 9,
        name: "Nike Air Max 90",
        description: "A classic sneaker that blends style and comfort with a visible Max Air cushioning.",
        brand: "Nike",
        gender: "Women",
        category: "Running Shoes",
        size: ["7", "8", "9", "10", "11", "12"],
        color: ["Black","White","green","Red"],
        price: 10419.00,
        discountedPrice:6800,
        is_in_inventory: false,
        items_left: 0,
        imageUrl: "/assets/images/image2.png"
      }
    ]
    totalProduct=this.products.length;
    totalProductinStock=this.products.filter(p =>p.is_in_inventory === true).length;
    totalProductoutStock=this.products.filter(p =>p.is_in_inventory === false).length;

}
