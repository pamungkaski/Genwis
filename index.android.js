import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    AsyncStorage
} from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import HomeNavigation from './src/componenets/Home/views/HomeNavigation'

const store = configureStore();
persistStore(store, {storage: AsyncStorage, blacklist:['Home', 'Book']}).purge()
export default class GenwisApp extends Component {
    render() {
        return (
            <Provider store={store}>
              <View style={container1}>
                <HomeNavigation/>
              </View>
            </Provider>
        )
    }
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
AppRegistry.registerComponent('GenwisApp', () => GenwisApp);
