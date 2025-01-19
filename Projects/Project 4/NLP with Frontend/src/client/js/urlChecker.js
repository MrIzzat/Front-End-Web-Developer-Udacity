function checkURL(url){
    try {
        url = new URL(url);
        return true
      } catch (_) {
        return false;  
      }
}


export { checkURL };