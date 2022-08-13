const CookieProvider = (() => {
  const cookie = document.cookie;

  const getCookie = (c_name: string) => {
    const ls = cookie.split(';');
    const reqCookie = ls.find((c) => c.includes(c_name));
    if (reqCookie) {
      return reqCookie.split('=')[1];
    }
    return '';
  };

  // reference: (https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript)

  const deleteAllCookies = () => {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  };

  return { getCookie, deleteAllCookies };
})();

export default CookieProvider;
