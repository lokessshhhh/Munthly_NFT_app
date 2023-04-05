import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  Modal,
  TouchableWithoutFeedback,
  Touchable,
} from 'react-native';
import {styles_login} from '../../LoginScreen/LoginSignUpStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'native-base';
import ButtonTouch from '../../../components/Button';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import ImagePicker from 'react-native-image-crop-picker';
import Carousel from 'react-native-snap-carousel';
import Popover from 'react-native-popover-view';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import axios from 'axios';
import BaseURl from '../../../Geners/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SLIDER_WIDTH = wp('95%');
export const SLIDER_HEIGHT = wp('95%');
export const ITEM_WIDTH = wp('95%');

// create a component
const UploadScreen = ({navigation}) => {
  useEffect(() => {
    GetToken();
    setResourcePath('');
  }, []);

  const GetToken = async () => {
    let Token = await AsyncStorage.getItem('LoginToken');
    SetLoginToken(Token)
  };

  const touchable = useRef();
  const Dimtouchable = useRef();

  const [SliderValue, SetSliderValue] = useState(0);
  const [selectedmonth, Setselectedmonth] = useState(0);
  const [ProductPrice, SetProductPrice] = useState(100);
  const [category, setcategory] = useState(false);
  const [Title, SetTitle] = useState('');
  const [Bio, SetBio] = useState('');
  const [Medium, setMedium] = useState(false);
  const [ResourcePath, setResourcePath] = useState([]);
  const [Index, setindex] = useState(0);
  const isCarousel = useRef(null);
  const [showPopover, setShowPopover] = useState(false);
  const [showPopover1, setShowPopover1] = useState(false);
  const [ProductWidth, SetProductWidth] = useState(0);
  const [ProductHeight, SetProductHeight] = useState(0);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [LoginToken, SetLoginToken] = useState('');

  const PostData = async () => {
    await axios
      .post(
        BaseURl + 'api/v1/artworks/',
        {
          title: Title,
          artist: 'Yash katariya',
          artistBio:
            Bio,
          medium: '',
          size: '',
          year: 1813,
          origin: 'Paris',
          category: [''],
          dimensions:`${ProductWidth} X ${ProductHeight}`,
          date: date,
          price: ProductPrice,
          isSold: false,
        },
        {
          headers: {
            Authorization:
              `Bearer ${LoginToken}`,
          },
        },
      )
      .then(response => {
        response.data.success === true
          ? console.log(response.data.success)
          : console.log('passed');
        console.log(response.data.data._id, '====Data====');
        //  axios
        //   .put(
        //     BaseURl + 'api/v1/artworks/' + response.data.data._id + '/images',
        //     {
        //     Image1: ResourcePath[0],
        //     Image1: ResourcePath[1],
        //     Image1: ResourcePath[2],
        //     Image1: ResourcePath[3],
        //     Image1: ResourcePath[4],
        //     },
        //   )
        //   .then(response => {
        //     response.data.success === true
        //       ? console.log('Image Updated Succesfully')
        //       : console.log('Upload canceled');
        //   })
        //   .catch(error => {
        //     console.log(error, 'errorrororor===');
        //   });
      })
      .catch(error => {
        console.log(error.response.data, '===err====');
      });
  };

  const selectFile = () => {
    setResourcePath('');
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      const filterimage = images.map((item, index) => {
        return item.path;
      });
      filterimage.length <= 5
        ? setResourcePath(filterimage)
        : alert('Maximum Five Images Can Be Uploaded');
      console.log(filterimage, '=====paths=====');
      setindex(0);
    });
  };

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          width: SLIDER_WIDTH,
          height: SLIDER_HEIGHT,
          // width:wp("95%"),
          borderRadius: 15,
          backgroundColor: 'lightgrey',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item}}
          style={{height: '100%', width: '100%', borderRadius: 15}}
        />
      </View>
    );
  };

  const RightArrowList = ({Listtext, onPress}) => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <View style={styles.ArrowListView}>
          <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
            {Listtext}
          </Text>
          <Image
            source={require('../../../../assets/images/ButtonIcons/rightarrow.png')}
            style={{height: 20, width: 20, tintColor: '#303536'}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const SizeDataList = ({SizeListtext, onPress, TextToShow, Ref}) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1} ref={Ref}>
        <View style={styles.ArrowListView}>
          <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
            {SizeListtext}:
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>{TextToShow}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles_login.HomeTextView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              position: 'absolute',
              left: wp('3.3%'),
            }}>
            <Image
              style={styles_login.BackArrow}
              source={require('../../../../assets/images/BackArrow.png')}
            />
          </TouchableOpacity>

          <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
            Upload Artwork
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            width: wp('100%'),
            borderColor: '#E7ECF0',
          }}></View>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'transparent',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: hp('4%'),
                backgroundColor: 'transparent',
              }}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {color: '#303536', fontSize: 16},
                ]}>
                Add up to 5 images.
              </Text>
              <TouchableOpacity
                ref={touchable}
                onPress={() => setShowPopover(true)}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    {color: '#5360EE', fontSize: 16},
                  ]}>
                  {' '}
                  See Photo tips
                </Text>
              </TouchableOpacity>
              <Popover
                popoverStyle={{
                  padding: 20,
                  borderRadius: 20,
                  width: wp('70%'),
                }}
                from={touchable}
                isVisible={showPopover}
                onRequestClose={() => setShowPopover(false)}>
                <View style={{}}>
                  <Text style={[styles_login.HeaderTextStyle, {fontSize: 15}]}>
                    You Must Add Upto 5 Images Only Upload Good Quality Images
                    For Better Response
                  </Text>
                </View>
              </Popover>
            </View>

            {ResourcePath === '' ? null : (
              <View style={{alignItems: 'center', flex: 1}}>
                <Carousel
                  initialScrollIndex={0}
                  onScrollAnimationEnd={true}
                  useScrollView
                  enableMomentum={true}
                  decelerationRate={5000}
                  lockScrollWhileSnapping={false}
                  removeClippedSubviews={true}
                  ref={isCarousel}
                  data={ResourcePath}
                  renderItem={_renderItem}
                  sliderWidth={SLIDER_WIDTH}
                  sliderHeight={SLIDER_HEIGHT}
                  itemWidth={ITEM_WIDTH}
                  onSnapToItem={index => setindex(index)}
                />
                <View style={styles.dotView}>
                  {ResourcePath.map(({}, index: number) => (
                    <View>
                      <TouchableOpacity
                        key={index.toString()}
                        style={[
                          styles.dotCircle,
                          {
                            backgroundColor:
                              index == Index ? '#5360EE' : '#D1E0E2',
                          },
                        ]}
                      />
                    </View>
                  ))}
                </View>
              </View>
            )}

            <View>
              <TouchableOpacity
                onPress={() => {
                  selectFile();
                }}
                style={styles.AddImageButton}>
                <Image
                  style={{height: 20, width: 20, tintColor: '#303536'}}
                  source={require('../../../../assets/images/ButtonIcons/plus.png')}
                />
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    {fontSize: 16, paddingHorizontal: 20},
                  ]}>
                  {ResourcePath === '' ? 'Add Images' : 'Add More'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: wp('100%'),
                backgroundColor: 'transparent',
                borderBottomWidth: 25,
                borderColor: '#E7ECF0',
              }}></View>
            <View
              style={{
                backgroundColor: 'transparent',
                width: wp('90%'),
                height: hp('10%'),
              }}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {fontSize: 15, color: '#979797', marginTop: 20},
                ]}>
                Title:
              </Text>
              <TextInput
                value={Title}
                onChangeText={Title => SetTitle(Title)}
                style={{
                  color: 'black',
                  borderBottomWidth: 1,
                  width: wp('90%'),
                  borderColor: '#D8D8D8',
                  height: hp('5%'),
                }}
                placeholder=""
              />
            </View>
            <View
              style={{
                backgroundColor: 'transparent',
                width: wp('90%'),
                height: hp('10%'),
                marginVertical: 15,
              }}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {fontSize: 15, color: '#979797', marginTop: 20},
                ]}>
                Tell a story, describe your artwork:
              </Text>
              <TextInput
                value={Bio}
                onChangeText={Bio => SetBio(Bio)}
                style={{
                  color: 'black',
                  borderBottomWidth: 1,
                  width: wp('90%'),
                  borderColor: '#D8D8D8',
                  height: hp('15%'),
                }}
                placeholder=""
              />
            </View>
            <View
              style={{
                width: wp('100%'),
                backgroundColor: 'transparent',
                height: hp('10%'),
                borderBottomWidth: 25,
                marginTop: 35,
                borderColor: '#E7ECF0',
              }}></View>
          </View>
          <RightArrowList
            onPress={() => {
              setcategory(true);
            }}
            Listtext={'Category'}
          />
          <Modal
            animationType="fade"
            transparent={true}
            focusable={true}
            visible={category}>
            <TouchableWithoutFeedback
              onPress={() => {
                setcategory(false);
                setMedium(false);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{'Categories'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <RightArrowList
            onPress={() => {
              setMedium(true);
            }}
            Listtext={'Medium'}
          />
          <Modal
            animationType="fade"
            transparent={true}
            focusable={true}
            visible={Medium}>
            <TouchableWithoutFeedback
              onPress={() => {
                setcategory(false);
                setMedium(false);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{'Medium'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <SizeDataList
            Ref={Dimtouchable}
            onPress={() => {
              setShowPopover1(true);
            }}
            TextToShow={
              ProductWidth === 0
                ? `Width X Height`
                : `${ProductWidth} X ${ProductHeight}`
            }
            SizeListtext={'Dimensions'}
          />
          <Popover
            popoverStyle={{
              padding: 20,
              borderRadius: 20,
              width: wp('70%'),
            }}
            from={Dimtouchable}
            isVisible={showPopover1}
            onRequestClose={() => setShowPopover1(false)}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                keyboardType="numeric"
                value={ProductWidth}
                onChangeText={ProductWidth => SetProductWidth(ProductWidth)}
                style={{
                  borderWidth: 1,
                  padding: 5,
                  alignItems: 'center',
                  paddingHorizontal: 25,
                  borderRadius: 10,
                }}
                placeholder="Width"
              />
              <TextInput
                keyboardType="numeric"
                value={ProductHeight}
                onChangeText={ProductHeight => SetProductHeight(ProductHeight)}
                style={{
                  borderWidth: 1,
                  padding: 5,
                  alignItems: 'center',
                  paddingHorizontal: 25,
                  borderRadius: 10,
                }}
                placeholder="Height"
              />
            </View>
          </Popover>
          <SizeDataList
            onPress={() => {
              setOpen(true);
            }}
            TextToShow={moment(date).format('DD-MM-YYYY')}
            SizeListtext={'Date'}
          />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              console.log(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <View
            style={{
              width: wp('100%'),
              backgroundColor: 'transparent',
              borderBottomWidth: 25,
              borderColor: '#E7ECF0',
            }}></View>
          <View style={styles.ArrowListView}>
            <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
              Price:
            </Text>
            <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
            ¢ {ProductPrice}
            </Text>
          </View>
          <View style={{width: wp('100%'), alignItems: 'center'}}>
            <Text
              style={[
                styles_login.HeaderTextStyle,
                {fontSize: 18, alignSelf: 'flex-start', padding: 25},
              ]}>
              Munthly Duration:
            </Text>
            <View style={{marginVertical: 35, alignItems: 'center'}}>
              <View
                style={{
                  width: wp('40%'),
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={[styles_login.HeaderTextStyle, {fontSize: 15}]}>
                  03
                </Text>
                <Text style={[styles_login.HeaderTextStyle, {fontSize: 15}]}>
                  12
                </Text>
              </View>
              <MultiSlider
                onValuesChange={value => {SetSliderValue(value.toString()),
                  SetProductPrice(100)
                }}
                onValuesChangeFinish={() => {
                  SliderValue == '0,3'
                  ? SetProductPrice(ProductPrice)
                  : SliderValue == '3,6'
                  ? SetProductPrice(ProductPrice)
                  : SliderValue == '6,12'
                  ? SetProductPrice(ProductPrice)
                  : SliderValue == '12,24'
                  ? SetProductPrice(ProductPrice)
                  : SliderValue == '0,6'
                  ? SetProductPrice(ProductPrice * 2)
                  : SliderValue == '6,24'
                  ? SetProductPrice(ProductPrice * 2)
                  : SliderValue == '3,12'
                  ? SetProductPrice(ProductPrice * 2)
                  : SliderValue == '0,12'
                  ?SetProductPrice(ProductPrice * 3)
                  : SliderValue == '3,24'
                  ? SetProductPrice(ProductPrice * 3)
                  : SliderValue == '0,24'
                  ? SetProductPrice(ProductPrice * 4)
                  : SetProductPrice(ProductPrice)
                }}
                minMarkerOverlapDistance={100}
                allowOverlap={false}
                values={[3, 12]}
                isMarkersSeparated={true}
                showSteps={true}
                showStepMarkers={true}
                showStepLabels={true}
                step={1}
                snapped={true}
                smoothSnapped={true}
                customMarkerLeft={e => (
                  <View
                    style={{
                      marginTop: 16,
                      height: 27,
                      width: 27,
                      borderRadius: 100,
                      backgroundColor: '#E7ECF0',
                      borderWidth: 1,
                      borderColor: '#5360EE',
                    }}></View>
                )}
                customMarkerRight={e => (
                  <View
                    style={{
                      marginTop: 16,
                      height: 27,
                      width: 27,
                      borderRadius: 100,
                      backgroundColor: '#E7ECF0',
                      borderWidth: 1,
                      borderColor: '#5360EE',
                    }}></View>
                )}
                selectedStyle={{
                  height: 13,
                  backgroundColor: '#5360EE',
                  borderWidth: 1.5,
                  borderRadius: 10,
                  borderColor: '#979797',
                  width: 30,
                  borderRightWidth: 0.5,
                }}
                unselectedStyle={{
                  height: 13,
                  backgroundColor: '#E7ECF0',
                  borderWidth: 0.5,
                  borderRadius: 10,
                  borderColor: '#5360EE',
                  width: 30,
                }}
                optionsArray={[0, 3, 6, 12, 24]}
                sliderLength={280}
              />
              <View
                style={{
                  width: wp('77%'),
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={[styles_login.HeaderTextStyle, {fontSize: 15}]}>
                  Once
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    {fontSize: 15, marginRight: 20},
                  ]}>
                  06
                </Text>
                <Text style={[styles_login.HeaderTextStyle, {fontSize: 15}]}>
                  24
                </Text>
              </View>
            </View>
            <ButtonTouch
              onpress={() => {
                PostData();

                // alert('Upload Complete');
              }}
              style={{marginVertical: hp('2.5%')}}
              TextName={'UPLOAD'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  dotCircle: {
    height: 9,
    width: 9,
    backgroundColor: 'black',
    borderRadius: 100,
    marginHorizontal: 4,
  },
  dotView: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    height: hp('50%'),
    width: wp('80%'),
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  AddImageButton: {
    borderWidth: 1,
    borderColor: '#303536',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: hp('5%'),
    padding: 10,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 5,
    marginBottom: 25,
  },
  ArrowListView: {
    width: wp('100%'),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default UploadScreen;
