var assert = require("assert");
var s = require('../');

describe('urlize', function(){
    it('should urlize simple string', function(){
        assert.equal(s("tedwd  st/tw est ----/--- ges~& -"), "/tedwd-st/tw-est/ges");
    });

    it('should urlize czech string', function(){
        assert.equal(s("    pŘíliš    žluťoučký KŮŇ úpěľ žalostné ódy  "), "/prilis-zlutoucky-kun-upel-zalostne-ody");
    });

    it('should urlize crazy string', function(){
        assert.equal(s("\t \n s€0Me st#ř_În*g \f\r "), "/s0me-str-ing");
    });

    it('should urlize crazy string', function(){
        assert.equal(s("\t \n s€0Me st#ř____---_În*g_---___ł‘ ‘      ∂∂__xt_r_r_c \f\r "), "/s0me-str-ing-xt-r-r-c");
    });

});