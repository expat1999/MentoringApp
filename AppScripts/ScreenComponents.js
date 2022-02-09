



import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {colors, mainTitleWidth} from './Styles.js';
import { useNavigation } from '@react-navigation/native';


export function SettingsModal(props) {
  var navFunction = props.navFunction;
  useEffect(() => {
    navFunction = props.navFunction;
  }, [props.navFunction]);
  return (
    <TouchableOpacity style={{width:30,marginRight:15}} onPress={navFunction} activeOpacity={0.5}>
        <IonIcon name="ios-settings" size={30} color={colors.vikingBlue} />
    </TouchableOpacity>
  );
}

/*
export class SettingsModal extends React.Component {
  render() {
    let navFunction = this.props.navFunction;
    console.log(typeof colors.vikingBlue);
    console.log(navFunction);
    return (
      <TouchableOpacity style={{width:30,marginRight:15}} onPress={navFunction} activeOpacity={0.5}>
          <IonIcon name="ios-settings" size={30} color={colors.vikingBlue} />
      </TouchableOpacity>
    );
  }
}
*/

export function BackButton(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={{marginLeft:15,justifyContent:'center',width:30}}
                      onPress={() => navigation.goBack()} activeOpacity={0.5}>
        <IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
    </TouchableOpacity>
  );
}

/*
export class BackButton extends React.Component {
  render() {
    let navigation = this.props.navigation;
    return (
      <TouchableOpacity style={{marginLeft:15,justifyContent:'center',width:30}}
                        onPress={() => navigation.goBack()} activeOpacity={0.5}>
          <IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
      </TouchableOpacity>
    );
  }
}
*/

// (title, navFunction)

export function TitleBar(props) {
  var navigation = useNavigation();
  var title = props.title;
  var navFunction = props.navFunction;
  useEffect(() => {
    title = props.title;
    navFunction = props.navFunction;
  }, [props.title, props.navFunction]);
  return (
    <View key={title}>
      <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
      <View style={{flexDirection:'row-reverse', backgroundColor: colors.white, alignItems:'center'}}>
        <SettingsModal navFunction={navFunction} navigation={navigation} />
        <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
          <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
        </View>
      </View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
    </View>
  );
}

/*
export class TitleBar extends React.Component {
  
  render () {
    let title = this.props.title;
    let navFunction = this.props.navFunction;
    let navigation = this.props.navigation;
    return (
      <View key={title}>
        <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
        <View style={{flexDirection:'row-reverse', backgroundColor: colors.white, alignItems:'center'}}>
          <SettingsModal navFunction={navFunction} navigation={navigation} />
          <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
          </View>
        </View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
      </View>
    );
  }
};
*/

export function BackTitleBar(props) {
  const navigation = useNavigation();
  var title = props.title;
  var navFunction = props.navFunction;
  useEffect(() => {
    title = props.title;
    navFunction = props.navFunction;
  }, [props.title, props.navFunction]);
  return (
    <View key={title}>
      <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
      <View style={{flexDirection:'row', backgroundColor: colors.white, alignItems:'center'}}>
        <View style={{width:10}}></View>
        {/* <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5}>
          <IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
        </TouchableOpacity> */}
        <BackButton navigation={navigation} />
        <View style={{width:10}}></View>
        <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
          <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
        </View>
        <SettingsModal navFunction={navFunction} navigation={navigation} />
      </View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
    </View>
  );
}

/*
export class BackTitleBar extends React.Component {
  render () {
    let title = this.props.title;
    let navFunction = this.props.navFunction;
    let navigation = this.props.navigation;
    return (
      <View key={title}>
        <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
        <View style={{flexDirection:'row', backgroundColor: colors.white, alignItems:'center'}}>
          <View style={{width:10}}></View>
          {
            //<TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5}>
            //<IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
            //</TouchableOpacity> 
          }
          <BackButton navigation={navigation} />
          <View style={{width:10}}></View>
          <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
          </View>
          <SettingsModal navFunction={navFunction} navigation={navigation} />
        </View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
      </View>
    );
  }
}
*/

