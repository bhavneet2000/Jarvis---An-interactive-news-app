import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '300px',
        padding: '10% 0 10% 0',
        borderRadius: 10,
        color: 'white'
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',

    },
    card2: {
        textAlign: 'center',
        backgroundColor: '#f50057',
        color: 'white',
        alignItems: 'center',
        width: '25%',
        borderRadius: 75,
        margin: '0 12px',
        display: 'flex',
        justifyContent: 'center',
        height: '30vmin',
    },
});

