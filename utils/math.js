const genRandomString = (len = 16) => {
   let res = '';
   const carSelection = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
   const carSelectionLen = carSelection.length;


   for( let i = 0; i < len; i++) {
    res += carSelection.charAt(Math.floor(Math.random() * carSelectionLen));
   }

    return res;
}

module.exports = { genRandomString };