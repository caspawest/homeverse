'use strict';

/**
 * Content data for the repeated card sections.
 *
 * Each section used to be hand-written as several near-identical blocks of
 * markup in index.html. The markup is now generated from these arrays by the
 * shared render utilities in script.js, so adding or editing a card only means
 * editing data here.
 */

const servicesData = [
  { image: "service-1.png", title: "Buy a home" },
  { image: "service-2.png", title: "Rent a home" },
  { image: "service-3.png", title: "Sell a home" },
];

const propertiesData = [
  { image: "property-1.jpg", title: "New Apartment Nice View", badge: "green", status: "For Rent" },
  { image: "property-2.jpg", title: "Modern Apartments", badge: "orange", status: "For Sales" },
  { image: "property-3.jpg", title: "Comfortable Apartment", badge: "green", status: "For Rent" },
  { image: "property-4.png", title: "Luxury villa in Rego Park", badge: "green", status: "For Rent" },
];

const featuresData = [
  { icon: "car-sport-outline", title: "Parking Space" },
  { icon: "water-outline", title: "Swimming Pool" },
  { icon: "shield-checkmark-outline", title: "Private Security" },
  { icon: "fitness-outline", title: "Medical Center" },
  { icon: "library-outline", title: "Library Area" },
  { icon: "bed-outline", title: "King Size Beds" },
  { icon: "home-outline", title: "Smart Homes" },
  { icon: "football-outline", title: "Kid’s Playland" },
];

const blogsData = [
  { image: "blog-1.png", title: "The Most Inspiring Interior Design Of 2021", category: "Interior" },
  { image: "blog-2.jpg", title: "Recent Commercial Real Estate Transactions", category: "Estate" },
  { image: "blog-3.jpg", title: "Renovating a Living Room? Experts Share Their Secrets", category: "Room" },
];
