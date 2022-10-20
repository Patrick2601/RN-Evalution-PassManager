import {createSlice} from '@reduxjs/toolkit';
import Facebook from '../../images/06/01/Bitmap.png';
import Twitter from '../../images/06/01copy4/BitmapCopy2.png';
import Youtube from '../../images/06/01copy3/Bitmap.png';
import Instagram from '../../images/06/01copy/Bitmap.png';
const Image_Icon = [Facebook, Youtube, Twitter, Instagram];

const initialState = [
  {
    id: '1',
    url: 'www.facebook.com',
    siteName: 'Facebook',
    folder: 'Social Media',
    userName: 'pv',
    sitePassword: '0000',
    notes: 'None',
    icon: Image_Icon[0],
  },
  {
    id: '2',
    url: '222.youtube.com',
    siteName: 'Youtube',
    folder: 'Social Media',
    userName: 'pv',
    sitePassword: '0000',
    notes: 'None',
    icon: Image_Icon[1],
  },
  {
    id: '3',
    url: 'www.twitter.com',
    siteName: 'Twitter',
    folder: 'Social Media',
    userName: 'pv',
    sitePassword: '0000',
    notes: 'None',
    icon: Image_Icon[2],
  },
  {
    id: '4',
    url: 'www.instagram.com',
    siteName: 'Instagram',
    folder: 'Social Media',
    userName: 'pv',
    sitePassword: '0000',
    notes: 'None',
    icon: Image_Icon[3],
  },
];

export const Slice = createSlice({
  name: 'site',
  initialState: {
    value: initialState,
    preState: initialState 
  },
  reducers: {
    addSite: (state, action) => {
      state.value.push(action.payload);
      state.preState.push(action.payload);

    },
    filter: (state, action) => {
      state.value = state.preState.filter(item =>
        item.siteName.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
});

export const {addSite,filter} = Slice.actions;

export default Slice.reducer;
