import React, { useState, useEffect } from 'react';
import { DeviceEventEmitter, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
// import Beacons from 'react-native-beacons-manager';
// import BluetoothState from 'react-native-bluetooth-state';

import { logoutFromGoogle } from 'services/socialLogin';
import { Container } from 'common/general';
import { TextContent } from 'common/typography';

import { ExtendedButton } from './styled';

const Dashboard: React.FC<DashboardProps> = () => {
  const [bluetoothState, setBluetoothState] = useState(false);
  const [identifier, setIdentifier] = useState('POWER_1');
  const [uuid, setUuid] = useState('SL6-STICKNFIND-9');
  const [dataSource, setDataSource] = useState([]);
  const [beaconsInit, setBeaconsInit] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    // const region = { identifier, uuid };

    // Beacons.requestAlwaysAuthorization();

    // // Range for beacons inside the region
    // Beacons
    //   .startRangingBeaconsInRegion(region)
    //   .then((data) => console.log('Beacons ranging started succesfully', data))
    //   .catch((error) => console.log(`Beacons ranging not started, error: ${error}`));

    // update location to ba able to monitor:
    // Beacons.startUpdatingLocation();

    // setBeaconsInit(true);
  }, [identifier, uuid]);

  // useEffect(() => {
  //   if (beaconsInit) {
  //     Beacons.BeaconsEventEmitter.addListener(
  //       'beaconsDidRange',
  //       (data) => {
  //         console.log('beaconsDidRange data: ', data);
  //         // const { beacons } = data;
  //         // const { rangingDataSource } = this.state;
  //         // this.setState({
  //         //   rangingDataSource: rangingDataSource.cloneWithRowsAndSections(this.convertRangingArrayToMap(beacons)),
  //         // });
  //       },
  //     );
  //   }
  // }, [beaconsInit]);

  // useEffect(() => {
  //   console.log('dataSource', dataSource);
  // }, [dataSource]);

  return (
    <Container>
      <View style={{ marginBottom: 16 }}>
        <TextContent>
          Bluetooth connection status: {bluetoothState ? bluetoothState : 'NA'}
        </TextContent>
        <TextContent>
          All beacons in the area
        </TextContent>
      </View>

      <ExtendedButton
        onPress={logoutFromGoogle}
        title="Logout"
        variant="secondary"
      />
      <ExtendedButton
        onPress={() => navigation.navigate('FaqModal')}
        title="View FAQ"
        testID="faqButton"
      />
    </Container>
  );
};

type DashboardProps = {};

export default Dashboard;
