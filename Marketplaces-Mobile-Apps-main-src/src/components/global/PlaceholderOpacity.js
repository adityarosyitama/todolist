import {Helper} from '../../utils';
import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Mixins} from '../../styles';

export const PlaceholderOpacity = ({
  list = 3,
  type = 'column', // type is "column" or "row"
}) => {
  const anim = useRef(new Animated.Value(0)).current;
  const animDo = anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });
  const colors = [
    'rgba(255,255,255,0.7)',
    'rgba(255,255,255,0.4)',
    'rgba(255,255,255,0.4)',
  ];
  const data = [];

  useEffect(() => {
    animatedFunc();
  }, []);

  const animatedFunc = () => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: 1500,
      }),
    ).start();
  };

  for (let i = 0; i < list; i++) {
    data.push('');
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animSty,
          {
            opacity: animDo,
            backgroundColor: Helper.opacityColor(Colors.WHITE, 5),
          },
        ]}>
        {/* <LinearGradient colors={colors} style={styles.animSty, {width: '100%'}}/> */}
      </Animated.View>
      {switchType()}
    </View>
  );

  function switchType() {
    switch (type) {
      case 'column':
        return columnType();
      case 'row':
        return rowType();
      case 'grid':
        return gridType();
      case 'single':
        return singleType();

      default:
        return columnType();
    }
  }

  function singleType() {
    return (
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFAC4B', '#FFD5A4']}
        style={styles.currentPeriodCard}>
        <View
          style={[
            styles.lineSingle,
            {
              width: '40%',
              height: 15,
              marginTop: 5,
              backgroundColor: Colors.WHITE,
            },
          ]}
        />
        <View style={[styles.cardRow, {alignItems: 'flex-start'}]}>
          <View style={[styles.lineSingle, {width: '38%', height: 8}]} />
          <View style={{width: '35%'}}>
            <View style={[styles.lineSingle, {width: '80%', height: 8}]} />
            <View
              style={[
                styles.lineSingle,
                {
                  width: '100%',
                  height: 15,
                  backgroundColor: Colors.GREEN_MONEY,
                },
              ]}
            />
          </View>
        </View>
        <View style={{paddingVertical: Mixins.scaleSize(10)}}>
          <View
            style={[
              styles.lineSingle,
              {width: '100%', height: 8, backgroundColor: Colors.RED},
            ]}
          />
          <View style={[styles.cardRow, {marginTop: Mixins.scaleSize(8)}]}>
            <View
              style={[
                styles.lineSingle,
                {width: '30%', height: 8, backgroundColor: Colors.RED},
              ]}
            />
            <View
              style={[
                styles.lineSingle,
                {width: '30%', height: 8, backgroundColor: Colors.GREEN_MONEY},
              ]}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }

  function columnType() {
    return (
      <FlatList
        data={data}
        renderItem={() => (
          <View style={styles.content}>
            <View style={styles.row}>
              <View style={styles.circle} />
              <View style={styles.lineTop}>
                <View style={[styles.line, {width: '80%'}]} />
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.line} />
            <View style={[styles.line, {width: '90%'}]} />
          </View>
        )}
      />
    );
  }

  function gridType() {
    return (
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={() => (
          <View style={styles.contentGrid}>
            <View style={styles.row}>
              <View style={styles.circle} />
              <View style={styles.lineTop}>
                <View style={[styles.line, {width: '80%'}]} />
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.line} />
            <View style={[styles.line, {width: '90%'}]} />
          </View>
        )}
      />
    );
  }

  function rowType() {
    return (
      <FlatList
        data={data}
        horizontal
        renderItem={() => (
          <View style={styles.contentRow}>
            <View style={styles.row}>
              <View style={styles.circle} />
              <View style={styles.lineTop}>
                <View style={[styles.line, {width: '80%'}]} />
                <View style={styles.line} />
              </View>
            </View>
            <View style={styles.line} />
            <View style={[styles.line, {width: '90%'}]} />
          </View>
        )}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Mixins.scaleSize(0),
  },
  content: {
    padding: Mixins.scaleSize(15),
    backgroundColor: Colors.WHITE,
    borderRadius: Mixins.scaleSize(10),
    marginBottom: Mixins.scaleSize(10),
  },
  contentGrid: {
    width: '48.5%',
    padding: Mixins.scaleSize(15),
    backgroundColor: Colors.WHITE,
    borderRadius: Mixins.scaleSize(10),
    marginBottom: Mixins.scaleSize(10),
  },
  contentRow: {
    padding: Mixins.scaleSize(15),
    backgroundColor: Colors.WHITE,
    borderRadius: Mixins.scaleSize(10),
  },
  circle: {
    backgroundColor: Colors.GREY_PLACEHOLDER,
    marginRight: Mixins.scaleSize(10),
    width: Mixins.scaleSize(40),
    height: Mixins.scaleSize(40),
    borderRadius: Mixins.scaleSize(40 / 4),
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(10),
  },
  line: {
    backgroundColor: Colors.GREY_PLACEHOLDER_1,
    borderRadius: Mixins.scaleSize(5),
    height: Mixins.scaleSize(10),
    marginBottom: Mixins.scaleSize(5),
  },
  lineTop: {
    width: '60%',
  },
  animSty: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 5,
  },

  //single
  currentPeriodCard: {
    marginTop: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(10),
    paddingHorizontal: Mixins.scaleSize(13),
    borderRadius: Mixins.scaleSize(10),
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineSingle: {
    backgroundColor: Colors.GREY_1,
    borderRadius: Mixins.scaleSize(10),
    height: Mixins.scaleSize(10),
    marginBottom: Mixins.scaleSize(4),
  },
});
