import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text
} from "react-native";

const DATA = [
  {
    id: "0",
    title: "All"
  },
  {
    id: "1",
    title: "Sunday"
  },
  {
    id: "2",
    title: "Monday"
  },

  {
    id: "3",
    title: "Tuesday"
  },
  {
    id: "4",
    title: "Wednesday"
  },
  {
    id: "5",
    title: "Thursday"
  },
  {
    id: "6",
    title: "Friday"
  },
  {
    id: "7",
    title: "Saturday"
  }
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      allSelected: false,
      selectedId: null,
      dataSource: DATA
    };
  }

  renderItem(item) {
    const { id, title } = item.item;
    console.log(title);
    return (
      <View>
        <TouchableOpacity onPress={() => this.selectItem(item)}>
          {this.state.allSelected ? (
            <View
              style={[
                styles.item,
                {
                  backgroundColor: this.state.allSelected
                    ? "#6e3b6e"
                    : "#f9c2ff"
                }
              ]}
            >
              <Text style={styles.title}>{title}</Text>
            </View>
          ) : (
            <View
              style={[
                styles.item,
                {
                  backgroundColor:
                    this.state.selectedId === id ? "#6e3b6e" : "#f9c2ff"
                }
              ]}
            >
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  selectItem = item => {
    console.log(item.item.id);
    if (item.item.id == 0) {
      this.setState({
        selected: !this.state.selected,
        selectedId: null,
        allSelected: !this.state.allSelected
      });
    } else {
      this.setState({
        selected: !this.state.selected,
        selectedId: item.item.id,
        allSelected: !this.state.allSelected
      });
    }
  };
  render() {
    // console.log(this.state.dataSource);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          horizontal={true}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id}
          extraData={this.state.selected}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2
  },

  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10
  },

  selected: { backgroundColor: "#FA7B5F" }
});

export default Home;
