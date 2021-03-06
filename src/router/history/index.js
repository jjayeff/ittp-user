import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import Transaction from './containers/Transaction';
import { HISTORY } from '../../texts';

const History = () => {
  const { historyStyle } = styles;
  return (
    <View style={historyStyle}>
      <Header headerText={HISTORY} />
      <Transaction />
      <Bottom />      
    </View>
  );
};

const styles = StyleSheet.create({
  historyStyle: {
    backgroundColor: '#FFFFFF',          
    flex: 1,
    flexDirection: 'column',
  },
});

export default History;
