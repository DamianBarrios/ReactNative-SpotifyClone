import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 49,
        backgroundColor: '#131313',
        width:'100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    image:{
        width:75,
        height:75,
        marginRight: 10
    },
    rightContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer:{
        alignItems: 'baseline',
        marginLeft: -10
    },
    iconContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    title:{
        color:'white',
        fontSize:18,
        fontWeight: 'bold',
        margin: 10,
        position: 'relative'
    },
    artist:{
        color:'lightgray',
        fontSize: 18,
        marginLeft: 10
    },
    progressBar: {
        height: 3,
        backgroundColor:'#bcbcbc'
    },
    row:{
        flexDirection: 'row',
    }
})

export default styles;
