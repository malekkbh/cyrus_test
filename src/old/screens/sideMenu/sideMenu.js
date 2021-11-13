import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';
import imagesIndex from '../../../assets/images/imagesIndex';
import { CyrusModal, MenuItem, ModalFilterView, ModalSortComponent } from '../../components';

let viewType = '';

const SideMenue = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation()

    let sideMenuData = [
        {
            title: 'Sort',
            onPress: () => onSortPress(),
        },
        {
            title: 'Filter',
            onPress: () => onFilterPress(),
        },
    ]

    const onSortPress = () => {
        setModalVisible(true);
        viewType = 'sort';
    };

    const onFilterPress = () => {
        setModalVisible(true);
        viewType = 'filter';
    };

    const params = {
        modal: {
            modalVisible: modalVisible,
        },
        logo: {
            source: imagesIndex.splashImage(),
            style: styles.logo,
        }
    }

    const closeModal = (dontToggleDrawer) => {
        setModalVisible(false);
        !dontToggleDrawer && navigation.dispatch(DrawerActions.toggleDrawer())
    }

    const sortViewParams = {
        closeModal: (dontToggleDrawer) => closeModal(dontToggleDrawer),
    }

    const renderModalViews = () => {
        switch (viewType) {
            case 'sort':
                return (<ModalSortComponent {...sortViewParams} />)
            case 'filter':
                return (<ModalFilterView {...sortViewParams} />)
            default:
                break;
        }
    }

    const renderMenUItems = () => sideMenuData.map(item => <MenuItem {...item} />)

    return (
        <View style={styles.container}>
            <Image {...params.logo} />
            <CyrusModal {...params.modal}>
                {renderModalViews()}
            </CyrusModal>
            {renderMenUItems()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    logo: {
        width: '100%',
        height: 40,
        resizeMode: 'contain',
        marginBottom: 70,
    },
})

export default SideMenue;