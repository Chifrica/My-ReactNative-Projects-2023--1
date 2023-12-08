import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemToDisplay = [
    {name: 'Hamas', id: '1A'},
    {name: 'Isearl', id: '2B'},
    {name: 'John', id: '3C'}
];

// const Separator = () => <View style = {menuStyle.separator} />

    // return (
    //     <View style = { menuStyle.container }>
    //         <ScrollView 
    //             indicatorStyle = {'white'}
    //             horizontal = {false}
    //             style = { menuStyle.innerContainer}>
    //                 <Text style = { menuStyle.headerText}>
    //                     View Menu
    //                 </Text>
    //                 <Text style = { menuStyle.itemText}>{menuItemToDisplay[8]}</Text>
    //         </ScrollView>
    //     </View>
    // )

    
// };
const Item = ({name}) => {
    return (
        <View style = {menuStyle.container}>
            <Text style = {menuStyle.itemText} > {name} </Text>
        </View>
    )
}

const renderItem = ({item}) => <Item row = {item.name} />

const MenuItems = () => {
    return (
        <View style = { menuStyle.container}>
            <Text style = { menuStyle.headerText}> View Menu</Text>
            <FlatList data = { menuItemToDisplay} renderItem = {renderItem} keyExtractor = {(item) => item.id}/>
        </View>
    )
}
export default MenuItems;

const menuStyle = StyleSheet.create ({
    container: {
        flex: 0.75
    },

    innerContainer: {
        padding: 40,
        backgroundColor: green,
    },

    headerText: { 
        fontSize: 40, 
        flexWrap: 'wrap', 
        color: 'white'
    },

    itemText: {
        color: yellow,
        fontSize: 30
    },

    separator: {
        borderBottomWidth: 1
    }
})