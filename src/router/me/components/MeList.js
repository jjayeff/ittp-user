import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { CardMe, CardMeSection, TextModal } from '../../../components/common';

class MeList extends Component {
  renderComponent() {
    const list1 = [
      {
        title: 'ข้อมูลส่วนตัว',
        icon: 'account-circle'
      },
      {
        title: 'ที่อยู่',
        icon: 'home'
      },
    ];
    const list2 = [
      {
        title: 'ช่องทางการจ่ายเงิน',
        icon: 'payment'
      },
      {
        title: 'สถาที่ติดต่อเรา',
        icon: 'account-balance'
      },
    ];
    const list3 = [
      {
        title: 'คำถามที่พบบ่อยๆ',
        icon: '?'
      },
      {
        title: 'เกี่ยวกับบริษัทไอทีทีพี',
        icon: 'school'
      },
      {
        title: 'ออกจากระบบ',
        icon: 'undo'
      },
    ];
    return (
      <View>
        <List>
          {
            list1.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: '#153d8a' }}
                fontFamily='Cloud-Light'
                chevronColor='#153d8a'
                titleStyle={{ color: '#153d8a' }}
              />
            ))
          }
        </List>
        <List>
          {
            list2.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: '#153d8a' }}
                fontFamily='Cloud-Light'
                chevronColor='#153d8a'
                titleStyle={{ color: '#153d8a' }}
              />
            ))
          }
        </List>
        <List>
          {
            list3.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: '#153d8a' }}
                fontFamily='Cloud-Light'
                chevronColor='#153d8a'
                titleStyle={{ color: '#153d8a' }}
              />
            ))
          }
        </List>
      </View>
    );
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderComponent()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#153d8a',
    width: '100%',
  },
});

export default MeList;
