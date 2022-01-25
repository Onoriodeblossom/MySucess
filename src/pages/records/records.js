import {
  StyleSheet,
  //   TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
    ScrollView,
  //   Image,
  //   Keyboard,
  //   TouchableOpacity,
  //   KeyboardAvoidingView,
  //   BackgroundImage,
  //   ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import NavSection from '../../components/nav/nav';
import {Modal} from '../../components/ modal/modal';

const RecordScreen = () => {
  const [deleting, setDeleting] = useState(false);
  const [swipe, setSwipe] = useState(false);
  const [courses, setCourse] = useState([
    {
      name: 'Intro to Physics 101',
      date: '25/11/2021',
      file: 'PDF File',
      size: '3mb',
    },
    {name: 'Geophysics 321', date: '25/11/2021', file: 'PDF File', size: '3mb'},
    {name: 'Biophysics 211', date: '25/11/2021', file: 'PDF File', size: '3mb'},
    {name: 'Geophysics 421', date: '25/11/2021', file: 'PDF File', size: '3mb'},
  ]);

  const [records, setRecords] = useState([
      {name: "Emeka Odili", level: "100L", money: "N3,500", sub: "Intro to Physics", date: "12/11/2021"},
      {name: "Fransisca Imile", level: "300L", money: "N3,500", sub: "PQ Geophysics 321", date: "10/11/2021"},
      {name: "Fransisca Imile", level: "300L", money: "N3,500", sub: "PQ Geophysics 321", date: "10/11/2021"},
      {name: "Fransisca Imile", level: "300L", money: "N3,500", sub: "PQ Geophysics 321", date: "10/11/2021"},
      {name: "Emeka Odili", level: "100L", money: "N3,500", sub: "Intro to Physics", date: "12/11/2021"},
      {name: "Emeka Odili", level: "100L", money: "N3,500", sub: "Intro to Physics", date: "12/11/2021"},
      {name: "Emeka Odili", level: "100L", money: "N3,500", sub: "Intro to Physics", date: "12/11/2021"},
      {name: "Emeka Odili", level: "100L", money: "N3,500", sub: "Intro to Physics", date: "12/11/2021"},
      {name: "Emeka Odili", level: "100L", money: "N3,500", sub: "Intro to Physics", date: "12/11/2021"},
      {name: "Emeka Odili", level: "100L", money: "N3,500", sub: "Intro to Physics", date: "12/11/2021"},
  ])


  const mapCourses = courses.map((v, i) => (
    <View key={i} style={styles.coverCourse}>
      <View>
        <Text style={styles.courseName}>{v.name}</Text>
        <Text style={styles.courseDetails}>
          Uploaded {v.date}, {v.size}, {v.file}
        </Text>
      </View>

      <Icon
        name="arrowright"
        style={{marginTop: 5}}
        size={21}
        color="#807E7E"
        onPress={() => setDeleting(!deleting)}
      />
    </View>
  ));


  const mapRecords = records.map((v,i) => (
    <View key={i} style={[styles.coverCourse, { borderWidth: 0}]}>
    <View>
      <Text style={styles.courseName}>{v.name} . {v.level}</Text>
      <Text style={styles.courseDetails}>
        {v.sub} . {v.date}
      </Text>
    </View>

    <Text style={{marginTop: 20 ,fontWeight: "bold", color: "#50B12F"}}>{v.money}.00</Text>
  </View>
  ))

  return (
    <View style={{backgroundColor:"#fff", flex:1
    }}>
      
      
    <ScrollView>
      <NavSection />
      <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
          <View style={styles.flexTwo}>
            <TouchableWithoutFeedback onPress={() => setSwipe(false)}>
              <Text style={{fontSize: 16, color: !swipe ? "#50B12F" : "#C5C5C5" }}>Uploaded Courses</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setSwipe(true)}>
              <Text style={{fontSize: 16, color: swipe ? "#50B12F" : "#C5C5C5" }}>Payment Records</Text>
            </TouchableWithoutFeedback>
          </View>
        {!swipe ?  mapCourses : mapRecords}
      </View>

      <Modal show={deleting} close={() => setDeleting(!deleting)}>
        <Text style={{width: 209, marginLeft: "auto", marginRight: "auto", textAlign: "center", fontSize: 18}}>Are you sure you want to remove this material?</Text>

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
              Delete
            </Text>
          </View>
        </View>
      </Modal>

    </ScrollView>

    </View>
  );
};

export default RecordScreen;

const styles = StyleSheet.create({
  coverCourse: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#fff',
    borderBottomColor: '#807E7E',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  courseName: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  courseDetails: {
    color: '#807E7E',
    marginTop: 2,
    fontSize: 14,
  },
  flexTwo: {
    flexDirection: "row",
    marginTop: 26,
    marginBottom: 26,
    justifyContent: "space-between"
  },
  provideCover: {
    width: 242,
    height: 41,
    backgroundColor: '#C71515',
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
  },
});
