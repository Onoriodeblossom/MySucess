import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackgroundImage,
  ImageBackground,
} from 'react-native';

import React, {useState} from 'react';
import NavSection from '../../components/nav/nav';
import {Modal} from '../../components/ modal/modal';

const HomeScreen = () => {
  const [selectedRadio, setSelectedRadio] = useState(false);
  const [upload, setUpload] = useState(false);
  const [payment, setPayment] = useState(false);
  const [price, setPrice] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <NavSection />
        <View style={styles.homeCover}>
          <TouchableWithoutFeedback onPress={() => setPayment(!payment)}>
            <View style={styles.provideCover}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Provide Payment Details
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={{color: '#000', marginBottom: 30}}>
            Upload course materials
          </Text>

          <Text
            style={{color: '#50B12F', marginBottom: 30, fontWeight: 'bold'}}>
            Program
          </Text>

          <View style={styles.programCover}>
            <View style={styles.codeCover}>
              <Text style={{color: '#000'}}>Under-Graduate</Text>
              <View style={styles.courseCover}>
                <Text
                  style={{
                    color: '#C4C4C4',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  Course Code
                </Text>
              </View>
            </View>

            <View style={styles.codeCover}>
              <Text style={{color: '#000'}}>M. Sc</Text>
              <View style={styles.courseCover}>
                <Text
                  style={{
                    color: '#C4C4C4',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  Course Code
                </Text>
              </View>
            </View>

            <View style={styles.codeCover}>
              <Text style={{color: '#000'}}>Ph. D</Text>
              <View style={styles.courseCover}>
                <Text
                  style={{
                    color: '#C4C4C4',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  Course Code
                </Text>
              </View>
            </View>

            <View style={styles.codeCover}>
              <Text style={{color: '#000'}}>Part-time</Text>
              <View style={styles.courseCover}>
                <Text
                  style={{
                    color: '#C4C4C4',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  Course Code
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.radioCover}>
            <TouchableWithoutFeedback onPress={() => setSelectedRadio(true)}>
              <View style={styles.radioContain}>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: '#707070',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {selectedRadio ? (
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#707070',
                      }}
                    />
                  ) : null}
                </View>
                <Text style={{marginLeft: 7}}>Free</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => setSelectedRadio(false)}>
              <View style={styles.radioContain}>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: '#707070',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {!selectedRadio ? (
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#707070',
                      }}
                    />
                  ) : null}
                </View>
                <Text style={{marginLeft: 7}}>For Sale</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <Text style={{color: '#807E7E', fontStyle: 'italic'}}>
            *Use original file name
          </Text>

          <TouchableWithoutFeedback onPress={() => setUpload(!upload)}>
            <View style={styles.btnCover}>
              <Text style={{color: '#fff'}}>Upload</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Modal show={upload} close={() => setUpload(!upload)}>
          <Text style={{fontWeight: 'bold', marginTop: 30}}>Upload Course</Text>
          <View style={styles.uploadCover}>
            <Text>
              Upload PDF file (Max 2500kb){' '}
              <Text style={{fontWeight: 'bold', color: '#50B12F'}}>Browse</Text>{' '}
            </Text>
          </View>

          <Text style={{fontWeight: 'bold', marginTop: 10}}>
            Upload Past Question (Optional)
          </Text>
          <View style={styles.uploadCover}>
            <Text>
              Upload PDF file (Max 2500kb){' '}
              <Text style={{fontWeight: 'bold', color: '#50B12F'}}>Browse</Text>{' '}
            </Text>
          </View>

          <Text style={{fontWeight: 'bold', marginTop: 10}}>
            Upload Past Question (Optional)
          </Text>
          <TextInput
            style={[styles.uploadCover, {height: 63, paddingLeft: 20}]}
            onChangeText={setPrice}
            value={price}
            placeholder="Input Material Price"
          />

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableWithoutFeedback onPress={() => setUpload(!upload)}>
              <View
                style={[
                  styles.provideCover,
                  {backgroundColor: '#C4C4C4', width: 160, height: 56},
                ]}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  Cancel
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={[
                styles.provideCover,
                {width: 160, height: 56, marginLeft: 10},
              ]}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Save
              </Text>
            </View>
          </View>
        </Modal>

        {/* payment modal section */}

        <Modal show={payment} close={() => setPayment(!payment)}>
          <Text style={{fontWeight: 'bold', marginTop: 30}}>
            Provide your account details
          </Text>

          <View style={[styles.uploadCover, {height: 63, paddingLeft: 0}]}>
            <TextInput
              // style={}
              onChangeText={setPrice}
              value={price}
              placeholder="Account Name"
            />
          </View>

          <View style={[styles.uploadCover, {height: 63, paddingLeft: 0}]}>
            <TextInput
              // style={}
              onChangeText={setPrice}
              value={price}
              placeholder="Bank"
            />
          </View>

          <View style={[styles.uploadCover, {height: 63, paddingLeft: 0}]}>
            <TextInput
              // style={}
              onChangeText={setPrice}
              value={price}
              placeholder="Account Number"
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableWithoutFeedback onPress={() => setPayment(!payment)}>
              <View
                style={[
                  styles.provideCover,
                  {backgroundColor: '#C4C4C4', width: 160, height: 56},
                ]}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  Cancel
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={[
                styles.provideCover,
                {width: 160, height: 56, marginLeft: 10},
              ]}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Save
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeCover: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    backgroundColor: '#fff',
  },
  provideCover: {
    width: 242,
    height: 41,
    backgroundColor: '#50B12F',
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
  },
  programCover: {
    flexDirection: 'column',
    paddingLeft: 20,
    width: '100%',
  },
  codeCover: {
    flexDirection: 'row',
    height: 41,
    alignItems: 'center',
    marginBottom: 14,
    justifyContent: 'space-between',
  },
  courseCover: {
    width: 146,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 1,
  },
  radioCover: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioContain: {
    flexDirection: 'row',
    marginLeft: 15,
    height: 24,
    alignItems: 'center',
  },
  btnCover: {
    width: '100%',
    height: 55,
    backgroundColor: '#50B12F',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 14,
  },
  uploadCover: {
    width: '100%',
    height: 110,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#807E7E',
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
  },
});
