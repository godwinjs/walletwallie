import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const featuresData = [
    {
        id: 1,
        icon: require(`../assets/icons/reload.png`),
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "Top Up"
    },
    {
        id: 2,
        icon: require(`../assets/icons/send.png`),
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Transfer"
    },
    {
        id: 3,
        icon: require(`../assets/icons/internet.png`),
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Internet"
    },
    {
        id: 4,
        icon: require(`../assets/icons/wallet.png`),
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Wallet"
    },
    {
        id: 5,
        icon: require(`../assets/icons/bill.png`),
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Bill"
    },
    {
        id: 6,
        icon: require(`../assets/icons/games.png`),
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Games"
    },
    {
        id: 7,
        icon: require(`../assets/icons/phone.png`),
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Mobile Prepaid"
    },
    {
        id: 8,
        icon: require(`../assets/icons/more.png`),
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "More"
    },
]
const specialPromoData = [
    {
        id: 1,
        img: images.promoBanner,
        title: "Bonus Cashback1",
        description: "Don't miss it. Grab it now!"
    },
    {
        id: 2,
        img: images.promoBanner,
        title: "Bonus Cashback2",
        description: "Don't miss it. Grab it now!"
    },
    {
        id: 3,
        img: images.promoBanner,
        title: "Bonus Cashback3",
        description: "Don't miss it. Grab it now!"
    },
    {
        id: 4,
        img: images.promoBanner,
        title: "Bonus Cashback4",
        description: "Don't miss it. Grab it now!"
    },
]

// 
function renderHeader() {
    return (
        <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.h1 }}>Hello!</Text>
                <Text style={{ ...FONTS.body2, color: COLORS.gray }}>Kurious Godwin</Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={{
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.lightGray
                    }}
                >
                    <Image
                        source={require('../assets/icons/bell.png')}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.secondary
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: -5,
                            right: -5,
                            height: 10,
                            width: 10,
                            backgroundColor: COLORS.red,
                            borderRadius: 5
                        }}
                    >
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
function renderBanner() {
    return (
        <View
            style={{
                height: 120,
                borderRadius: 20,
            }}
        >
            <Image
                source={require('../assets/images/banner.png')}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20
                }}
            />
        </View>
    )
}
function renderFeatures() {

    const Header = () => (
        <View style={{ marginBottom: SIZES.padding * 2 }}>
            <Text style={{ ...FONTS.h3 }}>Features</Text>
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
            onPress={() => console.log(item.description)}
        >
            <View
                style={{
                    height: 50,
                    width: 50,
                    marginBottom: 5,
                    borderRadius: 20,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: item.color
                    }}
                />
            </View>
            <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }}>{item.description}</Text>
        </TouchableOpacity>
    )

    return (
        <FlatList
            ListHeaderComponent={Header}
            data={featuresData}
            numColumns={4}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            style={{ marginTop: SIZES.padding * 2 }}
        />
    )
}
function renderPromos() {

    const HeaderComponent = () => (
        <View>
            {renderHeader()}
            {renderBanner()}
            {renderFeatures()}
            {renderPromoHeader()}
        </View>
    )

    const renderPromoHeader = () => (
        <View
            style={{
                flexDirection: 'row',
                marginBottom: SIZES.padding
            }}
        >
            <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
            </View>
            <TouchableOpacity
                onPress={() => console.log("View All")}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
            </TouchableOpacity>
        </View>

    )

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                marginVertical: SIZES.base,
                width: SIZES.width / 2.5
            }}
            onPress={() => console.log(item.title)}
        >
            <View
                style={{
                    height: 80,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.primary
                }}
            >
                <Image
                    source={require('../assets/images/promo-banner.png')}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}
                />
            </View>

            <View
                style={{
                    padding: SIZES.padding,
                    backgroundColor: COLORS.lightGray,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            >
                <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <FlatList
            ListHeaderComponent={HeaderComponent}
            contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={specialPromoData}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
                <View style={{ marginBottom: 80 }}>
                </View>
            }
        />
    )
}

const Home = () => {   
    const [features, setFeatures] = useState(featuresData)
    const [specialPromos, setSpecialPromos] = useState(specialPromoData)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    )
}

export default Home;