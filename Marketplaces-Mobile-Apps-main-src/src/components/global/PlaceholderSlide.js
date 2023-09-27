import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Mixins, Shadow} from '../../styles';

export const PlaceholderSlide = ({
  list = 3,
  type = 'column', // type is "column" or "row"
  style,
}) => {
  const anim = useRef(new Animated.Value(0)).current;

  const animDo = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-1000, 1],
  });
  const animDo1 = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 4950],
  });
  const animDo2 = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5000],
  });
  const animDo3 = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5000],
  });
  const animDo4 = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 4950],
  });
  const animCirDo = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 1],
  });

  const colors = [
    'rgba(255,255,255,0.5)',
    'rgba(255,255,255,0.6)',
    'rgba(255,255,255,0.5)',
  ];
  const data = [];
  for (let i = 0; i < list; i++) {
    data.push('');
  }

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

  return <View style={[styles.container, style]}>{switchType()}</View>;

  function switchType() {
    switch (type) {
      case 'column':
        return columnType();
      case 'grid':
        return gridType();
      case 'row':
        return rowType();

      default:
        return columnType();
    }
  }

  function columnType() {
    return (
      <FlatList
        data={data}
        style={{marginTop: Mixins.scaleSize(10)}}
        renderItem={() => (
          <View style={[styles.content, Shadow.Normal]}>
            <View style={styles.row}>
              <View style={styles.circle}>{animation(animCirDo)}</View>
              <View style={styles.lineTop}>
                <View style={[styles.line, {width: '80%'}]}>
                  {animation(animDo)}
                  {animation1(animDo1)}
                </View>
                <View style={styles.line}>
                  {animation(animDo)}
                  {animation1(animDo2)}
                </View>
              </View>
            </View>
            <View style={styles.line}>
              {animation(animDo)}
              {animation1(animDo3)}
            </View>
            <View style={[styles.line, {width: '90%'}]}>
              {animation(animDo)}
              {animation1(animDo4)}
            </View>
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
              <View style={styles.circle}>{animation(animCirDo)}</View>
              <View style={styles.lineTop}>
                <View style={[styles.line, {width: '80%'}]}>
                  {animation(animDo)}
                  {animation1(animDo1)}
                </View>
                <View style={styles.line}>
                  {animation(animDo)}
                  {animation1(animDo2)}
                </View>
              </View>
            </View>
            <View style={styles.line}>
              {animation(animDo)}
              {animation1(animDo3)}
            </View>
            <View style={[styles.line, {width: '90%'}]}>
              {animation(animDo)}
              {animation1(animDo4)}
            </View>
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
          <View style={styles.content}>
            <View style={styles.row}>
              <View style={styles.circle}>{animation(animCirDo)}</View>
              <View style={styles.lineTop}>
                <View style={[styles.line, {width: '80%'}]}>
                  {animation(animDo)}
                  {animation1(animDo1)}
                </View>
                <View style={styles.line}>
                  {animation(animDo)}
                  {animation1(animDo2)}
                </View>
              </View>
            </View>
            <View style={styles.line}>
              {animation(animDo)}
              {animation1(animDo3)}
            </View>
            <View style={[styles.line, {width: '90%'}]}>
              {animation(animDo)}
              {animation1(animDo4)}
            </View>
          </View>
        )}
      />
    );
  }

  function animation(val) {
    return (
      <Animated.View style={[styles.animSty, {marginLeft: val}]}>
        <LinearGradient colors={colors} style={styles.gradientSty} />
      </Animated.View>
    );
  }
  function animation1(val) {
    return (
      <Animated.View style={[styles.animSty, {marginLeft: val, width: '100%'}]}>
        <LinearGradient colors={colors} style={styles.gradientSty} />
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Mixins.scaleSize(10),
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
  circle: {
    backgroundColor: Colors.GREY_PLACEHOLDER,
    marginRight: Mixins.scaleSize(10),
    width: Mixins.scaleSize(40),
    height: Mixins.scaleSize(40),
    borderRadius: Mixins.scaleSize(40 / 4),
    zIndex: 2,
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

  //animated
  animSty: {
    height: '100%',
    width: '150%',
    position: 'absolute',
    flexDirection: 'row',
    zIndex: -1,
  },
  gradientSty: {
    height: '100%',
    width: '100%',
  },
});
