import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { KeyValueItem } from '..';
import { strings } from '../../res';

const Profile = (props) => {


    const { data } = props;

    const renderProfileData = () => {
        let profileData = [
            {
                keyText: strings.display_name,
                value: data?.display_name || '',
            },
            {
                keyText: strings.reputation,
                value: data?.reputation || '',
            },
            {
                keyText: strings.accept_rate,
                value: data?.accept_rate || '',
            }
        ]
        return profileData.map(item => <KeyValueItem {...item} />)
    }

    const params = {
        profileImage: {
            source: { uri: data?.profile_image },
            style: styles.image
        }
    }

    return (
        <View style={styles.container}>
            <Image {...params.profileImage} />
            <View>
                {renderProfileData()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        backgroundColor: '#ffff',
    }
});

export default Profile;