import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name : "name",
      type : "string",
      title :"Restaurant Name",
      validation : (Rule)=> Rule.required(),
    },
    {
      name : "short_description",
      type : "string",
      title :"Short Description",
      validation : (Rule)=> Rule.max(200),
    },
    {
      name : "image",
      type : "image",
      title :"Images of the restaurant",
    },
    {
      name : "lat",
      type : "number",
      title :"Latitide of the restaurant",
    },
    {
      name : "long",
      type : "number",
      title :"Longitude of the restaurant",
    },
    {
      name : "address",
      type : "string",
      title :"Address of the restaurant",
      validation : (Rule)=> Rule.required(),
    },
    {
      name : "rating",
      type : "number",
      title :"Rating of the restaurant",
      validation: (Rule)=>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a valid value between 1 and 3")
    },
    {
      name : "type",
      title :"Category",
      validation : (Rule)=>Rule.required(),
      type: "reference",
      to: [{type:"category"}]

    },
    {
      name : "dishes",
      type : "array",
      title :"Dishes",
      // array of dishes , gonna get an array not one single item 
      of: [{ type:"reference" , to:[{ type:"dish"}]  }],
    }
  ],

  
})
