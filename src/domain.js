var parse = require('url').parse,
    tld = require('tld.js');
    

module.exports = function (url) {
  if(typeof url === 'string') url = parse(url);
  if(!url.hostname) return '';
  var domain = url.hostname.match(new RegExp('([a-zA-Z]*?.' + tld(url) + ')$'));
  if(domain) return domain[1];
  else return '';
}