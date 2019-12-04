import React from 'react';
import { Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';
import {
  createStackNavigator
} from 'react-navigation-stack';
import {
  createBottomTabNavigator
} from 'react-navigation-tabs';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import DeckDetail from '../components/DeckDetail';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';

import { darkGray, white, green, lightGreen } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const routeConfigs = {
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
          <Icon.Ionicons
              name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'}
              size={30}
              color={tintColor}
          />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
          <Icon.FontAwesome name="plus-square" size={30} color={tintColor} />
      )
    }
  }
};

const tabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  defaultNavigationOptions: {
    bounces: true
  },
  tabBarOptions: {
    // activeTintColor: isIOS ? green : white,
    activeTintColor: green,
    style: {
      // height: isIOS ? 56 : 70,
      height: 60,
      // backgroundColor: isIOS ? white : green,
      backgroundColor: white,
      shadowColor: 'rgba(0,0,0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      borderTopWidth: 1,
      borderTopColor: darkGray
    },
    labelStyle: {
      // fontSize: isIOS ? 11 : 12
      fontSize: 12,
      fontWeight: 'bold'
    },
    tabStyle: {
      // marginTop: isIOS ? 0 : 5
      marginTop: 5,
      marginBottom: 3
    },
    showIcon: true
  }
};

// const Tabs = isIOS
//   ? createBottomTabNavigator(routeConfigs, tabNavigatorConfig)
//   : createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);
const Tabs = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

const MainNavigator = createStackNavigator(
    {
      Home: {
        screen: Tabs
      },
      DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
          headerTintColor: green,
          headerStyle: {
            backgroundColor: lightGreen
            // height: 20
          }
        }
      },
      AddCard: {
        screen: AddCard,
        navigationOptions: {
          headerTintColor: green,
          headerStyle: {
            backgroundColor: lightGreen
            // height: 20
          },
          headerTitleStyle: {
            textAlign: 'center',
            justifyContent: 'center'
          },
          title: 'Add Card'
        }
      },
      Quiz: {
        screen: Quiz,
        navigationOptions: {
          headerTintColor: green,
          headerStyle: {
            backgroundColor: lightGreen
            // height: 20
          },
          title: 'Quiz'
        }
      }
    },
    { headerLayoutPreset: 'center' }
);

export default MainNavigator;