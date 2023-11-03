/*
 ****************************************************************
 ******************    ALL APP CONSTANTS   **********************
 ****************************************************************
 */

 import { NavigationContainerRef, ParamListBase } from "@react-navigation/native";
import React from "react";
 import { Dimensions } from "react-native";
import { Character } from "../typings/store";
import { DetailsData } from "../screens/Details";
 
 const { width, height } = Dimensions.get("window");
 
 

 export const CACHE_KEY: string = `@REDUX_LOCAL_PERSISTANCE_KEY`;
 export const CACHE_VERSION: number = 1; // version 1

 /**
  * extending app global constants
  * @constant DEVICE_FULL_HEIGHT default value
  * @constant DEVICE_FULL_WIDTH default value
  */
 export const DEVICE_FULL_WIDTH: number = width;
 export const DEVICE_FULL_HEIGHT: number = height;
 
 /**
  * extending app global navigation
  */
  export const navigationRef = React.createRef<NavigationContainerRef<ParamListBase>>();
 
 /**
  * extending app global constants
  * @constant APP_SCREEN_LIST default value
  */
 
  export enum  APP_SCREEN_LIST {
    HOME = "Home",
    DETAILS = "Details",
  }
 

  export type HomeStackParamList = {
    [APP_SCREEN_LIST.HOME]: undefined
    [APP_SCREEN_LIST.DETAILS]: undefined | {item:Character} | {item :DetailsData}
}