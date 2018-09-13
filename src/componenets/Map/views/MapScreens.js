/**
 * Created by iampamungkas on 10/17/17.
 */
import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const markerIDs = ['s1', 's2']
const timeout = 4000;
let animationTimeout;

export default class MapScreens extends Component {
    state = {
      region: {
        latitude: -6.9175,
        longitude: 107.6191,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      koor1:{
        name: this.props.detail.item1.name,
        coor:{
          latitude: parseFloat(this.props.detail.item1.koor.latitude),
          longitude: parseFloat(this.props.detail.item1.koor.longitude),
        },
      },
      koor2:{
        name: this.props.detail.item2.name,
        coor:{
          latitude: parseFloat(this.props.detail.item2.koor.latitude),
          longitude: parseFloat(this.props.detail.item2.koor.longitude),
        },
      },
      koorisempty: false
    }
    mapStyle = [
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ]
    onRegionChange = (region) => {
      this.setState({
        region,
      })
    }
    /*
    <MapView
      liteMode
      provider="google"
      initialRegion={this.state.region}
      onRegionChange={this.onRegionChange}
      style={map}
      scrollEnabled
      zoomEnabled
      pitchEnabled={false}
      rotateEnabled={false}
    />
    */
    componentDidMount() {
      animationTimeout = setTimeout(() => {
        //this.focus1();
      }, timeout);
    }

    componentWillUnmount() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  }

    focusMap(markers, animated) {
      console.log(`Markers received to populate map: ${markers}`);
      this.map.fitToSuppliedMarkers(markers, animated);
    }

    focus1() {
      animationTimeout = setTimeout(() => {
        this.focusMap([
          markerIDs[0],
          markerIDs[1],
        ], true);
      }, timeout);
    }
    render() {
      //console.log('mapscreen props')
      //console.log(this.props)
      //console.log(this.props.detail.koor1)
/*
title='Koor1'
description='Koor1 desc'
*/
//console.log(this.props.detail.koor1)
      // let LatLng1 = {
      //   latitude: parseFloat(this.props.detail.koor1.latitude),
      //   longitude: parseFloat(this.props.detail.koor1.longitude)
      // }
      // let LatLng2 = {
      //   latitude: parseFloat(this.props.detail.koor2.slatitude),
      //   longitude: parseFloat(this.props.detail.koor2.longitude)
      // }
      //console.log(LatLng1)
/*
scrollEnabled={true}
zoomEnabled={true}
pitchEnabled={true}
rotateEnabled={true}
fitToElements
  onRegionChange={this.onRegionChange}
  initialRegion={this.state.region}
*/

// if(( typeof this.state.koor1.coor === 'undefined' || this.state.koor1.coor === null || isNaN(this.state.koor1.coor) )||( typeof this.state.koor2.coor === 'undefined' || this.state.koor2.coor === null || isNaN(this.state.koor2.coor) )){
//     //this.state.
//     this.setState({
//     koorisempty: true,
//     koor1:{coor: {latitude:parseFloat(0.0), longitude:parseFloat(0.0)}},
//     koor2:{coor: {latitude:parseFloat(0.0), longitude:parseFloat(0.0)}},
//     });
// }
console.log("koor"+this.state.koorisempty)
console.log(this.state.koor1.coor)
console.log(this.state.koor2.coor)
      return (
        <View style={container}>
        <TouchableOpacity style={fab} onPress={() => this.props.navigation.goBack(null)}>
          <Icon3 name="arrow-back" style={{ fontSize: 25, color: '#424242' }} />
        </TouchableOpacity>
          <Text>Som</Text>

          {
            this.state.iskoorempty ? <Text>Coordinate is undefined</Text> :
            <MapView
            ref={ref => { this.map = ref; }}
              zoomControlEnabled
              provider="google"

              style={map}
              draggable
              onLayout = {() => this.map.fitToCoordinates([this.state.koor1.coor,this.state.koor2.coor], { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }, animated: false })}
            >
          <Marker
            coordinate={this.state.koor1.coor}
            identifier='s1'
            title={this.state.koor1.name}
            pinColor={'#01AF60'}
          />
          <Marker
            coordinate={this.state.koor2.coor}
            identifier='s2'
            title={this.state.koor2.name}
            pinColor={'#01AF60'}
          />
                    </MapView>
        }


        </View>
      )
    }
}
const container = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'flex-end',
  alignItems: 'center',
}
const map = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

const fab = {
  elevation: 12,
  width: 40,
  height: 40,
  borderRadius: 30,
  backgroundColor: 'white',
  position: 'absolute',
  top: 24,
  left: 24,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 39,
}