export function HelpModal(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{width:30,justifyContent:'center'}} 
            onPress={() => navigation.navigate('HelpModal')} activeOpacity={0.5}>
      <IonIcon name="ios-help-circle" size={30} color={colors.vikingBlue} />
    </TouchableOpacity>
  );
}

/*
export class HelpModal extends React.Component {
  render () {
    let navigation = this.props.navigation;
    return (
      <TouchableOpacity style={{width:30,justifyContent:'center'}} 
                        onPress={() => navigation.navigate('HelpModal')} activeOpacity={0.5}>
        <IonIcon name="ios-help-circle" size={30} color={colors.vikingBlue} />
      </TouchableOpacity>
    );
  }
}
*/

export function BackTitleBarHelp(props) {
  const navigation = useNavigation();
  var title = props.title;
  useEffect(() => {
    title = props.title;
  }, [props.title]);
  return (
    <View key={title}>
      <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
      <View style={{flexDirection:'row', backgroundColor: colors.white, alignItems:'center'}}>
        <BackButton navigation={navigation} />
        {/* <TouchableOpacity style={{marginLeft:15,justifyContent:'center',width:30}} 
                          onPress={() => navigation.goBack()} activeOpacity={0.5}>
          <IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
        </TouchableOpacity> */}
        <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
          <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
        </View>
        <HelpModal navigation={navigation} />
      </View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
    </View>
  );
}

/*
export class BackTitleBarHelp extends React.Component {
  render () {
    let title = this.props.title;
    let navigation = this.props.navigation;
    return (
      <View key={title}>
        <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
        <View style={{flexDirection:'row', backgroundColor: colors.white, alignItems:'center'}}>
          <BackButton navigation={navigation} />
          { 
            //<TouchableOpacity style={{marginLeft:15,justifyContent:'center',width:30}} 
            //                onPress={() => navigation.goBack()} activeOpacity={0.5}>
            //<IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
            //</TouchableOpacity>
          }
          <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
          </View>
          <HelpModal navigation={navigation} />
        </View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
      </View>
    );
  }
}
*/

export function BackTitleBarContact(props) {
  const navigation = useNavigation();
  var title = props.title;
  useEffect(() => {
    title = props.title;
  }, [props.title]);
  return (
    <View key={title}>
      <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
      <View style={{flexDirection:'row', backgroundColor: colors.white, alignItems:'center'}}>
        <BackButton navigation={navigation} />
        {/* <TouchableOpacity style={{marginLeft:15,justifyContent:'center',width:30}} 
                          onPress={() => navigation.goBack()} activeOpacity={0.5}>
          <IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
        </TouchableOpacity> */}
        <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
          <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
        </View>
      </View>
      <View style={{height:30, backgroundColor: colors.white}}></View>
    </View>
  );
}

/*
export class BackTitleBarContact extends React.Component {
  render () {
    let title = this.props.title;
    let navigation = this.props.navigation;
    return (
      <View key={title}>
        <View style={{height:25, backgroundColor: colors.vikingBlue}}></View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
        <View style={{flexDirection:'row', backgroundColor: colors.white, alignItems:'center'}}>
          <BackButton navigation={navigation} />
          {
            //<TouchableOpacity style={{marginLeft:15,justifyContent:'center',width:30}} 
            //              onPress={() => navigation.goBack()} activeOpacity={0.5}>
            //<IonIcon type='Ionicons' name='ios-arrow-back' size={30} color={colors.vikingBlue} />
            //</TouchableOpacity>
          }
          <View style={{width:mainTitleWidth,textAlign:'center',alignItems:'center'}}>
            <Text style={{fontSize:22,textAlign:'center'}}>{title}</Text>
          </View>
        </View>
        <View style={{height:30, backgroundColor: colors.white}}></View>
      </View>
    );
  }
}
*/