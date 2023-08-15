import React,{useEffect, Component, useState } from 'react'
import { Text, View ,ScrollView } from 'react-native'
import Tw from 'twrnc';
import CategoryCard from './CategoryCard';
import Client from '../Client';
import imageUrlBuilder from '@sanity/image-url'

const Categories =()=>{
  
    const [categories,setCategories]=useState([]);
    const builder = imageUrlBuilder(Client);
    function urlFor(source) {
      return builder.image(source);
    }
    useEffect(()=>{
      const query = `*[_type == 'category']`;
   
      Client
      .fetch(query)
      .then((data)=>{
          setCategories(data);
          console.log(data);
      })
      .catch((error)=>{
          console.log('Error:',error);
      });
    }, []);


    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
            paddingTop: 10 , 
            paddingHorizontal: 15,
        }}
      >
        {categories.map(item=>(
  
          <CategoryCard key={item._id} id={item._id} imgUrl={urlFor(item.image).url()} title={item.name} ></CategoryCard>
        
        ))}

        
      </ScrollView>
    )
  
}

export default Categories
