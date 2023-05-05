import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    alignSelf: 'center',
  },
});

export default withNavigation(NavLink);
