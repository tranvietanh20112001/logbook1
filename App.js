import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const ChuyenDoiDoDai = () => {
  const [giatridauvao, setgiatridauvao] = useState('');
  const [donvidauvao, setdonvidauvao] = useState('Metre');
  const [donvidaura, setdonvidaura] = useState('Millimetre');
  const [giatri, setgiatri] = useState(null);

  const chuyenDoi = () => {
    const giatri = parseFloat(giatridauvao);

    if (isNaN(giatri)) {
      alert('Error Input. Please enter a number');
      return;
    }

    let ketquadaduocconvert = 0;

    switch (donvidauvao) {
      case 'Metre':
        if (donvidaura === 'Millimetre') ketquadaduocconvert = ketqua * 1000;
        else if (donvidaura === 'Mile') ketquadaduocconvert = ketqua * 0.000621371;
        else if (donvidaura === 'Foot') ketquadaduocconvert = ketqua * 3.28084;
        break;

      case 'Millimetre':
        if (donvidaura === 'Metre') ketquadaduocconvert = ketqua / 1000;
        else if (donvidaura === 'Mile') ketquadaduocconvert = ketqua * 6.2137e-7;
        else if (donvidaura === 'Foot') ketquadaduocconvert = ketqua * 0.00328084;
        break;

      case 'Mile':
        if (donvidaura === 'Metre') ketquadaduocconvert = ketqua * 1609.34;
        else if (donvidaura === 'Millimetre') ketquadaduocconvert = ketqua * 1.60934e6;
        else if (donvidaura === 'Foot') ketquadaduocconvert = ketqua * 5280;
        break;

      case 'Foot':
        if (donvidaura === 'Metre') ketquadaduocconvert = ketqua * 0.3048;
        else if (donvidaura === 'Millimetre') ketquadaduocconvert = ketqua * 304.8;
        else if (donvidaura === 'Mile') ketquadaduocconvert = ketqua * 0.000189394;
        break;

      default:
        break;
    }

    setgiatri(ketquadaduocconvert);
  };

  const resetFields = () => {
    setgiatridauvao('');
    setdonvidauvao('Metre');
    setdonvidaura('Millimetre');
    setgiatri(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.cardStyle}>
        <Title style={styles.tieuDe}>Length Converter</Title>

        <TextInput
          label="Enter Value"
          mode="outlined"
          keyboardType="numeric"
          value={giatridauvao}
          onChangeText={setgiatridauvao}
          style={styles.inputStyle}
        />

        <Picker
          selectedValue={donvidauvao}
          onValueChange={setdonvidauvao}
          style={styles.picker}
        >
          <Picker.Item label="Metre" value="Metre" />
          <Picker.Item label="Millimetre" value="Millimetre" />
          <Picker.Item label="Mile" value="Mile" />
          <Picker.Item label="Foot" value="Foot" />
        </Picker>

        <Picker
          selectedValue={donvidaura}
          onValueChange={setdonvidaura}
          style={styles.picker}
        >
          <Picker.Item label="Metre" value="Metre" />
          <Picker.Item label="Millimetre" value="Millimetre" />
          <Picker.Item label="Mile" value="Mile" />
          <Picker.Item label="Foot" value="Foot" />
        </Picker>

        <View style={styles.buttonContainerStyle}>
          <Button mode="contained" onPress={chuyenDoi} style={styles.convertButtonStyle}>
            Convert
          </Button>
          <Button mode="outlined" onPress={resetFields} style={styles.resetButtonStyle}>
            Reset
          </Button>
        </View>

        {giatri !== null && (
          <Text style={styles.resultTextStyle}>
            {giatridauvao} {donvidauvao} = {giatri} {donvidaura}
          </Text>
        )}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardStyle: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 5,
  },
  tieuDe: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ea',
  },
  inputStyle: {
    marginBottom: 20,
  },
  picker: {
    marginBottom: 20,
    width: '100%',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  convertButtonStyle: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  resetButtonStyle: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#6200ea',
    borderWidth: 1,
  },
  resultTextStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChuyenDoiDoDai;
