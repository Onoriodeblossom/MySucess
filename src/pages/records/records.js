import {
  StyleSheet,
  //   TextInput,
  View,
  Text,
  //   ScrollView,
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

const RecordScreen = () => {
  const [deleting, setDeleting] = useState(false);
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

  const mapCourses = courses.map((v, i) => (
    <View style={styles.coverCourse}>
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

  return (
    <View>
      <NavSection />
      <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
        {mapCourses}
      </View>
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
});
