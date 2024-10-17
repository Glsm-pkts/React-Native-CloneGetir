import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CategoryFiltering from "../../components/CategoryFiltering"
import { Category } from '../../models';
import TypeFiltering from "../../components/TypeFiltering"
import ProductItem from "../../components/ProducItem"
import ProductContainer from "../../components/ProductsContainer"

const index = (props) => {
  const [category,SetCategory] = useState<Category>(props.route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category}/>
      <TypeFiltering/>
      <ProductContainer/>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})