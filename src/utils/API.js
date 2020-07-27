// npm installed axios and imported it
import axios from 'axios';

export const getData = () => axios.get('https://randomuser.me/api/?nat=us&results=50')