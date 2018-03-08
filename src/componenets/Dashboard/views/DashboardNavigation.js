/**
 * Created by iampamungkas on 2/13/18.
 */
'use strict'

// Replace Dashboard with the component name

// React
import React from 'react'
import {BackHandler} from 'react-native'
import { NavigationActions } from 'react-navigation'

// Navigation
import {addNavigationHelpers} from 'react-navigation'
import {NavigatorDashboard} from '../navigationConf'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
//Redux
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    navigationState: state.Dashboard,
  })

class DashboardNavigation extends React.Component {
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  onBackPress = () => {
    const { dispatch, state } = this.props.navigation
    if (state.routeName === 'Dashboard') {
      BackHandler.removeEventListener()
      BackHandler.exitApp()
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }
  render() {
    const {dispatch, navigationState, navigation} = this.props
    return (
      <NavigatorDashboard
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
            addListener: navigation.addListener,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(DashboardNavigation)