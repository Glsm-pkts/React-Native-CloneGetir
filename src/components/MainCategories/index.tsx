import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../assets/categoriesGetir'
import CategoryItem from "../CategoryItem"
import { Category } from '../../models'



const index = () => {
  
    const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View >
      <View style={styles.listContainer}>
        {categories.map((item) =>(
            <CategoryItem key={item.id} item={item}/>
))}
        
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
listContainer:{
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
    flexWrap:"wrap",


}
})