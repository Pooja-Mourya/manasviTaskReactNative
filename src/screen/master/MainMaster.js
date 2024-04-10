// MasterScreen.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View , Text} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import Master from '../master/Master';
import Search from '../../component/Search';
import Table from './Table';
import LedgerSearch from './LedgerSearch';  
import LedgerTable from './LedgerTable';
import Header from '../../component/Header';

export default function MainMaster() {
    const [highlightedOption, setHighlightedOption] = useState(1);
    const masterType = [
        { id: 1, name: 'Shift' },
        { id: 2, name: 'Ledgers' },
        { id: 3, name: 'Agents' },
        { id: 4, name: 'Feedback' },
    ];

    return (
        <LinearGradient colors={['#141F35', '#141F35']} style={{ flex: 1 }}>
            <Header/>
            <Text style={{color:'white', fontSize:25}}>pooja</Text>
            <ScrollView style={styles.scrollViewContent}>
                <View style={{ flexDirection: "column", justifyContent: "center" }} >
                    <Master masterType={masterType} highlightedOption={highlightedOption} setHighlightedOption={setHighlightedOption} />
                    <View>
                        {highlightedOption === 1 && <>
                            <Search />
                            <Table />
                        </>}
                        {highlightedOption === 2 && <>
                            <LedgerSearch />
                            <LedgerTable />
                        </>}
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        marginTop: 80,
    },
});
