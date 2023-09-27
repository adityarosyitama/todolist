import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  // RefreshControl,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import RightDown from 'react-native-vector-icons/Feather';
import {Colors} from '../../../styles';

const LoyaltyComponent = ({
  dataLevel,
  setDataLevel,
  dataHistoryPoint,
  setDataHistoryPoint,
}) => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(null);
  const route = useRoute();
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
        <View style={styles.pointCard}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: Colors.WHITE,
              textAlign: 'left',
            }}>
            Available Point
          </Text>
          <Text
            style={{
              fontSize: 32,
              fontFamily: 'Inter_regular',
              color: Colors.WHITE,
              textAlign: 'left',
              fontWeight: 'bold',
            }}>
            {dataLevel?.data?.point ?? '-'}
          </Text>
          <View style={styles.levelCard}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontFamily: 'Inter_regular',
                  color: Colors.BLACK,
                  textAlign: 'left',
                  fontWeight: '600',
                }}>
                Level
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontFamily: 'Inter_regular',
                  color: Colors.GREY_1,
                  textAlign: 'left',
                }}>
                {dataLevel?.data?.level_user?.start_xp ?? '-'}/
                {dataLevel?.data?.level_user?.end_xp ?? '-'} EXP
              </Text>
            </View>
            <View style={{padding: 4}}></View>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: 'Inter_regular',
                textAlign: 'left',
              }}>
              Complete each transaction using point can unlock gold level.
            </Text>
            <View style={styles.tierView}>
              <View style={[styles.tier, styles.tierLeft]}>
                <Text
                  style={{
                    fontSize: 14,
                    //   lineHeight: 20,
                    fontFamily: 'Inter_regular',
                    color: Colors.BLACK,
                    textAlign: 'left',
                    fontWeight: '600',
                  }}>
                  Platinum
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    //   lineHeight: 20,
                    fontFamily: 'Inter_regular',
                    textAlign: 'left',
                  }}>
                  {dataLevel?.data?.level[0]?.end_xp ?? '-'} Exp
                </Text>
              </View>
              {/* --------------------------------------- */}
              <View style={[styles.tier, styles.tierRight]}>
                <Text
                  style={{
                    fontSize: 14,
                    //   lineHeight: 20,
                    fontFamily: 'Inter_regular',
                    color: '#ea9437',
                    textAlign: 'left',
                    fontWeight: '900',
                    //   opacity: 100,
                  }}>
                  Gold
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    //   lineHeight: 20,
                    fontFamily: 'Inter_regular',
                    textAlign: 'left',
                  }}>
                  {dataLevel?.data?.level[1]?.end_xp ?? '-'} Exp
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePoint')}>
          <View style={styles.pointTermsCondition}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: 'Inter_regular',
                color: '#000',
                textAlign: 'left',
              }}>
              Change Point
            </Text>
            <RightDown name="chevron-right" color={Colors.BLACK} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <View style={styles.pointTermsCondition}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: 'Inter_regular',
                color: '#000',
                textAlign: 'left',
              }}>
              Terms & Condition
            </Text>
            <RightDown name="chevron-right" color={Colors.BLACK} />
          </View>
        </TouchableOpacity>
        <View style={{padding: 8}}></View>

        {/* History Point */}

        <View style={styles.historyPoint}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
              fontWeight: '900',
            }}>
            History Point
          </Text>
          {dataHistoryPoint?.data?.data.map((dataItem, index) => (
            <View
              key={index}
              style={{
                paddingBottom: 8,
                paddingTop: 8,
                flexDirection: 'column',
                borderBottomColor: Colors.GREY,
                borderBottomWidth: 1,
                borderStyle: 'dashed',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 20,
                    fontFamily: 'Inter_regular',
                    color: Colors.BLACK,
                    textAlign: 'left',
                    fontWeight: '600',
                  }}>
                  Order ID#{' '}
                  {dataItem.transaction.invoice_no?.substring(3) ?? '-'}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 20,
                    fontFamily: 'Inter_regular',
                    color: Colors.GREY_3,
                    textAlign: 'left',
                    fontWeight: '600',
                  }}>
                  {dataItem.created_at?.substring(0, 10) ?? '-'}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontFamily: 'Inter_regular',
                  color: Colors.BLACK,
                  textAlign: 'left',
                  fontWeight: '600',
                }}>
                {dataItem.cart_items ?? '-'} Item '(+
                {dataItem.transaction.credit_point ?? '-'} Exp)'
              </Text>
            </View>
          ))}
        </View>

        <View style={{padding: 4, alignSelf: 'center'}}>
          <TouchableOpacity onPress={() => Alert.alert('Data Not Found')}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontFamily: 'Inter_regular',
                color: Colors.PRIMARY_BLUE,
                textAlign: 'left',
                fontWeight: 'bold',
              }}>
              Load More History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pointCard: {
    padding: 12,
    display: 'flex',
    backgroundColor: Colors.BLUE,
  },

  levelCard: {
    display: 'flex',
    margin: 8,
    padding: 8,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },

  tierView: {
    display: 'flex',
    padding: 8,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tier: {
    display: 'flex',
    width: 90,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
  },

  tierLeft: {
    backgroundColor: Colors.GREY,
    borderColor: Colors.GREY,
  },

  tierRight: {
    backgroundColor: Colors.YELLOW,
    borderColor: Colors.YELLOW,
  },

  pointTermsCondition: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
    // borderBottomStartRadius: 50,
    // borderBottomEndRadius: 50,
    // borderStyle: 'solid',
  },

  historyPoint: {
    padding: 16,
    backgroundColor: Colors.WHITE,
  },
});

export default LoyaltyComponent;
